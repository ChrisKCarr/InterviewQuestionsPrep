class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return console.log(this);
  }
  pop() {
    this.array.pop();
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Youtube");
myStack.push("Gmail");

//Discord
//Udemy
//google
