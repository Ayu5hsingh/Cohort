/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let highestNumber=numbers[0];
    for (let i=0;(i<numbers.length-1);i++){
        if (highestNumber<=numbers[i+1]){
            highestNumber=numbers[i+1];
        }
    }
    return highestNumber;
    
}

module.exports = findLargestElement;