// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  max = 0;
  maxchar = "";
  for (char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }
  for (char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxchar = char;
    }
  }
  return maxchar;
}

module.exports = maxChar;
