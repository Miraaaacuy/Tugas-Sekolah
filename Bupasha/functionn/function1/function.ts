//functions
//function dengan return value

function tambah(a: number, b:number): number {
    return a + b;
}

function namaSiswa(nama:string): string {
    return `nama siswa adalah ${nama}`;
}

let hasil1: number = tambah(10, 3);
let hasil2: string = namaSiswa(`Krisnandar`);

const output = document.getElementById(`output`) as HTMLElement;
output.innerHTML += `Hasil Penjumlahan adalah ${hasil1}<br>`;
output.innerHTML += hasil2 + `<br>`;

//function tanpa return
function kurang (a:number, b:number): void {
    output.innerHTML+=`Hasil pengurangan adalah ${a-b}<br>`;
}
function kelasSiswa(kelas:string):void {
    output.innerHTML += `Kelas siswa ${kelas}<br>`
}

kurang (10,4);
kelasSiswa (`XRPL3`);  