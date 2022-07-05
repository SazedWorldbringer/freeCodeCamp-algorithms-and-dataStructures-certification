const squareList = arr => {
  // Only change code below this line

 /* METHOD 1, using filter and map 
  return arr
  .filter(num => num > 0 && num % 1 == 0)
  .map(num => Math.pow(num, 2))
 */ 

/* METHOD 2, using reduce */
  return arr.reduce((sqrInt, num) => {
    return num > 0 && num % 1 === 0
      ? sqrInt.concat(num * num)
      : sqrInt;
  }, []);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);