const simSuma = "+";
const simRetsa = "-";
const simMultiplicar = "*";
const simDividir = "/";

console.log(operacion(simSuma, 122, 23));

function operacion(operador, a, b){
    if(operador === simSuma){
    return suma(a, b);
    }
}

function suma(a, b){
    return a + b;
}  

function resta(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}