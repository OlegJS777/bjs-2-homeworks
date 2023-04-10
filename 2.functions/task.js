function getArrayParams(...arr) {
let min = Infinity;
let max = -Infinity;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min)
    min = arr[i];
  if (arr[i] > max)
    max = arr[i];
  sum = arr[i] + sum;
}
avg = Number((sum / arr.length).toFixed(2));


  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}
return sum;
}

function differenceMaxMinWorker(...arr) {

  if(arr.length === 0){
    return 0;
  }

  let min = Infinity;
  let max = -Infinity;
  let difference;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min)
      min = arr[i];
    if (arr[i] > max)
      max = arr[i];
      difference = Number((max - min));
  }
  return difference; 
}

function differenceEvenOddWorker(...arr) {
  
  if(arr.length === 0){
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    sumEvenElement += arr[i];
    } else if (arr[i] % 2 != 0){
      sumOddElement += arr[i]; ;
    }
  }
    
  difference = sumEvenElement - sumOddElement;
  return difference; 
}

function averageEvenElementsWorker(...arr) {
  
  if(arr.length === 0){
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
  let average;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    sumEvenElement += arr[i];
    countEvenElement ++;
    } 
  }
    
  difference = sumEvenElement / countEvenElement;
  return difference; 
}

function makeWork (arrOfArr, func) {

  let maxWorkerResult = -Infinity;

  for(let i = 0; i < arrOfArr.length; i++){
    let maxValue = func(...arrOfArr[i]);
    if(maxWorkerResult < maxValue) {
      maxWorkerResult = maxValue;
    }
  }
  return maxWorkerResult;
}

