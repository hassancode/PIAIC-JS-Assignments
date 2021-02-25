var firstOperand = +prompt("Enter first operand");
var secondOperand = +prompt("Enter second operand");
var operator = prompt("Enter operator");

var result = undefined;
switch (operator) {
    case "+":
        result = firstOperand + secondOperand;
        break;
    case "-":
        result = firstOperand - secondOperand;
        break;
    case "*":
        result = firstOperand * secondOperand;
        break;
    case "/":
        result = firstOperand / secondOperand;
        break;
    case "%":
        result = firstOperand % secondOperand;
        break;
    default:
        result = 0;
        break;
}
alert(result)