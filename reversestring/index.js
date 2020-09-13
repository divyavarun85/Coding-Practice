// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// first method
/*function reverse(str) {
  return str.split("").reverse().join("");
}

reverse("banana");

//second method
function reverse(str) {
  let newString = "";
  for (character of str) {
    newString = character + newString;
  }
  console.log(newString);
  return newString;
}*/

//Third Method
function reverse(str) {
  debugger;
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

reverse("banana");

module.exports = reverse;
