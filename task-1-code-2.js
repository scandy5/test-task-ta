"use strict";

function rentalCarCost(d) { 
	if (d < 3) return d * 40; //Для лучшего чтения кода, я бы советовал писать фигурные скобки. 
	if (7 > d && d >= 3) return d * 40 - 20; //Можно уменьшить количество кода и упростить логику, если поменять последовательность условий If. Это также избавит от логического оператора И (&&)
	if (d >= 7) return d * 40 - 50; //Упрощение заключается в том, чтобы отсеивать значения от большего числа до меньшего. Если это сделать, то в третьем операторе If не будет нужды. 
}
console.log(rentalCarCost(2)); //80
console.log(rentalCarCost(3)); //100
console.log(rentalCarCost(5)); //180
console.log(rentalCarCost(6)); //230
console.log(rentalCarCost(7)); //230
console.log(rentalCarCost(8)); //230
console.log(rentalCarCost(10));//350