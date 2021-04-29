const val = document.querySelector('#valores');
const result = document.querySelector('#resultado');
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
}

igual.addEventListener('click', () => {
    result.textContent = valorOne(val1) + valorOne(val1);
    console.log(result);
});

let val1 = 0;
function numero(number){
    number.addEventListener('click', (e) => {
        val.textContent += e.target.textContent;
        val1 = parseFloat(val.textContent);
        //Intento de conseguir los valores ingresados
        valorOne(val1);
        valorTwo(val1);
        console.log(valorOne(val1) + ": Valor 1");
        console.log(valorTwo(val1) + ": Valor 2");
        return val1;
    });
}

function valorOne(numero){
    let valor = numero;
    return valor;
}
function valorTwo(numero){
    let valor2 = numero;
    return valor2;
}


//Funcion para resetear
function resetear(valor){
    valor.addEventListener('click', () => {
        val.textContent  = "";
        result.textContent = "0";
    });
}

//Funcion para escribir el operador
function operando(o){
  o.addEventListener('click', () => {
    val.textContent = "";
  })
}