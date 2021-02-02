// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

var fizzBuzz = function (n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push(`${i} FizzBuzz`);
    } else if (i % 3 === 0) {
      answer.push(`${i} Fizz`);
    } else if (i % 5 === 0) {
      answer.push(`${i} Buzz`);
    } else {
      answer.push(i);
    }
  }
  return answer;
};

console.log(fizzBuzz(15));

// Time Complexity: O(N)O(N)
// Space Complexity: O(1)O(1)
