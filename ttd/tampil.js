// Mengisi halaman ttd/<kode>/ dari data.js. Kode diambil dari atribut data-kode pada <body>.
(function () {
  var kode = document.body.getAttribute('data-kode');
  var d = (window.TTD_DATA || {})[kode];
  var isi = document.getElementById('isi');
  if (!d) { isi.innerHTML = '<p class="ket">Data tanda tangan tidak ditemukan.</p>'; return; }
  document.documentElement.style.setProperty('--warna', d.warna || '#0f172a');
  document.querySelector('.logo').alt = d.instansi;
  document.getElementById('nama').textContent = window.TTD_NAMA;
  document.getElementById('sip').textContent = d.sip;
  document.getElementById('rs').textContent = d.instansi;
  document.title = 'Tanda Tangan Elektronik — ' + window.TTD_NAMA + ' · ' + d.instansi;
})();
