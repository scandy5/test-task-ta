"use strict"; //Используйте одинарные кавычки для строк

function basicOp(operation, value1, value2) {
	switch (operation) {
		case "+": //Используйте фигурные скобки для отдельных блоков в case
			return value1 + value2;
			break;
		case "-":
			return value1 - value2; 
			break;
		case "*":
			return value1 * value2;
			break;
		case "/":
			return value1 / value2;
			break;
	} //Используйте default
}

console.log(basicOp('*', 3, 5))
console.log(basicOp('/', 3, 5))
console.log(basicOp('-', 3, 5))
console.log(basicOp('+', 3, 5))