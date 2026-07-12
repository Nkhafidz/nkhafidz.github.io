const categories = [
  {
    name: "Jadwal",
    href: "jadwal/",
    icon: "🗓️",
    image: "assets/logos/jadwal.png",
    description: "Jadwal personal, RSUD, dan SGH dalam satu akses."
  },
  {
    name: "Personal",
    href: "personal/",
    icon: "📝",
    image: "assets/logos/personal.png",
    description: "LMS, email, Familia Medika, dan publikasi."
  },
  {
    name: "M.A.R.S",
    href: "mars/",
    icon: "🎓",
    image: "assets/logos/mars.png",
    description: "Portal akademik, referensi, kelas, dan tugas."
  },
  {
    name: "SGH",
    href: "sgh/",
    icon: "🏥",
    image: "assets/logos/sgh.png",
    description: "Link kerja SGH dan dokumen akreditasi."
  },
  {
    name: "Family",
    href: "family/",
    icon: "👨‍👩‍👧",
    image: "assets/logos/family.png",
    description: "Family journey, video, dan email."
  },
  {
    name: "RSUD",
    href: "rsud/",
    icon: "⚕️",
    image: "assets/logos/rsud.png",
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
    url: "https://docs.google.com/spreadsheets/d/1IQeOye2DH0fgTDUUxdAJt8NtTbj0xVzbHMm42ArGdaE/edit?usp=sharing",
    sensitive: true,
    description: "Jadwal DU HRD."
  },
  {
    label: "Jadwal Rancangan",
    category: "Jadwal",
    section: "SGH",
    url: "https://docs.google.com/spreadsheets/d/1Y2jXXtBeNZtdJXd-DI9uCZo8SLAQLPU7trOtgO_gJKQ/edit?usp=sharing",
    sensitive: true,
    description: "Jadwal rancangan SGH."
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
    label: "Google Drive",
    category: "Personal",
    section: "Personal",
    url: "https://drive.google.com/drive/my-drive?hl=ID",
    description: "Akses Google Drive personal (My Drive)."
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
    url: "https://sinthesis.umy.ac.id/mahasiswa/tugas-akhir",
    description: "Portal tesis/sintesis."
  },
  {
    label: "Ethical Clearance — KEPK FKIK UMY",
    category: "M.A.R.S",
    section: "Akademik Utama",
    url: "https://simepk-fkik.umy.ac.id/index.php/dashboard",
    description: "Dashboard SIM-EPK untuk pengajuan ethical clearance penelitian."
  },
  {
    label: "GForm Pengajuan Judul",
    category: "M.A.R.S",
    section: "Akademik Utama",
    url: "https://forms.gle/5tatLdEzDWX8sCnQ9",
    description: "Google Form pengajuan judul."
  },
  {
    label: "ProQuest Luar Kampus",
    category: "M.A.R.S",
    section: "Referensi & Penelitian",
    url: "http://www.proquest.com/login",
    description: "Akses ProQuest dari luar kampus. Username: PQUnivMuhYogya · Password: PQ@UMYogya1"
  },
  {
    label: "ProQuest Dalam Kampus",
    category: "M.A.R.S",
    section: "Referensi & Penelitian",
    url: "http://www.proquest.com",
    description: "Akses ProQuest dari jaringan kampus."
  },
  {
    label: "Library UMY",
    category: "M.A.R.S",
    section: "Referensi & Penelitian",
    url: "https://library.umy.ac.id/",
    description: "Main page library UMY."
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
    url: "https://notebooklm.google.com/notebook/7c3c9d58-cc50-45c8-871b-0764e09e0797",
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
    url: "https://drive.google.com/file/d/15_IL3JbzErhjYJfCSCWRRLxipYiEtWsV/view?usp=drive_link",
    description: "Rekaman bibliometric."
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
    url: "https://docs.google.com/spreadsheets/d/1hX-e9IzQFnzUA4VwQ_1JFJKyQ8EZo9cn/edit?ouid=100668610343235378558&rtpof=true&sd=true&usp=drive_link",
    description: "Dokumen UTS."
  },

  // SGH
  {
    label: "Register Pasien SGH",
    category: "SGH",
    section: "Operasional",
    url: "https://docs.google.com/spreadsheets/d/1nGQOl939xO-qo5IoXhhFSsfARX0m3d2e4A61on2F4d4/edit?usp=sharing",
    sensitive: true,
    description: "Register pasien SGH."
  },
  {
    label: "Aviat In Hospital",
    category: "SGH",
    section: "Operasional",
    url: "http://192.168.30.1/LIVE",
    sensitive: true,
    description: "Aviat in hospital."
  },
  {
    label: "Aviat Out Hospital",
    category: "SGH",
    section: "Operasional",
    url: "http://103.105.252.26:8090/LIVE4/Login/Login.aspx",
    sensitive: true,
    description: "Aviat out hospital."
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
    url: "http://10.142.9.44/",
    sensitive: true,
    description: "Alamat IP internal SIMRS 4."
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
    url: "https://docs.google.com/spreadsheets/d/1_4rXgikDVXzBSvUeh91pCAN1G9uTOIcgckou259SxiM/edit?gid=2061171232",
    sensitive: true,
    description: "Register pasien IGD RSUD."
  },
  {
    label: "Rawat Inap",
    category: "RSUD",
    section: "Register",
    url: "https://docs.google.com/spreadsheets/d/1ATH77K6ugUCv7dtCl1kNfUCNmwXv1R1p/edit?gid=1072889558",
    sensitive: true,
    description: "Register rawat inap RSUD."
  },
  {
    label: "VK-Perina-Nifas",
    category: "RSUD",
    section: "Register",
    url: "https://docs.google.com/spreadsheets/d/1RmL5fG08-5Q9V3idJPRIzH6DndbK5Si2Nk_meR5tHYQ/edit?gid=793719483",
    sensitive: true,
    description: "Register VK/Perina/Nifas."
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
    url: "https://linktr.ee/kepegawaianRSSA",
    description: "Linktree administrasi kepegawaian RSSA."
  },
  {
    label: "Lampiran SKP ASN",
    category: "RSUD",
    section: "Kinerja",
    url: "https://drive.google.com/drive/folders/13ODJICZxPBvoSKc8t4UaUqftMvBUW4bd?usp=drive_link",
    description: "Folder lampiran SKP ASN."
  },
  {
    label: "G-Drive Rawat Inap",
    category: "RSUD",
    section: "Rawat Inap",
    url: "https://drive.google.com/drive/folders/1nRRDeQfju2PsVymoZYodppKhVXiVZys_?usp=sharing",
    sensitive: true,
    description: "Folder G-Drive rawat inap."
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
    url: "https://docs.google.com/spreadsheets/d/1W4_XEzDFaiJN1mUKKk2ph831nioerJRTzOEfZTWbXvE/edit?usp=sharing",
    description: "Buku kerja 2025."
  },
  {
    label: "Logbook & Laporan Harian 2025",
    category: "RSUD",
    section: "Tugas ASN",
    url: "https://docs.google.com/spreadsheets/d/1oCwFnKHHT_yOEtdQKC--gAhhxk63QjEp_Xxa_RIZshQ/edit?usp=sharing",
    description: "Logbook dan laporan harian 2025."
  },
  {
    label: "Laporan Harian/Triwulan/Buku Kerja 2026",
    category: "RSUD",
    section: "Tugas ASN",
    url: "https://drive.google.com/drive/u/1/folders/1OWTQVdcVHQIwNVtKd37iTVS-shK-cC5y",
    description: "Folder laporan 2026."
  },
  {
    label: "Simulasi Penjaminan",
    category: "RSUD",
    section: "Casemix",
    url: "https://docs.google.com/spreadsheets/d/1nN8h5mqUakO3NnIL4KfVWJpC1mKJBClRnQuwgKbRTL8/edit?gid=0",
    description: "Simulasi biaya klaim 2026."
  },
  {
    label: "Pemantauan Biaya E-Claim",
    category: "RSUD",
    section: "Casemix",
    url: "https://docs.google.com/spreadsheets/d/1uh52_iFK6FTl-5X_7GC-5PXstysvkIyuj8G67duNvH8/edit?gid=0&pli=1",
    description: "Formulir pemantauan biaya e-claim 2025."
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
  if (!menuGrid) return;
  menuGrid.innerHTML = categories.map(category => `
    <a class="menu-card" href="${category.href}">
      ${category.image
        ? `<span class="menu-logo"><img src="${category.image}" alt="Logo ${category.name}" loading="lazy" /></span>`
        : `<span class="menu-icon" aria-hidden="true">${category.icon}</span>`}
      <span>
        <h3>${category.name}</h3>
        <p>${category.description}</p>
      </span>
    </a>
  `).join("");
}

function renderChips() {
  if (!chips) return;
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
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  return links.filter(link => {
    const categoryMatch = activeCategory === "Semua" || link.category === activeCategory;
    const queryText = `${link.label} ${link.category} ${link.section} ${link.description || ""}`.toLowerCase();
    return categoryMatch && queryText.includes(query);
  });
}

function renderLinks() {
  if (!linksGrid || !emptyState) return;
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

function renderPageLogo() {
  const badge = document.querySelector(".profile-badge");
  const wrapper = document.querySelector(".grouped-links[data-category]");
  if (!badge || !wrapper) return;
  const category = categories.find(item => item.name === wrapper.dataset.category);
  if (!category || !category.image) return;
  badge.classList.add("has-logo");
  badge.innerHTML = `<img src="../${category.image}" alt="Logo ${category.name}" />`;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (themeToggle) themeToggle.textContent = theme === "light" ? "☀" : "☾";
  localStorage.setItem("notesme-theme", theme);
}

function initTheme() {
  const saved = localStorage.getItem("notesme-theme");
  const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  applyTheme(saved || preferred);
}

if (searchInput) {
  searchInput.addEventListener("input", renderLinks);
}
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    applyTheme(next);
  });
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("show");
  });
}

if (navLinks && menuToggle) {
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

initTheme();
renderMenu();
renderChips();
renderLinks();
renderGroupedSections();
renderPageLogo();
