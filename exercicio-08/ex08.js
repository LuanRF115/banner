let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt("Digite o " + i + "º número:"));
    soma += numero;
}

let media = soma / 5;

alert("A média dos números informados é: " + media);