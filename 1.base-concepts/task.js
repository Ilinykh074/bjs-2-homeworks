"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b ** 2) - 4 * a * c;
  console.log (discriminant);
	if (discriminant > 0) {
    console.log(discriminant);
    console.log();
		arr.push((-b + Math.sqrt(discriminant)) / (2 * a))
		arr.push((-b - Math.sqrt(discriminant)) / (2 * a))
	} else if (discriminant === 0) {
		arr.push(-b / (2 * a))
	}
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	
	if (isNaN(percent)) {
		return false;
	}
	
	if (isNaN(contribution)) {
		return false; 
	}
	if (isNaN(amount)) {
		return false;
	}
  if (isNaN(countMonths)) {
		return false; 
	}

	percent = percent / 100 / 12;
	let bodyCredite = amount - contribution;
	let payment = bodyCredite * (percent + (percent / (((1 + percent) ** countMonths) - 1)));

	let sum = +(payment * countMonths).toFixed(2);
	return sum;	
	} 
