(() => {
  "use strict";

  const AUTH_KEY = "notesme_auth_status_v1";
  const USERNAME = "khafidz";
  const PASSWORD_HASH = "7192220195ebb04f635e1c60e75a4e1060149ca7cf58f72912ec63fe836298a2";

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

      if (isAuthenticated()) {
        window.location.replace(next);
        return;
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
