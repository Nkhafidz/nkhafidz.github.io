# Mini Notes — Landing Page

Landing page statis untuk catatan pribadi, siap di-hosting di **GitHub Pages**.
Semua sudah jadi satu file (`index.html`) — tidak butuh build, tidak butuh server.

## Cara hosting di GitHub Pages

### Opsi A — sebagai situs utama (`username.github.io`)
1. Buat repository baru bernama `username.github.io` (ganti `username` dengan username GitHub kamu).
2. Upload file `index.html` ke repo: **Add file → Upload files**, lalu **Commit changes**.
3. Buka **Settings → Pages**. Di bagian **Source**, pilih branch `main` dan folder `/ (root)`, klik **Save**.
4. Tunggu 1–2 menit. Situs tayang di `https://username.github.io/`.

### Opsi B — di dalam repo biasa
1. Upload `index.html` ke repo mana pun (mis. `notes`).
2. **Settings → Pages → Source**: branch `main`, folder `/ (root)`, **Save**.
3. Situs tayang di `https://username.github.io/notes/`.

## Cara mengubah isi
Buka `index.html` dengan editor teks apa pun, lalu:

- **Ganti tujuan menu** — cari `href="https://www.notesme.site/..."` di tiap kartu dan ganti dengan alamatmu.
- **Ganti judul/deskripsi menu** — ubah teks di dalam `<h2 class="card__title">` dan `<p class="card__desc">`.
- **Ganti email** — cari `khafidz.subekti@gmail.com` (muncul 1×) dan ganti.
- **Ganti warna tab** — ubah nilai `--accent:#...` pada tiap `<a class="card" ...>`.
- **Tambah / kurangi menu** — salin satu blok `<a class="card"> ... </a>`, lalu sesuaikan nomor (`01`, `02`, …) dan teksnya.

## (Opsional) Pakai domain `notesme.site`
1. Di repo, buat file bernama `CNAME` (tanpa ekstensi) berisi satu baris: `www.notesme.site`
2. Di pengaturan DNS domain, arahkan `www` (record CNAME) ke `username.github.io`.
3. **Settings → Pages → Custom domain**: isi `www.notesme.site`, lalu aktifkan **Enforce HTTPS**.
