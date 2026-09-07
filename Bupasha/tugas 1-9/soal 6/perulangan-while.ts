// Soal 6 - Perulangan while: mencetak angka 1 sampai batas
const output = document.getElementById("output") as HTMLElement;

const inputBatas: string | null = prompt("Masukkan batas angka: ");
const batas: number = Number(inputBatas);

let hasil: string = "";
let i: number = 1;
while (i <= batas) {
    hasil += i + "<br>";
    i++;
}
output.innerHTML = hasil;
