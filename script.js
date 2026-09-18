const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operator");
const inputElement = document.querySelector(".input"); // the input.value stores string data type
const equals = document.querySelector(".equals");

let firstNumber = "";
let secondNumber = "";
let mathOperator = "";

function add (a, b) {
    return a + b;
}

function substract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (num1, num2, operator) {
    return operator(num1, num2);
}

function calculate () {
    let total;
    if(firstNumber !== "" && secondNumber !== "" && mathOperator !== "") {
        switch (mathOperator) {
            case "+":
                total = operate(Number.parseInt(firstNumber), Number.parseInt(secondNumber), add);
                break;            
            case "−":
                total = operate(Number.parseInt(firstNumber), Number.parseInt(secondNumber), substract);    
                break;
            case "×":
                total = operate(Number.parseInt(firstNumber), Number.parseInt(secondNumber), multiply);
                break;            
            case "÷":
                total = operate(Number.parseInt(firstNumber), Number.parseInt(secondNumber), divide);
                break;
            case "√":
                break;
            case "x²":
                break;
            default:
                break;
        }
    }
    return total;
}

// number buttons
numberButtons.forEach((number) => {
    number.addEventListener("click", () => {
        if (inputElement.value === mathOperator) {
            inputElement.value = "";
        }

        if (mathOperator) {
            secondNumber += number.textContent;
        }

        if (!mathOperator) {
            firstNumber += number.textContent;
        }

        inputElement.value += number.textContent;
        
    });
});

// math operators
operatorButtons.forEach((operator) => {
    operator.addEventListener("click", () => {
        mathOperator = operator.textContent;
        inputElement.value = mathOperator;
    });
});

// this is for testing
equals.addEventListener("click", () => {
   firstNumber = calculate();
   console.log(firstNumber);
   inputElement.value = firstNumber;
   secondNumber = "";
   mathOperator = "";
});