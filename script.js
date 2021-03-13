//get number to appear after pressing button 

const displayElement = document.getElementById('input');

const numbers = document.querySelectorAll('.number');

let firstNumber = null;
let secondNumber = null;
let operand = null;

numbers.forEach(numberButton => {
  numberButton.addEventListener('click', (e) => {
    
    if (operand == null) { 
      firstNumber = e.target.textContent;
      displayElement.value = firstNumber;
      console.log('firstNumber: ', firstNumber)
    }
    
    else {
      secondNumber = e.target.textContent;
      displayElement.value = secondNumber;
      console.log('secondNumber: ', secondNumber)
    }
  })   
});

//decimal 

const decimal = document.getElementById('decimal');
decimal.addEventListener('click', (e) => {

  if (firstNumber !== null){
  decimal.textContent.appendChild(firstNumber);
  }

  if (secondNumber !== null){
    displayElement.value = decimal.textContent;
    }

  else {
    displayElement.value = decimal.textContent;
  }
})

//operators

const operators = document.querySelectorAll('.operator')

operators.forEach(operatorButton => {
  operatorButton.addEventListener('click', (e) => {
    operand = e.target.innerText;
    console.log('operand:' , operand);
  });
});

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', (e) => {
  e.preventDefault();
  const result = calculate(parseFloat(firstNumber), parseFloat(secondNumber));
  displayElement.value = result 
  firstNumber = result
});

function calculate(firstNumber, secondNumber) {
  switch(operand) {
    case "+":
      return parseFloat(firstNumber) + parseFloat(secondNumber);
      
    case "-":
      return parseFloat(firstNumber) - parseFloat(secondNumber);
     
    case "x":
      return  parseFloat(firstNumber) * parseFloat(secondNumber);
      
    case "/":
      return  parseFloat(firstNumber) / parseFloat(secondNumber);
     
    default:
    break
  };
};

// delete numbers

const deleteInput = document.getElementById('delete');

deleteInput.addEventListener('click', (e) => {
  displayElement.value = displayElement.value.slice(0, -1)
})

//reset to 0

const clearInput = document.getElementById('clear')

clearInput.addEventListener('click', (e) => {
  ;
});






