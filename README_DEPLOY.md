# NotesMe — Landing Page GitHub Pages

Paket ini berisi landing page pribadi statis yang bisa langsung diunggah ke GitHub Pages.

## Isi file

- `index.html` — struktur halaman utama
- `style.css` — desain responsif modern
- `script.js` — data link, search, filter, dark/light mode
- `.nojekyll` — agar GitHub Pages tidak memproses file sebagai Jekyll

## Cara deploy di GitHub Pages

1. Login ke GitHub.
2. Buat repository baru dengan nama:
   - `USERNAME.github.io` untuk website utama akun Anda, atau
   - nama bebas seperti `notesme` untuk project site.
3. Upload semua file dari folder ini ke root repository.
4. Masuk ke **Settings → Pages**.
5. Pada **Build and deployment**, pilih **Deploy from a branch**.
6. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
7. Tunggu beberapa menit, lalu buka URL GitHub Pages yang muncul.

## Cara edit link

Semua link berada di file `script.js`, pada variabel `links`.

Contoh format:

```js
{
  label: "Nama Link",
  category: "Jadwal",
  section: "Personal",
  url: "https://contoh.com",
  description: "Keterangan singkat."
}
```

Untuk link sensitif, gunakan:

```js
{
  label: "Register Pasien",
  category: "RSUD",
  section: "Register",
  url: "#",
  sensitive: true,
  description: "Jangan taruh link ini di halaman publik."
}
```

## Catatan keamanan penting

GitHub Pages pada dasarnya adalah website statis yang dapat diakses publik. Jangan menaruh:

- username/password,
- link register pasien,
- link rekam medis elektronik,
- Google Sheets yang berisi data pribadi/pasien,
- alamat IP internal,
- dokumen yang seharusnya hanya untuk pegawai.

Untuk akses kerja/internal, gunakan Google Drive dengan akses terbatas, VPN, repository private sesuai paket GitHub, atau proteksi seperti Cloudflare Access.
