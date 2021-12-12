// Método para controlar el diseño de la calculadora
const modosByButton = document.querySelectorAll('.header-right button');
const section = document.querySelector('section');

Array.from(modosByButton).forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('active');

    switch (button.textContent) {
      case 'Mode One':
        if (section.classList.contains('mode-dos') || section.classList.contains('mode-tres')) {
          section.classList.remove('mode-dos');
          section.classList.remove('mode-tres');
        }

        section.classList.add('container-calculator-mode-uno');
        break;
      case 'Mode Two':
        if (section.classList.contains('mode-tres')) section.classList.remove('mode-tres');

        section.classList.add('mode-dos');
        break;
      case 'Mode Three':
        if (section.classList.contains('mode-dos')) section.classList.remove('mode-dos');

        section.classList.add('mode-tres');
        break;
    }

    if (Array.from(modosByButton).find((b) => b.classList.contains('active'))) {
      Array.from(modosByButton).forEach((b) => {
        if (b.classList.contains('active') && b !== button) {
          b.classList.remove('active');
        }
      });
    }
  });
});

// Lógica para el control de la calculadora

const numbers = document.querySelectorAll('section .number');
const operators = document.querySelectorAll('section .operador');
const equal = document.querySelector('section #igual');
const clear = document.querySelector('section .clearCalculator');
const resumeData = document.querySelector('.calculator-header p');
const result = document.querySelector('section #result');
const deleteOne = document.querySelector('section .delete');

const sumar = (a, b) => parseFloat((a + b).toFixed(2));
const restar = (a, b) => parseFloat((a - b).toFixed(2));
const multiplicar = (a, b) => parseFloat((a * b).toFixed(2));
const dividir = (a, b) => parseFloat((a / b).toFixed(2));
const percent = (a, b) => parseFloat((a * (b / 100)).toFixed(2));

let values = [];

// TODO: Analizar los bugs que se presentan al momento de realizar operaciones

deleteOne.addEventListener('click', () => {
  result.value = result.value.slice(0, -1);
});

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (number.textContent === '.' && result.value.includes('.')) return;

    result.value += number.textContent;
    console.log(values);
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    console.log(values);
    if (result.value !== '') {
      values.push(parseFloat(result.value));
      resumeData.textContent += `${values[0]} ${operator.textContent}`;
      result.value = '';
    }

    if (values.length === 3) {
      switch (true) {
        case values.includes('+'):
          values[0] = sumar(values[0], values[2]);
          resumeData.textContent = `${values[0]} ${operator.textContent}`;
          values.splice(1);
          break;
        case values.includes('-'):
          values[0] = restar(values[0], values[2]);
          resumeData.textContent = `${values[0]} ${operator.textContent}`;
          values.splice(1);
          break;
        case values.includes('*'):
          values[0] = multiplicar(values[0], values[2]);
          resumeData.textContent = `${values[0]} ${operator.textContent}`;
          values.splice(1);
          break;
        case values.includes('/'):
          values[0] = dividir(values[0], values[2]);
          resumeData.textContent = `${values[0]} ${operator.textContent}`;
          values.splice(1);
          break;
        case values.includes('%'):
          values[0] = percent(values[0], values[2]);
          resumeData.textContent = `${values[0]} ${operator.textContent}`;
          values.splice(1);
          break;
      }
    }

    values.push(operator.textContent);
  });
});

clear.addEventListener('click', () => {
  result.value = '';
  resumeData.textContent = '';
  values = [];
});

equal.addEventListener('click', () => {
  values.push(parseFloat(result.value));

  console.log(values);

  switch (true) {
    case values.includes('+'):
      result.value = sumar(values[0], values[2]);
      values = [];
      break;
    case values.includes('-'):
      result.value = restar(values[0], values[2]);
      values = [];
      break;
    case values.includes('*'):
      result.value = multiplicar(values[0], values[2]);
      values = [];
      break;
    case values.includes('/'):
      result.value = dividir(values[0], values[2]);
      values = [];
      break;
    case values.includes('%'):
      result.value = percent(values[0], values[2]);
      values = [];
      break;
  }

  resumeData.textContent = ``;
});
