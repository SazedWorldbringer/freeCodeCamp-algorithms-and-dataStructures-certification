function titleCase(str) {
  let wordsArr = str.split(' ');
  let updatedWords = []
  for(let word in wordsArr) {
    updatedWords[word] = wordsArr[word][0].toUpperCase() + wordsArr[word].slice(1).toLowerCase();
  }
  return updatedWords.join(" ")
}

titleCase("I'm a little tea pot");