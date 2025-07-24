import { Viewer } from '@photo-sphere-viewer/core';

// Pastikan 'viewer' adalah ID dari elemen DOM, misalnya: <div id="viewer"></div>
const viewer = new Viewer({
  container: document.getElementById('viewer'), // <-- perbaikan penting
  panorama: 'house360.jpg',
  // caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
  loadingImg: 'loader.gif', // Ganti dengan path yang valid jika 'baseUrl' tidak didefinisikan
  // touchmoveTwoFingers: true,
  // mousewheelCtrlKey: true,

  // Zoom configuration
  defaultZoomLvl: 0,      // level zoom paling keluar (0 = paling kecil / paling jauh)
});

document.getElementById('vrButton').addEventListener('click', () => {
  window.open('./vr.html', '_blank');
});