// Soal 4 - Perulangan for: tabel perkalian 1 x N sampai 10 x N
const output = document.getElementById("output") as HTMLElement;

const inputAngka: string | null = prompt("Masukkan sebuah angka: ");
const angka: number = Number(inputAngka);

let hasil: string = "";
for (let i: number = 1; i <= 10; i++) {
    hasil += `${i} x ${angka} = ${i * angka}<br>`;
}
output.innerHTML = hasil;
