"use strict";
// Soal 8 - Versi WHILE (hasilnya persis sama dengan versi-for.ts)
const output = document.getElementById("output");
const inputN = prompt("Masukkan angka N: ");
const n = Number(inputN);
let hasil = "";
let i = 1;
while (i <= n) {
    hasil += i + "<br>";
    i++;
}
output.innerHTML = hasil;
