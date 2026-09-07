// Soal 7 - Perulangan while: mencetak "Percobaan ke-N" sebanyak jumlah percobaan
const output = document.getElementById("output") as HTMLElement;

const inputPercobaan: string | null = prompt("Masukkan jumlah percobaan maksimal: ");
const maksimal: number = Number(inputPercobaan);

let hasil: string = "";
let percobaan: number = 1;
while (percobaan <= maksimal) {
    hasil += `Percobaan ke-${percobaan}<br>`;
    percobaan++;
}
output.innerHTML = hasil;
