// Soal 8 - Versi FOR (program soal 1: mencetak angka 1 sampai N)
const output = document.getElementById("output") as HTMLElement;

const inputN: string | null = prompt("Masukkan angka N: ");
const n: number = Number(inputN);

let hasil: string = "";
for (let i: number = 1; i <= n; i++) {
    hasil += i + "<br>";
}
output.innerHTML = hasil;
