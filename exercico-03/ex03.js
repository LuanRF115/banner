let nome = prompt("Qual é o seu nome?");
let idade = parseInt(prompt("Qual é a sua idade?"));

if (idade < 18) {
    alert(`Olá ${nome}, você ainda não pode fazer aulas de direção`);
} else if (idade >=18) {
    alert(`Olá ${nome}, seja bem-vindo(a) à nossa escola! Já fez sua matrícula?`);
}
