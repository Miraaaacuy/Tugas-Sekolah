// Soal 8 - Versi WHILE (hasilnya persis sama dengan versi-for.ts)
const output = document.getElementById("output") as HTMLElement;

const inputN: string | null = prompt("Masukkan angka N: ");
const n: number = Number(inputN);

let hasil: string = "";
let i: number = 1;
while (i <= n) {
    hasil += i + "<br>";
    i++;
}
output.innerHTML = hasil;
