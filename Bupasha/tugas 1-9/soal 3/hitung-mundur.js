"use strict";
// Soal 3 - Perulangan for mundur (descending) sampai 1
const output = document.getElementById("output");
const inputAwal = prompt("Masukkan angka awal: ");
const awal = Number(inputAwal);
let hasil = "";
for (let i = awal; i >= 1; i--) {
    hasil += i + "<br>";
}
hasil += "Selamat Tahun Baru!";
output.innerHTML = hasil;
