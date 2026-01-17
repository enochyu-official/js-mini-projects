// Declaring Variables
const RanNum = Math.floor( 100 * Math.random() );
let GueNum;
let trial = 0;

// Defining Functions
function guess1() {
  GueNum = document.getElementById("guess-input").value;

  if (GueNum > RanNum) {
    document.getElementById("guess-status").textContent = "high!";
    document.getElementById("guess-chance").textContent = "4";
  } else if (GueNum < RanNum) {
    document.getElementById("guess-status").textContent = "low!";
    document.getElementById("guess-chance").textContent = "4";
  } else {
    document.getElementById("guess-status").textContent = "correct!";
    document.getElementById("guess-chance").textContent = "0";
    document.getElementById("win").style.display = "block";
    document.getElementById("refresh").style.display = "block";
  }
}

function guess2() {
  GueNum = document.getElementById("guess-input").value;

  if (GueNum > RanNum) {
    document.getElementById("guess-status").textContent = "high!";
    document.getElementById("guess-chance").textContent = "3";
  } else if (GueNum < RanNum) {
    document.getElementById("guess-status").textContent = "low!";
    document.getElementById("guess-chance").textContent = "3";
  } else {
    document.getElementById("guess-status").textContent = "correct!";
    document.getElementById("guess-chance").textContent = "0";
    document.getElementById("win").style.display = "block";
    document.getElementById("refresh").style.display = "block";
  }
}

function guess3() {
  GueNum = document.getElementById("guess-input").value;

  if (GueNum > RanNum) {
    document.getElementById("guess-status").textContent = "high!";
    document.getElementById("guess-chance").textContent = "2";
  } else if (GueNum < RanNum) {
    document.getElementById("guess-status").textContent = "low!";
    document.getElementById("guess-chance").textContent = "2";
  } else {
    document.getElementById("guess-status").textContent = "correct!";
    document.getElementById("guess-chance").textContent = "0";
    document.getElementById("win").style.display = "block";
    document.getElementById("refresh").style.display = "block";
  }
}

function guess4() {
  GueNum = document.getElementById("guess-input").value;

  if (GueNum > RanNum) {
    document.getElementById("guess-status").textContent = "high!";
    document.getElementById("guess-chance").textContent = "1";
  } else if (GueNum < RanNum) {
    document.getElementById("guess-status").textContent = "low!";
    document.getElementById("guess-chance").textContent = "1";
  } else {
    document.getElementById("guess-status").textContent = "correct!";
    document.getElementById("guess-chance").textContent = "0";
    document.getElementById("win").style.display = "block";
    document.getElementById("refresh").style.display = "block";
  }
}

function guess5() {
  GueNum = document.getElementById("guess-input").value;

  if (GueNum > RanNum) {
    document.getElementById("guess-status").textContent = "high!"
    document.getElementById("introduction").textContent = `The number in my mind was ${RanNum}.`;
    document.getElementById("guess-chance").textContent = "0";
    document.getElementById("lose").style.display = "block";
    document.getElementById("refresh").style.display = "block";
  } else if (GueNum < RanNum) {
    document.getElementById("guess-status").textContent = "low!";
    document.getElementById("introduction").textContent = `The number in my mind was ${RanNum}.`;
    document.getElementById("guess-chance").textContent = "0";
    document.getElementById("lose").style.display = "block";
    document.getElementById("refresh").style.display = "block";
  } else {
    document.getElementById("guess-status").textContent = "correct!";
    document.getElementById("guess-chance").textContent = "0";
    document.getElementById("win").style.display = "block";
    document.getElementById("refresh").style.display = "block";
  }
}

document.getElementById("guess-submit").addEventListener("click", () => {
  trial++;
  
  if (trial === 1) {
    guess1();
  } else if (trial === 2) {
    guess2();
  } else if (trial === 3) {
    guess3();
  } else if (trial === 4) {
    guess4();
  } else if (trial === 5) {
    guess5();
  }
});
