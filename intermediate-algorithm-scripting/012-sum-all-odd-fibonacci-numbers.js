function sumFibs(num) {
  let sum = 0;
  let prevNum = 0;
  let currNum = 1;
  
  while(currNum <= num) {
    if(currNum % 2 !== 0) {
      sum += currNum;
    }
    currNum += prevNum;
    prevNum = currNum - prevNum;
  }

  return sum;
}

sumFibs(4);