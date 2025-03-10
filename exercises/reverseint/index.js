// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
  .toString()
  .split('')
  .reverse()
  .join('');

  return parseInt(reversed) * Math.sign(n);
  // Math.sign calculates if n > 0 it * by 1 if n < 0 it * by -1
}

module.exports = reverseInt;

// if (n < 0) {
//     return parseInt(reversed) * -1;
//   }
//   return parseInt(reversed);
