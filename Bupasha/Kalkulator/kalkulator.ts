// Kalkulator sederhana: 3 prompt, 4 arrow function, dan percabangan switch
const output = document.getElementById("output") as HTMLElement;

const angka1: number = Number(prompt("Masukkan angka pertama: "));
const operator: string | null = prompt("Masukkan operator (+, -, *, /): ");
const angka2: number = Number(prompt("Masukkan angka kedua: "));

const tambah = (a: number, b: number): number => a + b;
const kurang = (a: number, b: number): number => a - b;
const kali = (a: number, b: number): number => a * b;
const bagi = (a: number, b: number): number => a / b;

switch (operator) {
    case "+":
        output.innerHTML = `${angka1} + ${angka2} = ${tambah(angka1, angka2)}`;
        break;
    case "-":
        output.innerHTML = `${angka1} - ${angka2} = ${kurang(angka1, angka2)}`;
        break;
    case "*":
        output.innerHTML = `${angka1} * ${angka2} = ${kali(angka1, angka2)}`;
        break;
    case "/":
        if (angka2 === 0) {
            output.innerHTML = "Pembagian dengan nol tidak diperbolehkan!";
        } else {
            output.innerHTML = `${angka1} / ${angka2} = ${bagi(angka1, angka2)}`;
        }
        break;
    default:
        output.innerHTML = "Operator tidak valid!";
}
