

/**
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function sum(a, b) {
  return a + b;
}

/**
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  // We split the string into an array, reverse it, and join it back together.
  return str.split('').reverse().join('');
}

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number} The largest number in the array. Return null if the array is empty.
 */
function findLargest(numbers) {
  if (numbers.length === 0) return null;
  // Math.max with the spread operator is a very clean way to do this.
  return Math.max(...numbers);
}

/**
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  // Convert to lowercase to ensure the check is case-insensitive.
  const lowerStr = str.toLowerCase();
  const reversed = lowerStr.split('').reverse().join('');
  return lowerStr === reversed;
}

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number[]} A new array containing only the even numbers from the original array.
 */
function filterEvenNumbers(numbers) {
  // The modulo operator (%) helps us find numbers divisible by 2.
  return numbers.filter(num => num % 2 === 0);
}


// Do not edit the line below.
module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};
