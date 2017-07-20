displayNum = "";
storedNum = "";
operation = 0;
mathInput = 0;
calculationFinished = false;

function clearDisplay() {
  let display = document.getElementById("screen");

  displayNum = "";
  storedNum = "";
  operation = 0;
  mathInput = 0;
  display.value = displayNum;
}

function numInput(num) {
  let display = document.getElementById("screen");
  if (display.value === "" && num === "0") {
    return;
  } else if (calculationFinished === true) {
    display.value = num;
    calculationFinished = false;
  } else {
    display.value += num;
  }
}

function decimal(dec) {
  let display = document.getElementById("screen");
  for (i = 0; i < display.value.length; i++)
    if (display.value.charAt(i) == ".") {
      return;
    }

  display.value += dec;
}

function calcAction(command) {
  let display = document.getElementById("screen"),
    displayNum = display.value;
  (evalDisplay = eval(displayNum)), (evalStored = eval(storedNum));

  if (mathInput == 0) {
    storedNum = display.value;
  } else if (mathInput === 1) {
    storedNum = evalStored + evalDisplay;
  } else if (mathInput === 2) {
    storedNum = evalStored - evalDisplay;
  } else if (mathInput === 3) {
    storedNum = evalStored * evalDisplay;
  } else if (mathInput === 4) {
    storedNum = evalStored / evalDisplay;
  }

  if (command === "add") {
    operation = 1;
  } else if (command == "subtract") {
    operation = 2;
  }
  if (command === "multiply") {
    operation = 3;
  }

  if (command === "divide") {
    operation = 4;
  }

  mathInput = operation;
  display.value = "";
}

function calculate() {
  let display = document.getElementById("screen");
  displayNum = display.value;
  let evalDisplay = eval(displayNum),
    evalStored = eval(storedNum);

  if (operation === 1) {
    displayNum = evalStored + evalDisplay;
  } else if (operation === 2) {
    displayNum = evalStored - evalDisplay;
  } else if (operation === 3) {
    displayNum = evalStored * evalDisplay;
  } else if (operation === 4) {
    displayNum = evalStored / evalDisplay;
  }

  display.value = displayNum;
  if (operation != 0) calculationFinished = true;

  operation = 0;
  mathInput = 0;
  displayNum = "";
  storedNum = "";
}

function clearDisplay() {
  let display = document.getElementById("display");
  display.value = "0";
  storedNum = "0";
  calculationFinished = true;
  operation = operations.none;
}

function clearPreviousResult() {
  let display = document.getElementById("display");
  if (calculationFinished) {
    display.value = "0";
    calculationFinished = false;
  }
}
