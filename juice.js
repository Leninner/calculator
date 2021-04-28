const simSuma = "+";
const simRetsa = "-";
const simMultiplicar = "*";
const simDividir = "/";
const result1 = document.querySelector("#result1");
const result2 = document.querySelector('#result2');
const val = document.querySelector('#valores');
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
const igual = document.querySelector('#equal');


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
    case sumar: operando(sumar);
    case restar: operando(restar);
    case multiplica: operando(multiplica);
    case divide: operando(divide);
    case borrar: resetear(borrar);
    //TODO: Crear función para que al dar click aquí, aparezca el resultado.
    case igual: operando(igual);
}

//Objeto que contiene números
const numeros = {
    uno: one.textContent,
    dos: two.textContent,
    tres: three.textContent,
    cuatro: four.textContent,
    cinco: five.textContent,
    seis: six.textContent,
    siete: seven.textContent,
    ocho: eight.textContent,
    nueve: nine.textContent,
}
console.table(numeros);


//Funcion para resetear
function resetear(valor){
    valor.addEventListener('click', () => {
        valores.textContent  = "";
    });
}

//Funcion para escribir el operador
function operando(o){
  o.addEventListener('click', (e) => {
    valores.textContent = o.textContent;
  });
}

//TODO: Funcion para escribir en pantalla de la calculadora
function numero(number){
    number.addEventListener('click', () => {
        valores.textContent += number.textContent;
    });
}

//TODO: Cambiar la función para llamar a la operación
function operacion(a, b){
    return suma(a, b);
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