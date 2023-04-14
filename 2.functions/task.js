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
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
