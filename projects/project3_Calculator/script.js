// Declaring Variables
let selectId;
let selectContent;
let buttonId = document.getElementById("calculator-input");
const outputContent = document.getElementById("output");

// Function
function select(event) {
  selectId = event.target.closest("button").id;
  selectContent = event.target.closest("button").value;

  display();
}

function display() {
  outputContent.textContent += selectContent;
}

function clear() {
  outputContent.textContent = "";
}

function addition() {
}

buttonId.addEventListener("click", select);
document.getElementById("clear").addEventListener("click", clear); 


