"use strict";
// Soal 6 - Perulangan while: mencetak angka 1 sampai batas
const output = document.getElementById("output");
const inputBatas = prompt("Masukkan batas angka: ");
const batas = Number(inputBatas);
let hasil = "";
let i = 1;
while (i <= batas) {
    hasil += i + "<br>";
    i++;
}
output.innerHTML = hasil;
