(() => {
  "use strict";

  const AUTH_KEY = "notesme_auth_status_v1";
  const USERNAME = "khafidz";
  const PASSWORD_HASH = "7192220195ebb04f635e1c60e75a4e1060149ca7cf58f72912ec63fe836298a2";

  const FP_ID_KEY = "notesme_fp_credential_id";
  const FP_RP_ID = "notesme.site";

  const path = window.location.pathname.toLowerCase();
  const isLoginPage = path.endsWith("/login.html") || path.endsWith("/login");
  const loginUrl = `${window.location.origin}/login.html`;

  function isAuthenticated() {
    return window.sessionStorage.getItem(AUTH_KEY) === "authenticated";
  }

  function safeNext(next) {
    if (!next || typeof next !== "string") return "/";
    if (!next.startsWith("/") || next.startsWith("//")) return "/";
    if (next.toLowerCase().includes("login.html")) return "/";
    return next;
  }

  async function sha256(text) {
    const data = new TextEncoder().encode(text);
    const buffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(buffer))
      .map(byte => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  // === Fingerprint / Face ID via WebAuthn (platform authenticator) ===
  // Tidak ada server di situs ini, jadi verifikasinya murni perangkat:
  // sukses navigator.credentials.get() sudah berarti sensor biometrik OS
  // (secure enclave) sudah memverifikasi pemiliknya untuk origin ini.
  // Kredensial disimpan per perangkat (localStorage) — tidak sinkron
  // antar-HP, sama seperti cara kerja fingerprint di aplikasi native.

  function bufToBase64(buf) {
    return btoa(String.fromCharCode(...new Uint8Array(buf)));
  }

  function base64ToBuf(b64) {
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes.buffer;
  }

  async function fpAvailable() {
    if (!window.PublicKeyCredential) return false;
    try {
      return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
    } catch {
      return false;
    }
  }

  function fpHasCredential() {
    return !!window.localStorage.getItem(FP_ID_KEY);
  }

  async function fpRegister() {
    const challenge = crypto.getRandomValues(new Uint8Array(32));
    const userId = crypto.getRandomValues(new Uint8Array(16));

    const credential = await navigator.credentials.create({
      publicKey: {
        challenge,
        rp: { id: FP_RP_ID, name: "NotesMe" },
        user: { id: userId, name: USERNAME, displayName: "Khafidz" },
        pubKeyCredParams: [
          { type: "public-key", alg: -7 },
          { type: "public-key", alg: -257 }
        ],
        authenticatorSelection: {
          authenticatorAttachment: "platform",
          userVerification: "required",
          residentKey: "preferred"
        },
        timeout: 60000,
        attestation: "none"
      }
    });

    window.localStorage.setItem(FP_ID_KEY, bufToBase64(credential.rawId));
  }

  async function fpLogin() {
    const idB64 = window.localStorage.getItem(FP_ID_KEY);
    if (!idB64) throw new Error("no-credential");

    const challenge = crypto.getRandomValues(new Uint8Array(32));

    return navigator.credentials.get({
      publicKey: {
        challenge,
        allowCredentials: [{ id: base64ToBuf(idB64), type: "public-key", transports: ["internal"] }],
        userVerification: "required",
        timeout: 60000
      }
    });
  }

  if (!isLoginPage && !isAuthenticated()) {
    const next = encodeURIComponent(window.location.pathname + window.location.search + window.location.hash);
    window.location.replace(`${loginUrl}?next=${next}`);
    return;
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (isLoginPage) {
      const form = document.getElementById("loginForm");
      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");
      const message = document.getElementById("loginMessage");
      const togglePassword = document.getElementById("togglePassword");
      const params = new URLSearchParams(window.location.search);
      const next = safeNext(params.get("next"));

      const fpLoginBtn = document.getElementById("fpLoginBtn");
      const fpPrompt = document.getElementById("fpPrompt");
      const fpEnableBtn = document.getElementById("fpEnableBtn");
      const fpSkipBtn = document.getElementById("fpSkipBtn");
      const fpMessage = document.getElementById("fpMessage");

      if (isAuthenticated()) {
        window.location.replace(next);
        return;
      }

      (async () => {
        if (fpLoginBtn && fpHasCredential() && (await fpAvailable())) {
          fpLoginBtn.hidden = false;
        }
      })();

      if (fpLoginBtn) {
        fpLoginBtn.addEventListener("click", async () => {
          fpLoginBtn.disabled = true;
          message.textContent = "Menunggu verifikasi fingerprint...";
          message.className = "auth-message";
          try {
            await fpLogin();
            window.sessionStorage.setItem(AUTH_KEY, "authenticated");
            message.textContent = "Berhasil masuk. Mengalihkan...";
            message.className = "auth-message success";
            window.location.replace(next);
          } catch (err) {
            message.textContent = "Verifikasi fingerprint gagal atau dibatalkan. Silakan pakai password.";
            message.className = "auth-message error";
            fpLoginBtn.disabled = false;
          }
        });
      }

      if (togglePassword && passwordInput) {
        togglePassword.addEventListener("click", () => {
          const visible = passwordInput.type === "text";
          passwordInput.type = visible ? "password" : "text";
          togglePassword.textContent = visible ? "Tampilkan" : "Sembunyikan";
        });
      }

      if (!form || !usernameInput || !passwordInput || !message) return;

      form.addEventListener("submit", async event => {
        event.preventDefault();
        message.textContent = "Memeriksa akses...";
        message.className = "auth-message";

        const typedUsername = usernameInput.value.trim();
        const typedPasswordHash = await sha256(passwordInput.value);

        if (typedUsername === USERNAME && typedPasswordHash === PASSWORD_HASH) {
          window.sessionStorage.setItem(AUTH_KEY, "authenticated");

          const offerFp = fpPrompt
            && !fpHasCredential()
            && (await fpAvailable());

          if (offerFp) {
            message.textContent = "";
            form.hidden = true;
            fpPrompt.hidden = false;
            return;
          }

          message.textContent = "Berhasil masuk. Mengalihkan...";
          message.className = "auth-message success";
          window.location.replace(next);
          return;
        }

        passwordInput.value = "";
        passwordInput.focus();
        message.textContent = "Username atau password belum sesuai.";
        message.className = "auth-message error";
      });

      if (fpEnableBtn) {
        fpEnableBtn.addEventListener("click", async () => {
          fpEnableBtn.disabled = true;
          if (fpMessage) fpMessage.textContent = "Ikuti instruksi sensor fingerprint / Face ID di perangkat...";
          try {
            await fpRegister();
            window.location.replace(next);
          } catch (err) {
            if (fpMessage) {
              fpMessage.textContent = "Gagal mengaktifkan fingerprint. Melanjutkan tanpa fingerprint.";
              fpMessage.className = "auth-message error";
            }
            setTimeout(() => window.location.replace(next), 1200);
          }
        });
      }

      if (fpSkipBtn) {
        fpSkipBtn.addEventListener("click", () => {
          window.location.replace(next);
        });
      }

      return;
    }

    document.querySelectorAll("[data-logout]").forEach(button => {
      button.addEventListener("click", () => {
        window.sessionStorage.removeItem(AUTH_KEY);
        window.location.replace(loginUrl);
      });
    });
  });
})();
