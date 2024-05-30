let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.value');
let num1, operator1, num2, operator2, valueArr = null;
let dotClicked = false;



buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === '.') {
      if (!dotClicked) {
        display.textContent += button.textContent;
        dotClicked = true;
      } else {
        display.textContent += ''
      }
    } 
    else {
      display.textContent += button.textContent;

      valueArr = display.textContent.split(' ');
      operator2 = valueArr[3];
      
      if(operator2 !== undefined) {
        operate(num1, operator1, num2);
        display.textContent += ' ' + operator2 + ' ';
      }
    }
  });
});

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => y === 0 ? 'Nuh Uh' : x / y;

const operate = (num1, operator1, num2) => {
  if (valueArr === null) {
    return;
  } 
  else {
    num1 = +valueArr[0];
    operator1 = valueArr[1];
    num2 = +valueArr[2];

    switch (operator1) {
      case '+':
        display.textContent = add(num1, num2);
        break;
      case '-':
        display.textContent = subtract(num1, num2);
        break;
      case '*':
        display.textContent = multiply(num1, num2);
        break;
      case '/':
        display.textContent = divide(num1, num2);
        break;
    }

    if (display.textContent.length > 8) {
      let rounded = Number(display.textContent).toFixed(8);
      display.textContent = rounded;
    }
  }
};

function deleteButton() {
  if (display.textContent.slice(-1) === ' ') {
    display.textContent = display.textContent.slice(0, -3); 
  } else {
    display.textContent = display.textContent.slice(0, -1); 
  }
}

function clearDisplay() {
  display.textContent = null;
  num1 = null;
  operator1 = null;
  num2 = null;
  operator2 = null;
  valueArr = null;
  dotClicked = false;
}
