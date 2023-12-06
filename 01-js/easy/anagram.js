/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str1_length = str1.length;
  let str2_length = str2.length;
  // if  both the string are not equal then its not a anagram

  if (str1_length !== str2_length) {
    return false;
  }

  str1=str1.toLowerCase().split('').sort().join('');
  str2=str2.toLowerCase().split('').sort().join('');

  if (str1 === str2) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = isAnagram;