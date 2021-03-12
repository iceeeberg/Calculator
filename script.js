//get number to appear after pressing button 

const displayElement = document.getElementById('input');
const numbers = document.querySelectorAll('.number');

let firstNumber = "";
let secondNumber = "";
let operand = "";

numbers.forEach(numberButton => {
  numberButton.addEventListener('click', (e) => {
    const numberInput = e.target.textContent;
    displayElement.value += numberInput

    if (operand === "") { 
      firstNumber += e.target.textContent;
    }

    else {
      secondNumber += e.target.textContent;
    }
  })   
});


//operators

const operators = document.querySelectorAll('operator')

operators.forEach(operatorButton => {
  operatorButton.addEventListener('click', (e) => {
    if (e.target.innerText !== "=") {
      operator = e.target.innerText;

      displayElement.value(firstNumber);
      displayElement.value(operand)
  }
    else {
      displayElement.value(secondNumber);

    }
      switch(operator) {
        case "+":
          displayElement.value(parseInt(firstNumber) + parseInt(secondNumber));

        case "-":
          displayElement.value(parseInt(firstNumber) - parseInt(secondNumber));

        case "x":
          displayElement.value(parseInt(firstNumber) * parseInt(secondNumber));

        case "/":
          displayElement.value(parseInt(firstNumber) / parseInt(secondNumber));

      default:
        break
      }
  })
})


// delete numbers

const deleteInput = document.getElementById('delete');

deleteInput.addEventListener('click', (e) => {
  displayElement.value = displayElement.value.slice(0, -1)
})

//reset to 0

const clearInput = document.getElementById('clear')

clearInput.addEventListener('click', (e) => {
  displayElement.value = 0
  firstNumber = null
  operator = null
  secondNumber = null
});





