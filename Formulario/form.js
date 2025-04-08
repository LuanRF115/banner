function fnSomar(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = parseFloat(n1) + parseFloat(n2)
    console.log(total)
    document.getElementById("resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}

function fnSub(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = parseFloat(n1) - parseFloat(n2)
    console.log(total)
    document.getElementById("resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}

function fnMult(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = parseFloat(n1) * parseFloat(n2)
    console.log(total)
    document.getElementById("resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}

function fnDiv(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let total = parseFloat(n1) / parseFloat(n2)
    console.log(total)
    document.getElementById("resultado").value = total
    document.getElementById("outro-resultado").innerText = total
}

