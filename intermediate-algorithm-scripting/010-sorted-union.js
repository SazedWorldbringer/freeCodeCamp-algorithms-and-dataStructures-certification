function uniteUnique(arr) {
  // array to store the final result
  let finalArray = [];

  // looping through the arguments
  for(let i = 0; i < arguments.length; i++) {
    let arrayArgs = arguments[i];

    // loop through the array at hand
    for(let j = 0; j < arrayArgs.length; j++) {
      let indexValue = arrayArgs[j];

      // push element if it doesn't already exist in the final array
      if(finalArray.indexOf(indexValue) < 0) finalArray.push(indexValue);
    }
  }
  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);