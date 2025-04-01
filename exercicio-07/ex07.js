let meses = parseInt(prompt("Digite o número de meses:"));

let anos = Math.floor(meses / 12);
let mesesRestantes = meses % 12;

let dias = anos * 365 + mesesRestantes * 30;

alert("O total de dias em " + meses + " meses é: " + dias + " dias.");

