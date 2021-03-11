//get number to appear after pressing button 

const displayElement = document.getElementById('input');
const numbers = document.querySelectorAll('.number');
const numberInput = numbers.textContent

let firstInput = '';
let operator = null;
let secondInput = '';
let equalTo = false;


numbers.forEach(numberButton => {
  numberButton.addEventListener('click', (e) => {
    const numberInput = e.target.textContent;
    displayElement.value += numberInput

    // if(firstInput && !operator && equalTo) {
    //   firstInput = '';
    //   equalTo = false;
    // }

    // if (!operator) {
    //   firstInput += numberInput;
    //   displayElement.value = firstInput
    // }

    // if (firstInput && operator) {
    //   secondInput += numberInput;
    //   displayElement.value = secondOperand;
    // }
  })   
});


// delete numbers

const deleteInput = document.getElementById('delete');

deleteInput.addEventListener('click', (e) => {
  displayElement.value = displayElement.value.slice(0, -1)
})

//reset to 0

const clearInput = document.getElementById('clear')

clearInput.addEventListener('click', (e) => {
  const clear =  0;
  displayElement.value = clear
});

// calculate numbers 

const newDisplay = document.createElement('input');
const addition = document.getElementById('add');

addition.addEventListener('click', (e) => {
  return numberInput.displayElement + numberInput.newDisplay
});






