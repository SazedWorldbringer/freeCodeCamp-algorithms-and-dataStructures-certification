function destroyer(arr) {
  const valsToRemove = [...arguments].slice(1)
  const filteredArr = []

  for(let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for(let j = 0; j < valsToRemove.length; j++) {
      if(arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if(!removeElement) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);