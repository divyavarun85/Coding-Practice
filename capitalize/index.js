// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
function capitalize(str) {
  let wordsArray = str.split(" ");
  let newwordsArr = [];

  for (let words of wordsArray) {
    words = words.slice(0, 1).toUpperCase() + words.slice(1);
    newwordsArr.push(words);
  }
  console.log(newwordsArr.join(" "));
  return newwordsArr.join(" ");
}

module.exports = capitalize;
