
/* alert("olá, seja bem vindo") 
console.log("posso escrever aqui também")
console.log(10+2)
console.log(10-2)
console.log(10*2)
console.log(10/5)
alert("10"+2)
console.log("10"+2)
console.log("10"*2)
console.log("João"+" " + "Paulo")
console.log(parseFloat("10")+2)*/

/*
3 formas de criar variaveis
var
let
const*/

console.log("Luan")
console.log(18)
console.warn("atençao")
console.error("um erro")

let nome = "Luan"
let idade = 18
let telefone = null
console.log(nome, idade)
nome = "Luan Felipe"
console.log(nome)

let nomeCompleto = ""
nomeCompleto = prompt("Informe seu nome completo ")
console.log(nomeCompleto)
//alert("Seja bem vindo(a) " + nomeCompleto)
//document.write("Seja bem vindo(a) " + nomeCompleto)
let cor = prompt("informe uma cor: \n 1 azul \n2 vermelho \n3 preto \n4 vermelho \n5 rosa \n6 laranja")
let corDeFundo = null
 
if(cor == "1"){
    corDeFundo = "blue"
}else if(cor == "2"){
    corDeFundo = "red"
}else if(cor == "3"){
    corDeFundo = "black"
}else if(cor == "4"){
    corDeFundo = "tomato"
}else if(cor == "5"){
    corDeFundo = "pink"
}else if(cor == "6"){
    corDeFundo = "orange"
}else{
    corDeFundo = "yellow"
}
document.body.style.backgroundColor = corDeFundo