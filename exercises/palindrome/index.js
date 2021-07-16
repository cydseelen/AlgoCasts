// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Pseudo code
// 1. if else statement
//  if str === reverse function
// return true
// else return

function palindrome(str) {
  const reversed = str.split('').reverse().join('');

  return str === reversed;
  // Boolean statement will return true or false
}

//Walk through
//Need to turn str into an array w/ split so we can use the every method
// every is an advanced array helper
//pass every the character & the index of the character
//compare the character to the character at the opposite end of the array

// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

module.exports = palindrome;
