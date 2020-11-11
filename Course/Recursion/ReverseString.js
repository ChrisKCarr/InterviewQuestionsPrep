//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];

  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

console.log(reverseString("Natalia"));

//should return: 'yretsam oyoy'
function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseStringRecursive("yoyo master");
