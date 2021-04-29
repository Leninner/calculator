var a;
var b;
var operacion;
const val = document.querySelector('#valores');
const finalResult = document.querySelector("#resultFinal");
const one = document.querySelector('#uno');
const two = document.querySelector('#dos');
const three = document.querySelector('#tres');
const four = document.querySelector('#cuatro');
const five = document.querySelector('#cinco');
const six = document.querySelector('#seis');
const seven = document.querySelector('#siete');
const eight = document.querySelector('#ocho');
const nine = document.querySelector('#nueve');
const sumar = document.querySelector('#suma');
const restar = document.querySelector('#resta');
const multiply = document.querySelector('#multiplicar');
const divide = document.querySelector('#dividir');
const point = document.querySelector('#punto');
const borrar = document.querySelector('#reset');
const igual = document.querySelector('#equal');
    
    one.addEventListener('click', (e) => {
        val.textContent += "1";
    });
    two.addEventListener('click', (e) => {
        val.textContent += "2";
    });
    three.addEventListener('click', (e) => {
        val.textContent += "3";
    });
    four.addEventListener('click', (e) => {
        val.textContent += "4";
    });
    five.addEventListener('click', (e) => {
        val.textContent += "5";
    });
    six.addEventListener('click', (e) => {
        val.textContent += "6";
    });
    seven.addEventListener('click', (e) => {
        val.textContent += "7";
    });
    eight.addEventListener('click', (e) => {
        val.textContent += "8";
    });
    nine.addEventListener('click', (e) => {
        val.textContent += "9";
    });
    sumar.addEventListener('click', (e) => {
        a = val.textContent;
        operacion = "+";
        clear();
    });
    restar.addEventListener('click', (e) => {
        a = val.textContent;
        operacion = "-";
        clear();
    });
    multiply.addEventListener('click', (e) => {
        a = val.textContent;
        operacion = "*";
        clear();
    });
    divide.addEventListener('click', (e) => {
        a = val.textContent;
        operacion = "/";
        clear();
    });
    borrar.addEventListener('click', (e) => {
        resetear();
    });
    point.addEventListener('click', (e) => {
        val.textContent += ".";
    });
    igual.addEventListener('click', (e) => {
        b = val.textContent;
        calculos();
    });


function calculos(){
    let res = 0;
    switch(operacion){
        case "+": res = parseFloat(a) + parseFloat(b);
        break;
        case "-": res = parseFloat(a) - parseFloat(b);
        break;
        case "*": res = parseFloat(a) * parseFloat(b);
        break;
        case "/": res = parseFloat(a) / parseFloat(b);
        break;
    }
    resetear();
    finalResult.textContent = res;
}

function resetear(){
    val.textContent = "";
    finalResult.textContent = "0";
    a = 0;
    b = 0;
    operacion = ""; 
}

function clear(){
    val.textContent = "";
}