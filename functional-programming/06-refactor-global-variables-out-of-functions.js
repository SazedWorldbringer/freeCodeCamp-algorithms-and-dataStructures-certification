// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(booksArr, bookName) {
  let arr = [...booksArr]
  arr.push(bookName);
  return arr;
  
  // Change code above this line
}

// Change code below this line
function remove(booksArr, bookName) {
  const book_index = booksArr.indexOf(bookName);
  let arr = [...booksArr]
  if (book_index >= 0) {
    arr.splice(book_index, 1);
    return arr;

    // Change code above this line
    }
}