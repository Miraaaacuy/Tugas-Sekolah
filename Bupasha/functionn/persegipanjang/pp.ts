const output = document.getElementById (`output`) as HTMLElement
output.innerHTML += `=== Persegi Panjang ===<br><br>`
function luas (panjang:number, lebar:number): void {
    output.innerHTML += `Panjang : ${panjang}<br>` + `Lebar : ${lebar}<br><br>`;
    output.innerHTML += `Luas = ${panjang*lebar}<br>`
}

function keliling (panjang:number, lebar:number): void {
    output.innerHTML += `Keliling = ${panjang*2+lebar*2}`
}

luas(10,9), keliling(10,2)