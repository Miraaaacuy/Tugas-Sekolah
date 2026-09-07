"use strict";
// Soal 2 - Perulangan for: mencetak angka genap dari 2 sampai batas
const output = document.getElementById("output");
const inputBatas = prompt("Masukkan batas atas: ");
const batas = Number(inputBatas);
let hasil = "";
for (let i = 2; i <= batas; i += 2) {
    hasil += i + "<br>";
}
output.innerHTML = hasil;
