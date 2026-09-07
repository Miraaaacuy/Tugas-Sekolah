// Soal 3 - Perulangan for mundur (descending) sampai 1
const output = document.getElementById("output") as HTMLElement;

const inputAwal: string | null = prompt("Masukkan angka awal: ");
const awal: number = Number(inputAwal);

let hasil: string = "";
for (let i: number = awal; i >= 1; i--) {
    hasil += i + "<br>";
}
hasil += "Selamat Tahun Baru!";
output.innerHTML = hasil;
