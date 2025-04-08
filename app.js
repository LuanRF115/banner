function fnSaudacao(){
let nomeCompleto = ""
nomeCompleto = prompt("Informe seu nome completo ")
alert("Seja bem vindo(a) " + nomeCompleto + " ao meu site!")
}

function fnTrocarCorDeFundo(){
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
}  

function fnMostraHoraAtual(){

   let agora = new Date() // Obtém a data e hora atual
   let horaFormatada = agora.toLocaleTimeString()// Formata para exibição
   alert("Hora atual: " + horaFormatada) // Exibe a hora no alert

}

function fnTrocarTitulo(){

   let novoTexto = prompt("Digite o novo título:")
   document.getElementById("titulo").innerText = novoTexto
}

function fnIdiomaPortugues() {
   document.getElementById("menu1").innerText = "INICIAL";
   document.getElementById("menu2").innerText = "SERVIÇOS";
   document.getElementById("menu3").innerText = "CONTATO";
}

function fnIdiomaIngles() {
   document.getElementById("menu1").innerText = "HOME";
   document.getElementById("menu2").innerText = "SERVICES";
   document.getElementById("menu3").innerText = "CONTACT";
}

function fnIdiomaEspanhol() {
   document.getElementById("menu1").innerText = "INICIO";
   document.getElementById("menu2").innerText = "SERVICIOS";
   document.getElementById("menu3").innerText = "CONTACTO";
}

function fnBanner1(){
   document.getElementById("bannerr").src="imagens/bannerr.jpg"
}

function fnBanner2(){
   document.getElementById("bannerr").src="imagens/banner2.jpeg"
}

function fnBanner3(){
   document.getElementById("bannerr").src="imagens/banner3.jpeg"
}

function fnDastaque1Trocar() {
   document.getElementById("destaque1").src = "imagens/banner2.jpeg";
}

function fnDastaque1Original() {
   document.getElementById("destaque1").src = "imagens/arobico.jpg";
}

function fnDastaque2Trocar() {
   document.getElementById("destaque2").src = "imagens/banner2.jpeg";
}

function fnDastaque2Original() {
   document.getElementById("destaque2").src = "imagens/fisoterapia.jfif";
}

function fnDastaque3Trocar() {
   document.getElementById("destaque3").src = "imagens/banner2.jpeg";
}

function fnDastaque3Original() {
   document.getElementById("destaque3").src = "imagens/treino atleta.jfif";
}

function fnRegistrarContato(){
   let nome = document.getElementById("nome").value
   let email = document.getElementById("email").value
   let mensagem = document.getElementById("mensagem").value
   let informacoesCompleta = nome + " - " + email + " <br> " + mensagem
   document.getElementById("informacoes").innerHTML = informacoesCompleta

   //limpar os campos
   document.getElementById("nome").value = ""
   document.getElementById("email").value = ""
   document.getElementById("mensagem").value = ""
   document.getElementById("mensagen").value = ""

}
