function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;

  for (let i of arr) {
    sum +=i;
    avg = +(sum / (arr.length)).toFixed(2);
    if (i >= max) {max = i;} 
    if (i <= min) {min = i;} 
  }  

  return { min: min, max: max, avg: avg };
};

function summElementsWorker(...arr) {
  
  if (arr.length == 0) {
    console.log("Массив пустой"); 
    return 0; 
  } else {
    return arr.reduce(function(previousValue, currentValue) {
    return (previousValue + currentValue);
    }, 0);  
  }
};

function differenceMaxMinWorker(...arr) {

  if (arr.length == 0) {
    console.log("Массив пустой!!!"); 
    return 0; 
  } else {
    let max = Math.max(...arr); 
    let min = Math.min(...arr);
    let diff = max - min;
    return (diff);
  }
};

function differenceEvenOddWorker(...arr) {

  if (arr.length == 0) {
    console.log("Массив пустой!!!"); 
    return 0; 
  } else {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i of arr) {
      if (i % 2 === 0) {
        sumEvenElement += i;
      } else {
        sumOddElement += i;
      }
    }
    return (sumEvenElement - sumOddElement);
  };
  
};

function averageEvenElementsWorker(...arr) {

  if (arr.length == 0) {
    console.log("Массив пустой!!!"); 
    return 0; 
  } else {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i of arr) {
      if (i % 2 === 0) {
        sumEvenElement += i;
        countEvenElement += 1;
      } else {
        continue;
      }
    }
    return (sumEvenElement / countEvenElement);
  };
};

function makeWork (arrOfArr, func) {

  let maxWorkerResult = -Infinity;  
  for (let i of arrOfArr) {  
    const ElementsArray = func(...i);
    if ( ElementsArray > maxWorkerResult ) {
      maxWorkerResult = ElementsArray;
    } else {
      continue;
    }
  }
  return maxWorkerResult;
};