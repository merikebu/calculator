const buttonsAll = document.querySelectorAll("button");

const inputResult = document.getElementById("result");

for (let i = 0; i < buttonsAll.length; i++) {
  buttonsAll[i].addEventListener("click", function()  {
    const buttonValue = buttonsAll[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputResult.value = "";
}

function calculateResult() {
  inputResult.value = eval(inputResult.value);
}

function appendValue(buttonValue) {
  inputResult.value += buttonValue;
  //   inputFieldEl.value = inputFieldEl.value + buttonValue;
}