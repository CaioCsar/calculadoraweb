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

// tela
let numero = 0;



btn1.addEventListener("click", function clique() {
    let tela = document.getElementsByClassName("numero")
    numero = 1;
    tela.innerHTML = "1"
}
)

