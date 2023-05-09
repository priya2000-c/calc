let result = document.getElementById("result");
let buttons = document.querySelectorAll(".button");
let operand1 = "";
let operand2 = "";
let operator = "";
let decimalPressed = false;

function clear() {
	operand1 = "";
	operand2 = "";
	operator = "";
	result.innerText = "0";
	decimalPressed = false;
}

function addNumber(num) {
	if (operator == "") {
		operand1 += num;
		result.innerText = operand1;
	} else {
		operand2 += num;
		result.innerText = operand2;
	}
}

function addDecimal() {
	if (!decimalPressed) {
		if (operator == "") {
			operand1 += ".";
			result.innerText = operand1;
			decimalPressed = true;
		} else {
			operand2 += ".";
			result.innerText = operand2;
			decimalPressed = true;
		}
	}
}

function selectOperator(op) {
	if (operator == "") {
		operator = op;
		decimalPressed = false;
	} else {
		calculate();
		operator = op;
		decimalPressed = false;
	}
}

function calculate() {
	let num1 = parseFloat(operand1);
	let num2 = parseFloat(operand2);
	let answer = 0;
	switch (operator) {
		case "+":
			answer = num1 + num2;
			break;
		case "-":
			answer = num1 - num2;
			break;
		case "*":
			answer = num1 * num2;
			break;
		case "/":
			answer = num1 / num2;
			break;
		case "%":
			answer = num1 % num2;
			break;
		case "^2":
			answer = num1 ** 2;
			break;
		default:
			answer = num1;
	}
	result.innerText = answer;
	operand1 = answer.toString();
	operand2 = "";
	operator = "";
}

buttons.forEach(function(button) {
	button.addEventListener("click", function() {
		let buttonValue = this.innerText;
		if (buttonValue == "AC") {
			clear();
		} else if (buttonValue == ".") {
			addDecimal();
		} else if (buttonValue == "+" || buttonValue == "-" || buttonValue == "*" || buttonValue == "/" || buttonValue == "%" || buttonValue == "^2") {
			selectOperator(buttonValue);
		} else if (buttonValue == "=") {
			calculate();
		} else {
			addNumber(buttonValue);
		}
	});
});
