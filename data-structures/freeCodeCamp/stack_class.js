class Stack {
  
  constructor() {
    this.collection = [ 1, 2, 3, 4 ];
  }

  print() {
    console.log(this.collection);
  }

  push(elem) {
    this.collection.push(elem);
  }

  pop() {
    return this.collection.pop();
  }

  peek() {
    return this.collection[this.collection.length - 1];
  }

  clear() {
    return this.collection.length = 0;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

const stack1 = new Stack();
console.log(stack1.isEmpty());
stack1.push(42);
stack1.print();
stack1.pop();
stack1.print();
console.log(stack1.clear());
console.log(stack1.peek());