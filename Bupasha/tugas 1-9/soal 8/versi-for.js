"use strict";
// Soal 8 - Versi FOR (program soal 1: mencetak angka 1 sampai N)
const output = document.getElementById("output");
const inputN = prompt("Masukkan angka N: ");
const n = Number(inputN);
let hasil = "";
for (let i = 1; i <= n; i++) {
    hasil += i + "<br>";
}
output.innerHTML = hasil;
