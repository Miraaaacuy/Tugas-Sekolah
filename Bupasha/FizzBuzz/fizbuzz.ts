let batas : number = Number (prompt('inputkan batas'));
let hasil: string = "";

for (let i: number = 1 ; i<= batas; i++){
    if(i%15===0){
        hasil += `FizzBuzz<br>`;
    } else if (i % 5 === 0){
        hasil+= `Buzz<Br>`;
    } else if (i % 3 === 0){
        hasil += `Fizz<br>`
    }else {
        hasil += `${i}<br>`
    }
}

const output = document.getElementById('output');
if (output !== null){
    output.innerHTML = hasil;
}