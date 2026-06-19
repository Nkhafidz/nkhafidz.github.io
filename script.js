const categories = [
  {
    name: "Jadwal",
    anchor: "#jadwal",
    icon: "🗓️",
    description: "Jadwal personal, RSUD, dan SGH dalam satu akses."
  },
  {
    name: "Personal",
    anchor: "#personal",
    icon: "📝",
    description: "LMS, email, Familia Medika, dan publikasi."
  },
  {
    name: "M.A.R.S",
    anchor: "#mars",
    icon: "🎓",
    description: "Portal akademik, referensi, kelas, dan tugas."
  },
  {
    name: "SGH",
    anchor: "#sgh",
    icon: "🏥",
    description: "Link kerja SGH dan dokumen akreditasi."
  },
  {
    name: "Family",
    anchor: "#family",
    icon: "👨‍👩‍👧",
    description: "Family journey, video, dan email."
  },
  {
    name: "RSUD",
    anchor: "#rsud",
    icon: "⚕️",
    description: "SIMRS, kinerja, rawat inap, ASN, dan casemix."
  }
];

// Cara edit:
// 1. Ubah label, url, section, atau description sesuai kebutuhan.
// 2. Untuk link sensitif, jangan isi URL jika halaman GitHub Pages Anda publik.
// 3. Pakai sensitive: true untuk memberi tanda merah pada kartu.
const links = [
  // JADWAL
  {
    label: "Jadwal Personal 2025",
    category: "Jadwal",
    section: "Personal",
    url: "https://docs.google.com/spreadsheets/d/1-RITojeYcoU5uZKfiFn9Ch38VE_zLTkai27WLvFr-MQ/edit?usp=sharing",
    description: "Jadwal personal tahun 2025."
  },
  {
    label: "Jadwal Personal 2026",
    category: "Jadwal",
    section: "Personal",
    url: "https://docs.google.com/spreadsheets/d/194OkyxDa0fbzobA4MwxowsubP3E0h_4ABaX3Rgc-crI/edit?usp=sharing",
    description: "Jadwal personal tahun 2026."
  },
  {
    label: "Jadwal Dokter Umum RSUD",
    category: "Jadwal",
    section: "RSUD",
    url: "https://docs.google.com/spreadsheets/d/14cEn5UGsCvAC5GzJC-K5yjvDKZRpJ-Nu/edit?ouid=108781664144869017473&rtpof=true&sd=true&usp=sharing",
    description: "Jadwal dokter umum RSUD."
  },
  {
    label: "Jadwal Tenaga Medis",
    category: "Jadwal",
    section: "RSUD",
    url: "https://docs.google.com/spreadsheets/d/1Gh4h_OKVOwj-0RYa5HRRnKDFIfC6GG-h3VSjNyMru58/edit?gid=994476957",
    description: "Jadwal pelayanan medik dan tata usaha."
  },
  {
    label: "Jadwal DU SGH",
    category: "Jadwal",
    section: "SGH",
    url: "https://docs.google.com/spreadsheets/d/1ZUctcT-ivLDZKItQV1MmFRKpGBymmS8_lRioD7qnARY/edit?usp=sharing",
    description: "Jadwal dokter umum SGH."
  },
  {
    label: "Jadwal DU HRD",
    category: "Jadwal",
    section: "SGH",
    url: "#",
    sensitive: true,
    description: "Isi URL sendiri jika aksesnya aman atau terbatas."
  },
  {
    label: "Jadwal Rancangan",
    category: "Jadwal",
    section: "SGH",
    url: "#",
    sensitive: true,
    description: "Placeholder untuk rancangan jadwal."
  },

  // PERSONAL
  {
    label: "LMS SatuSehat",
    category: "Personal",
    section: "Personal",
    url: "https://satusehat.kemkes.go.id/sdmk/login",
    description: "Portal LMS SatuSehat Kemenkes."
  },
  {
    label: "Personal Mail",
    category: "Personal",
    section: "Personal",
    url: "https://docs.google.com/spreadsheets/d/1Iq26AuFFYWQfq6NGvXBBkXY37mWNwJqZMT9YPYPVv9U/edit?usp=sharing",
    description: "Catatan mail personal. Pastikan akses Google Sheet sudah restricted bila perlu."
  },
  {
    label: "Familia Medika Drive",
    category: "Personal",
    section: "FamiliaMedika",
    url: "https://drive.google.com/drive/folders/1MJcjPU4ijzPRdjPzTAuZVHpOefHlmDAE?usp=sharing",
    description: "Folder kerja Familia Medika."
  },
  {
    label: "Website Familia Medika",
    category: "Personal",
    section: "FamiliaMedika",
    url: "https://familiamedika.my.canva.site/",
    description: "Website Familia Medika."
  },
  {
    label: "Publikasi — G Sheet",
    category: "Personal",
    section: "Publikasi",
    url: "https://docs.google.com/spreadsheets/d/1ieois_AREkz5-yw-2grprjrGRQJ4THCTp_0aoKIkwVU/edit?usp=sharing",
    description: "Tracking publikasi."
  },

  // MARS
  {
    label: "Penmaru Pasca UMY",
    category: "M.A.R.S",
    section: "Akademik Utama",
    url: "https://penmarupasca.umy.ac.id/home/login",
    description: "Portal penerimaan mahasiswa baru pascasarjana."
  },
  {
    label: "Registrasi Pasca UMY",
    category: "M.A.R.S",
    section: "Akademik Utama",
    url: "https://registrasipasca.umy.ac.id/",
    description: "Portal registrasi pascasarjana UMY."
  },
  {
    label: "KRS UMY",
    category: "M.A.R.S",
    section: "Akademik Utama",
    url: "https://krs.umy.ac.id/Default.aspx",
    description: "KRS online UMY."
  },
  {
    label: "Jadwal Kuliah Sem 1",
    category: "M.A.R.S",
    section: "Akademik Utama",
    url: "https://drive.google.com/drive/folders/15cG42Sw6NM3EigX6CkTVYCslqOljr2iB?usp=drive_link",
    description: "Folder jadwal kuliah semester 1."
  },
  {
    label: "Jadwal Kuliah Sem 2",
    category: "M.A.R.S",
    section: "Akademik Utama",
    url: "https://docs.google.com/spreadsheets/d/1bQ2WRCV7AGBgnHB-by9HlDOxGgDwD74u/edit?ouid=110316624599224433743&rtpof=true&sd=true&usp=sharing",
    description: "Jadwal perkuliahan semester 2."
  },
  {
    label: "Presensi / Course",
    category: "M.A.R.S",
    section: "Akademik Utama",
    url: "https://myklass-pasca.umy.ac.id/",
    description: "Learning Pascasarjana UMY."
  },
  {
    label: "Synthesis / Thesis",
    category: "M.A.R.S",
    section: "Akademik Utama",
    url: "https://sinthesis.umy.ac.id/",
    description: "Portal tesis/sintesis."
  },
  {
    label: "GForm Pengajuan Judul",
    category: "M.A.R.S",
    section: "Akademik Utama",
    url: "#",
    description: "Isi URL Google Form pengajuan judul."
  },
  {
    label: "Library",
    category: "M.A.R.S",
    section: "Referensi & Penelitian",
    url: "https://www.notesme.site/s2/perpustakaan",
    description: "Halaman library dari NotesMe lama."
  },
  {
    label: "Remote Scopus",
    category: "M.A.R.S",
    section: "Referensi & Penelitian",
    url: "https://www.sciencedirect.com/",
    description: "Akses ScienceDirect/remote Scopus."
  },
  {
    label: "Perplexity",
    category: "M.A.R.S",
    section: "Referensi & Penelitian",
    url: "https://www.perplexity.ai/",
    description: "Asisten riset dan pencarian literatur."
  },
  {
    label: "Notebook LM",
    category: "M.A.R.S",
    section: "Referensi & Penelitian",
    url: "https://notebooklm.google.com/",
    description: "Notebook LM untuk membaca dan merangkum sumber."
  },
  {
    label: "Scholar GPT",
    category: "M.A.R.S",
    section: "Referensi & Penelitian",
    url: "https://chatgpt.com/g/g-kZ0eYXlJe-scholar-gpt?locale=id-ID",
    description: "Akses Scholar GPT."
  },
  {
    label: "Napkin AI",
    category: "M.A.R.S",
    section: "Referensi & Penelitian",
    url: "https://www.napkin.ai/",
    description: "Membuat visual/diagram dari teks."
  },
  {
    label: "Humata",
    category: "M.A.R.S",
    section: "Referensi & Penelitian",
    url: "https://www.humata.ai/",
    description: "AI pembaca dokumen."
  },
  {
    label: "GitMind",
    category: "M.A.R.S",
    section: "Referensi & Penelitian",
    url: "https://gitmind.com/",
    description: "Mind map dan diagram."
  },
  {
    label: "Akun Premium",
    category: "M.A.R.S",
    section: "Referensi & Penelitian",
    url: "https://bit.ly/akunpremiumumy2023",
    description: "Catatan akun premium. Pastikan dokumen tidak berisi kredensial publik."
  },
  {
    label: "Publikasi — Drive",
    category: "M.A.R.S",
    section: "Referensi & Penelitian",
    url: "https://drive.google.com/drive/folders/1Y00BJfJ6icwK-Rcz93ebkJfH6ZfDdGqS?usp=sharing",
    description: "Folder publikasi."
  },
  {
    label: "Turnitin",
    category: "M.A.R.S",
    section: "Referensi & Penelitian",
    url: "https://www.turnitin.com/login_page.asp",
    description: "Portal Turnitin."
  },
  {
    label: "G-Drive",
    category: "M.A.R.S",
    section: "Kelas Online / Komunikasi",
    url: "https://drive.google.com/drive/u/1/home",
    description: "Google Drive akun kelas/akademik."
  },
  {
    label: "G-Drive Class",
    category: "M.A.R.S",
    section: "Kelas Online / Komunikasi",
    url: "https://drive.google.com/drive/folders/1XuUwEsYSwSAkqTC1aN00yqKeSTnCbUVA?usp=sharing",
    description: "Folder kelas Pascasarjana."
  },
  {
    label: "Rekaman",
    category: "M.A.R.S",
    section: "Kelas Online / Komunikasi",
    url: "https://www.notesme.site/s2/rekaman",
    description: "Halaman rekaman kuliah."
  },
  {
    label: "Web Mail",
    category: "M.A.R.S",
    section: "Kelas Online / Komunikasi",
    url: "https://outlook.office365.com/mail/",
    description: "Outlook web mail."
  },
  {
    label: "G-Drive Progress",
    category: "M.A.R.S",
    section: "Tugas",
    url: "https://docs.google.com/spreadsheets/d/1nJr92bQJ5cNoxTb4uUdQHDT7DNEwFFhN658MMP3Fle4/edit?usp=sharing",
    description: "Checklist progress tugas kelas."
  },
  {
    label: "UTS",
    category: "M.A.R.S",
    section: "Tugas",
    url: "#",
    description: "Isi URL dokumen UTS."
  },

  // SGH
  {
    label: "Register Pasien SGH",
    category: "SGH",
    section: "Operasional",
    url: "#",
    sensitive: true,
    description: "Placeholder. Jangan taruh link register pasien di halaman publik."
  },
  {
    label: "Aviat In Hospital",
    category: "SGH",
    section: "Operasional",
    url: "#",
    sensitive: true,
    description: "Akses internal/VPN. Isi URL sendiri bila halaman tidak publik."
  },
  {
    label: "Aviat Out Hospital",
    category: "SGH",
    section: "Operasional",
    url: "#",
    sensitive: true,
    description: "Akses internal/VPN. Isi URL sendiri bila halaman tidak publik."
  },
  {
    label: "Akreditasi SGH",
    category: "SGH",
    section: "Dokumen",
    url: "https://docs.google.com/spreadsheets/d/17Ua28p-JfhNmndYfURVg_UlpFJowVOHjS4g_tsItV8M/edit?gid=630245143",
    description: "Pembagian PIC elemen akreditasi."
  },
  {
    label: "File SGH",
    category: "SGH",
    section: "Dokumen",
    url: "https://drive.google.com/drive/folders/1AOTRHYVs-whgqcu0orfASOT1FTyzoANH?usp=sharing",
    description: "Folder file SGH."
  },

  // FAMILY
  {
    label: "Our Journey",
    category: "Family",
    section: "Family",
    url: "https://www.ourfamilyjourney.cc/",
    description: "Website family journey."
  },
  {
    label: "Our Video",
    category: "Family",
    section: "Family",
    url: "https://www.youtube.com/ourfamilyjourney.id",
    description: "Channel/video keluarga."
  },
  {
    label: "Our Mail",
    category: "Family",
    section: "Family",
    url: "mailto:khafidz.subekti@gmail.com",
    description: "Email kontak keluarga."
  },

  // RSUD
  {
    label: "SIMRS RSUD",
    category: "RSUD",
    section: "SIMRS",
    url: "https://sarasadyatma.com/index.php/auth",
    sensitive: true,
    description: "Portal SIMRS. Pastikan hanya untuk akses pengguna berwenang."
  },
  {
    label: "Cloud RSSA",
    category: "RSUD",
    section: "SIMRS",
    url: "https://www.rssa.simpedia.cloud/",
    sensitive: true,
    description: "Portal cloud RSSA."
  },
  {
    label: "SRV RSSA",
    category: "RSUD",
    section: "SIMRS",
    url: "https://rssa.srvsimpedia.cloud/index.php/portal",
    sensitive: true,
    description: "Portal server RSSA."
  },
  {
    label: "SIMRS 4",
    category: "RSUD",
    section: "SIMRS",
    url: "#",
    sensitive: true,
    description: "Alamat IP internal. Isi URL sendiri dan akses via VPN/jaringan internal."
  },
  {
    label: "RME",
    category: "RSUD",
    section: "SIMRS",
    url: "https://rssa.rme.web.id/",
    sensitive: true,
    description: "Portal rekam medis elektronik."
  },
  {
    label: "Register IGD",
    category: "RSUD",
    section: "Register",
    url: "#",
    sensitive: true,
    description: "Placeholder. Jangan taruh link register pasien di GitHub Pages publik."
  },
  {
    label: "Rawat Inap",
    category: "RSUD",
    section: "Register",
    url: "#",
    sensitive: true,
    description: "Placeholder untuk register/rawat inap."
  },
  {
    label: "VK-Perina-Nifas",
    category: "RSUD",
    section: "Register",
    url: "#",
    sensitive: true,
    description: "Placeholder untuk VK/Perina/Nifas."
  },
  {
    label: "ASN Digital",
    category: "RSUD",
    section: "Kinerja",
    url: "https://asndigital.bkn.go.id/",
    description: "Portal ASN Digital BKN."
  },
  {
    label: "ASN Literasi",
    category: "RSUD",
    section: "Kinerja",
    url: "https://asn.futureskills.id/fs/dashboard",
    description: "Portal ASN Future Skills."
  },
  {
    label: "E-Surat Bantul",
    category: "RSUD",
    section: "Kinerja",
    url: "https://esurat.bantulkab.go.id/login",
    description: "Portal e-surat Bantul."
  },
  {
    label: "Administrasi Kepegawaian",
    category: "RSUD",
    section: "Kinerja",
    url: "#",
    description: "Isi URL Linktree/administrasi kepegawaian."
  },
  {
    label: "Lampiran SKP ASN",
    category: "RSUD",
    section: "Kinerja",
    url: "#",
    description: "Isi URL lampiran SKP ASN."
  },
  {
    label: "G-Drive Rawat Inap",
    category: "RSUD",
    section: "Rawat Inap",
    url: "#",
    sensitive: true,
    description: "Isi URL drive rawat inap bila akses aman."
  },
  {
    label: "Laporan Mutu",
    category: "RSUD",
    section: "Rawat Inap",
    url: "https://muturssa.github.io/",
    description: "Dashboard laporan mutu."
  },
  {
    label: "Buku Kerja 2025",
    category: "RSUD",
    section: "Tugas ASN",
    url: "#",
    description: "Isi URL buku kerja 2025."
  },
  {
    label: "Logbook & Laporan Harian 2025",
    category: "RSUD",
    section: "Tugas ASN",
    url: "#",
    description: "Isi URL logbook dan laporan harian 2025."
  },
  {
    label: "Laporan Harian/Triwulan/Buku Kerja 2026",
    category: "RSUD",
    section: "Tugas ASN",
    url: "#",
    description: "Isi URL folder 2026."
  },
  {
    label: "Simulasi Penjaminan",
    category: "RSUD",
    section: "Casemix",
    url: "#",
    description: "Isi URL simulasi penjaminan."
  },
  {
    label: "Pemantauan Biaya E-Claim",
    category: "RSUD",
    section: "Casemix",
    url: "#",
    description: "Isi URL pemantauan biaya e-claim."
  }
];

const menuGrid = document.getElementById("menuGrid");
const linksGrid = document.getElementById("linksGrid");
const chips = document.getElementById("chips");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("navLinks");

let activeCategory = "Semua";

function isDisabled(link) {
  return !link.url || link.url === "#";
}

function externalTarget(url) {
  return url.startsWith("mailto:") ? "" : " target=\"_blank\" rel=\"noopener noreferrer\"";
}

function renderMenu() {
  menuGrid.innerHTML = categories.map(category => `
    <a class="menu-card" href="${category.anchor}">
      <span class="menu-icon" aria-hidden="true">${category.icon}</span>
      <span>
        <h3>${category.name}</h3>
        <p>${category.description}</p>
      </span>
    </a>
  `).join("");
}

function renderChips() {
  const all = ["Semua", ...categories.map(category => category.name)];
  chips.innerHTML = all.map(category => `
    <button class="chip${category === activeCategory ? " active" : ""}" type="button" data-category="${category}">${category}</button>
  `).join("");

  chips.querySelectorAll(".chip").forEach(button => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderChips();
      renderLinks();
    });
  });
}

function cardTemplate(link) {
  const disabled = isDisabled(link);
  const safeUrl = disabled ? "javascript:void(0)" : link.url;
  const sensitive = link.sensitive ? `<span class="sensitive-tag">Sensitif</span>` : "";
  const actionClass = disabled ? "open-link disabled" : "open-link";
  const actionText = disabled ? "Isi URL dulu" : "Buka link";
  return `
    <article class="link-card">
      <div>
        <div class="link-meta">
          <span class="tag">${link.category}</span>
          <span class="tag">${link.section}</span>
          ${sensitive}
        </div>
        <h3>${link.label}</h3>
        <p>${link.description || ""}</p>
      </div>
      <div class="link-footer">
        <a class="${actionClass}" href="${safeUrl}"${disabled ? " aria-disabled=\"true\"" : externalTarget(link.url)}>${actionText}</a>
      </div>
    </article>
  `;
}

function filteredLinks() {
  const query = searchInput.value.trim().toLowerCase();
  return links.filter(link => {
    const categoryMatch = activeCategory === "Semua" || link.category === activeCategory;
    const queryText = `${link.label} ${link.category} ${link.section} ${link.description || ""}`.toLowerCase();
    return categoryMatch && queryText.includes(query);
  });
}

function renderLinks() {
  const data = filteredLinks();
  linksGrid.innerHTML = data.map(cardTemplate).join("");
  emptyState.hidden = data.length > 0;
}

function renderGroupedSections() {
  document.querySelectorAll(".grouped-links").forEach(wrapper => {
    const category = wrapper.dataset.category;
    const data = links.filter(link => link.category === category);
    const grouped = data.reduce((acc, link) => {
      acc[link.section] ||= [];
      acc[link.section].push(link);
      return acc;
    }, {});

    wrapper.innerHTML = Object.entries(grouped).map(([section, sectionLinks]) => `
      <div class="group-card">
        <h3>${section}</h3>
        <div class="group-grid">
          ${sectionLinks.map(cardTemplate).join("")}
        </div>
      </div>
    `).join("");
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === "light" ? "☀" : "☾";
  localStorage.setItem("notesme-theme", theme);
}

function initTheme() {
  const saved = localStorage.getItem("notesme-theme");
  const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  applyTheme(saved || preferred);
}

searchInput.addEventListener("input", renderLinks);
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  applyTheme(next);
});

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  navLinks.classList.toggle("show");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

initTheme();
renderMenu();
renderChips();
renderLinks();
renderGroupedSections();
