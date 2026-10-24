/**
 * Kendali Publikasi Jurnal — Web App untuk halaman notesme.site/publikasi/
 *
 * Cara pasang (sekali saja):
 * 1. Buka Google Sheet "Data Kendali Publikasi" > Ekstensi > Apps Script.
 * 2. Hapus isi Code.gs, tempel seluruh kode ini, lalu ganti PIN di bawah.
 * 3. Simpan, lalu Terapkan (Deploy) > Deployment baru > jenis "Aplikasi web".
 *    - Jalankan sebagai: Saya
 *    - Siapa yang memiliki akses: Siapa saja (Anyone)
 * 4. Izinkan akses (Authorize), lalu salin URL yang berakhiran /exec.
 */

const PIN = "GANTI_PIN_ANDA";
const SHEET_ID = "1TZ9xVzDI9vraQCsqPrdkHGQD7W3V1t12BR45gsy7E3o";
const KOLOM = ["id", "jurnal", "tahap", "tugas", "target", "selesai", "tgl_selesai", "urut"];
const BOLEH_UBAH = ["tahap", "tugas", "target", "selesai", "tgl_selesai", "urut"];

function doPost(e) {
  try {
    const b = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    if (String(b.pin || "") !== String(PIN)) return out({ ok: false, error: "PIN salah." });
    const ss = SpreadsheetApp.openById(SHEET_ID);
    if (b.action === "list") return out({ ok: true, journals: bacaJurnal(ss), tasks: bacaTugas(ss) });

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sh = ss.getSheetByName("Tugas");
      if (b.action === "update") {
        const r = cariBaris(sh, b.id);
        if (!r) return out({ ok: false, error: "Tugas tidak ditemukan." });
        Object.keys(b.patch || {}).forEach(k => {
          const c = KOLOM.indexOf(k);
          if (c < 0 || BOLEH_UBAH.indexOf(k) < 0) return;
          let v = b.patch[k];
          if (k === "selesai") v = v ? "YA" : "";
          sh.getRange(r, c + 1).setNumberFormat("@").setValue(v == null ? "" : String(v));
        });
        return out({ ok: true });
      }
      if (b.action === "add") {
        const t = b.task || {};
        if (!t.jurnal || !t.tugas) return out({ ok: false, error: "Jurnal dan nama tugas wajib diisi." });
        const id = t.jurnal + "-" + Utilities.getUuid().slice(0, 6);
        const baris = [id, t.jurnal, t.tahap || "Lainnya", t.tugas, t.target || "", "", "", String(t.urut || 99)];
        sh.appendRow(baris);
        sh.getRange(sh.getLastRow(), 1, 1, KOLOM.length).setNumberFormat("@");
        return out({ ok: true, id: id });
      }
      if (b.action === "delete") {
        const r = cariBaris(sh, b.id);
        if (r) sh.deleteRow(r);
        return out({ ok: true });
      }
    } finally {
      lock.releaseLock();
    }
    return out({ ok: false, error: "Aksi tidak dikenal." });
  } catch (err) {
    return out({ ok: false, error: String(err && err.message || err) });
  }
}

function doGet() {
  return out({ ok: true, info: "Web App Kendali Publikasi aktif. Gunakan dari halaman notesme.site/publikasi/." });
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function teks(v) {
  if (v instanceof Date) return Utilities.formatDate(v, Session.getScriptTimeZone(), "yyyy-MM-dd");
  return v == null ? "" : String(v).trim();
}

function bacaJurnal(ss) {
  const v = ss.getSheetByName("Jurnal").getDataRange().getValues();
  return v.slice(1).filter(r => r[0]).map(r => ({
    id: teks(r[0]), title: teks(r[1]), target: teks(r[2]), rank: teks(r[3]), note: teks(r[4]), order: Number(r[5]) || 0
  }));
}

function bacaTugas(ss) {
  const v = ss.getSheetByName("Tugas").getDataRange().getValues();
  return v.slice(1).filter(r => r[0]).map(r => ({
    id: teks(r[0]), journal: teks(r[1]), stage: teks(r[2]), title: teks(r[3]), due: teks(r[4]),
    done: /^(ya|true|1|✔)$/i.test(teks(r[5])), doneAt: teks(r[6]), order: Number(r[7]) || 0
  }));
}

function cariBaris(sh, id) {
  const ids = sh.getRange(1, 1, sh.getLastRow(), 1).getValues();
  for (let i = 1; i < ids.length; i++) if (teks(ids[i][0]) === String(id)) return i + 1;
  return 0;
}
