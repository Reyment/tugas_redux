// src/redux/actions.js
export const tambahAngka = (angka) => ({
    type: 'TAMBAH_ANGKA',
    payload: angka,
  });
  
  export const kurangAngka = (angka) => ({
    type: 'KURANG_ANGKA',
    payload: angka,
  });
  