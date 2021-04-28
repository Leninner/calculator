const simSuma = "+";
const simRetsa = "-";
const simMultiplicar = "*";
const simDividir = "/";
const result1 = document.querySelector("#result1");
//Consultamos números y agregamos a la pantalla de la calculadora al hacer click
const one = document.querySelector('#uno');
const two = document.querySelector('#dos');
const three = document.querySelector('#tres');
const four = document.querySelector('#cuatro');
const five = document.querySelector('#cinco');
const six = document.querySelector('#seis');
const seven = document.querySelector('#siete');
const eight = document.querySelector('#ocho');
const nine = document.querySelector('#nueve');
const puntar = document.querySelector('#punto');
const sumar = document.querySelector('#suma');
const restar = document.querySelector('#resta');
const multiplica = document.querySelector('#multiplicar');
const divide = document.querySelector('#dividir');
const borrar = document.querySelector('#reset');


switch(one){
    case one: numero(one);
    case two: numero(two);
    case three: numero(three);
    case four: numero(four);
    case five: numero(five);
    case six: numero(six);
    case seven: numero(seven);
    case eight: numero(eight);
    case nine: numero(nine);
    case puntar: numero(puntar);
    case sumar: numero(sumar);
    case restar: numero(restar);
    case multiplica: numero(multiplica);
    case divide: numero(divide);
    case borrar: resetear(borrar);
}


//Funcion para resetear
function resetear(valor){
    valor.addEventListener('click', () => {
        result1.textContent = "";
    });
}


//Funcion para escribir en pantalla de la calculadora
function numero(number){
    number.addEventListener('click', () => {
        result1.textContent += number.textContent;
    }); 
}

console.log(result1.textContent);


//TODO: Cambiar la función para llamar a la operación

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