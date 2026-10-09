"use strict";
const output = document.getElementById(`output`);
output.innerHTML += `=== Persegi Panjang ===<br><br>`;
function luas(panjang, lebar) {
    output.innerHTML += `Panjang : ${panjang}<br>` + `Lebar : ${lebar}<br><br>`;
    output.innerHTML += `Luas = ${panjang * lebar}<br>`;
}
function keliling(panjang, lebar) {
    output.innerHTML += `Keliling = ${panjang * 2 + lebar * 2}`;
}
luas(10, 9), keliling(10, 2);
