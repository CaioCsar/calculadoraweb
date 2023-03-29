/* botoes */

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")
let btn0 = document.getElementById("btn0")
let btnsub = document.getElementById("btnsub")
let btndiv = document.getElementById("btndiv")
let btnsum = document.getElementById("btnsum")
let btnmult = document.getElementById("btnmult")
let btnresult = document.getElementById("btnresult")
let btnapagar = document.getElementById("btnapagar")

// tela
let numero = 0;



btn1.addEventListener("click", function() {
    let tela = document.getElementById("tela")
    numero = 1;
    tela.innerHTML += "1"
    console.log(numero)
}
)
btn2.addEventListener("click", function() {
    let tela = document.getElementById("tela")
    numero = 2;
    tela.innerHTML += "2"
    console.log(numero)
}
)
btn3.addEventListener("click", function() {
    let tela = document.getElementById("tela")
    numero = 3;
    tela.innerHTML += "3"
    console.log(numero)
}
)
btn4.addEventListener("click", function() {
    let tela = document.getElementById("tela")
    numero = 4;
    tela.innerHTML += "3"
    console.log(numero)
}
)
btn5.addEventListener("click", function() {
    let tela = document.getElementById("tela")
    numero = 5;
    tela.innerHTML += "5"
    console.log(numero)
}
)
btn6.addEventListener("click", function() {
    let tela = document.getElementById("tela")
    numero = 6;
    tela.innerHTML += "6"
    console.log(numero)
}
)
btn7.addEventListener("click", function() {
    let tela = document.getElementById("tela")
    numero = 7;
    tela.innerHTML += "7"
    console.log(numero)
}
)
btn8.addEventListener("click", function() {
    let tela = document.getElementById("tela")
    numero = 8;
    tela.innerHTML += "8"
    console.log(numero)
}
)
btn9.addEventListener("click", function() {
    let tela = document.getElementById("tela")
    numero = 9;
    tela.innerHTML += "9"
    console.log(numero)
}
)

btn0.addEventListener("click", function() {
    let tela = document.getElementById("tela")
    numero = 0;
    tela.innerHTML += "0"
    console.log(numero)
}
)


btnapagar.addEventListener("click", function() {
    let tela = document.getElementById("tela")
    numero = 0;
    tela.innerHTML = ""
    console.log(numero)
}
)

