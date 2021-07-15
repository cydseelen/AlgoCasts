// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = '';

  for (let character of str) {
    // ^ FOR Variable declaration (let) OF Iterable Object that we want to iterate through (str)
    reversed = character + reversed;
    // ^Adds each character to the reversed string
  }
  return reversed;
  }
// function reverse(str) {
//   return str.split('').reduce((rev, char) =>
//     char + rev, '');
// }

// reverse('cydnie');

// function reverse(str) {
//   if (str === "")
//     return "";
//   else
//     return reverse(str.substr(1)) + str.charAt(0);
// }
// console.log(reverse("hello"));

// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     // ^ FOR Variable declaration (let) OF Iterable Object that we want to iterate through (str)
//     reversed = character + reversed;
//     // ^Adds each character to the reversed string
//   }
//   return reversed;
// }
// ^For of syntax

// function reverse(str) {
//   var newString = "";
// // The for loop syntax below is not recommended, because you can easily make a mistake use "for of" instead
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
// console.log(reverse("hello"));

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverse("cydnie"));

// function reverse(str) {
//   var splitString = str.split("");
//   // ^Split the argument string into an array of strings where each letter is a string
//   var reverseArray = splitString.reverse();
//   // ^This reverses the order of the array with the last letter at the beginning
//   var joinArray = splitString.join("");
//   // ^this joins the letter strings into 1 string with all the letters in the desired reverse order
//   return joinArray;
//   // ^Returns the reversed string
// }

// reverse("excellent");
// ^Prints the reversed string
module.exports = reverse;
