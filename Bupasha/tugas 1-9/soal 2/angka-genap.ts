// Soal 2 - Perulangan for: mencetak angka genap dari 2 sampai batas
const output = document.getElementById("output") as HTMLElement;

const inputBatas: string | null = prompt("Masukkan batas atas: ");
const batas: number = Number(inputBatas);

let hasil: string = "";
for (let i: number = 2; i <= batas; i += 2) {
    hasil += i + "<br>";
}
output.innerHTML = hasil;
