//get number to appear after pressing button 

const displayElement = document.getElementById('input');
const numbers = document.querySelectorAll('.number');

let firstNumber = "";
let secondNumber = "";
let operand = "";

numbers.forEach(numberButton => {
  numberButton.addEventListener('click', (e) => {
   
    if (!operand) { 
      firstNumber += e.target.textContent;
      displayElement.value = firstNumber
      console.log('firstNumber: ', firstNumber)
    }
    
    else {
      secondNumber += e.target.textContent;
      displayElement.value = secondNumber ;
      console.log('secondNumber: ', secondNumber)
    }
  })   
});


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
  const result = calculate(parseFloat(firstNumber), parseFloat(secondNumber));
  displayElement.value = result 
  firstNumber = result
  secondNumber = ""
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

//reset to 0

const resetButton = document.getElementById('clear');

resetButton.addEventListener('click', (e) => {
  firstNumber= "";
  secondNumber= "";
  operand ="";
  displayElement.value = 0;
  })

//delete number 

const deleteInput = document.getElementById('delete');
  deleteInput.addEventListener('click', (e) => {
    displayElement.value = firstNumber.slice(0,-1);
  })
  








