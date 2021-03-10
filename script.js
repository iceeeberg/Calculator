// const numbers = document.getElementsByClassName('number');
// const operators = document.getElementsByClassName('operator');
// const clearElements = document.getElementById('clear');
// const deleteElements = document.getElementById('delete');
const displayElement = document.getElementById('input');

//get number to appear after pressing button 

document.getElementsByClassName("number").forEach(numberButton => {
  numberButton.addEventListener('click', (e) => {
    const numberInput = e.target.textContent;
  })
});