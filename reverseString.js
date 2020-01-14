name = "Krzysztof Jacyk";

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
  // OR
  //   const backward = [];
  //   const totalItems = str.length - 1;
  //   for (let i = totalItems; i >= 0; i--) {
  //     backward.push(str[i]);
  //   }
  //   return backward.join("");
}

console.log(reverse(name));
