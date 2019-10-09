/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = x + "";
  let revx = reverseString(x);
  if (x === revx) return true;
  return false;
};

function reverseString(x) {
  return x
    .split("")
    .reverse()
    .join("");
}
