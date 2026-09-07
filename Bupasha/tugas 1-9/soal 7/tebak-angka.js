"use strict";
// Soal 7 - Perulangan while: mencetak "Percobaan ke-N" sebanyak jumlah percobaan
const output = document.getElementById("output");
const inputPercobaan = prompt("Masukkan jumlah percobaan maksimal: ");
const maksimal = Number(inputPercobaan);
let hasil = "";
let percobaan = 1;
while (percobaan <= maksimal) {
    hasil += `Percobaan ke-${percobaan}<br>`;
    percobaan++;
}
output.innerHTML = hasil;
