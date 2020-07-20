class stackQueue {
  constructor() {
    // Create an Inbox Stack and an OutBox Stack
    this.inBox = [];
    this.outBox = [];
  }

  enqueue(value) {
    // Push the value in the inBox Stack
    this.inBox.push(value);
  }
  dequeue() {
    // First check the length of the OutBox
    if (this.outBox.length === 0) {
      //   If the OutBox is empty, populate it from the InBox
      while (this.inBox.length) {
        this.outBox.push(this.inBox.pop());
      }
    }
    // After populating it or not, pop the first item of the outbox
    let first = this.outBox.pop();
    return first;
  }
  peek() {
    // Check if the Outbox has any entry:
    if (this.outBox.length !== 0) {
      // If that's the case, return the last item of the outbox
      return this.outBox[this.outBox.length - 1];
    } else {
      // If the outbox is empty, return the first item of the inbox
      return this.inBox[0];
    }
  }
  isEmpty() {
    // Returns true if both stacks are empty
    return this.inBox.length === 0 && this.outBox.length === 0;
  }
  //   size() {
  //     return this.inBox.length + this.outBox.length;
  //   }
}
