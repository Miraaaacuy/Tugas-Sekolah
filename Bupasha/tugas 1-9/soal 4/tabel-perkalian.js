"use strict";
// Soal 4 - Perulangan for: tabel perkalian 1 x N sampai 10 x N
const output = document.getElementById("output");
const inputAngka = prompt("Masukkan sebuah angka: ");
const angka = Number(inputAngka);
let hasil = "";
for (let i = 1; i <= 10; i++) {
    hasil += `${i} x ${angka} = ${i * angka}<br>`;
}
output.innerHTML = hasil;
