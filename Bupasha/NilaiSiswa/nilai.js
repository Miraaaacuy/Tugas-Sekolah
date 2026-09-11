"use strict";
let batas = Number(prompt('Inputkan jumlah siswa: '));
let hasil = "";
for (let i = 1; i <= batas; i++) {
    let nilai = Number(prompt(`Inputkan nilai siswa${i}`));
    let nama = String(prompt(`Inputkan nama siswa ${i}`));
    if (nilai <= 100 && nilai > 90) {
        hasil += `${nama} nilai ${nilai} predikat sangat baik<br>`;
    }
    else if (nilai <= 90 && nilai > 75) {
        hasil += `${nama} nilai ${nilai} predikat baik<br>`;
    }
    else if (nilai <= 75 && nilai > 50) {
        hasil += `${nama} nilai ${nilai} predikat cukup<br>`;
    }
    else if (nilai <= 50 && nilai > 0) {
        hasil += `${nama} nilai ${nilai} predikat kurang<br>`;
    }
    else {
        hasil += `${nama} nilai ${nilai} predikat tidak valid<br>`;
    }
}
const output = document.getElementById('output');
if (output !== null) {
    output.innerHTML = hasil;
}
