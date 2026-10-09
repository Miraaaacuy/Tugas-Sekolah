"use strict";
//functions
//function dengan return value
function tambah(a, b) {
    return a + b;
}
function namaSiswa(nama) {
    return `nama siswa adalah ${nama}`;
}
let hasil1 = tambah(10, 3);
let hasil2 = namaSiswa(`Krisnandar`);
const output = document.getElementById(`output`);
output.innerHTML += `Hasil Penjumlahan adalah ${hasil1}<br>`;
output.innerHTML += hasil2 + `<br>`;
//function tanpa return
function kurang(a, b) {
    output.innerHTML += `Hasil pengurangan adalah ${a - b}<br>`;
}
function kelasSiswa(kelas) {
    output.innerHTML += `Kelas siswa ${kelas}<br>`;
}
kurang(10, 4);
kelasSiswa(`XRPL3`);
