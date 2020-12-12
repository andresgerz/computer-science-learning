class Queue {
  
  constructor() {
    this.collection = [ 1, 2, 3, 4 ];
  }

  print() {
    console.log(this.collection);
  }

  enqueue(elem) {
    return this.collection.unshift(elem);
  }

  dequeue() {
    return this.collection.pop();
  }

  front() {
    return this.collection.pop();
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }

}

const queue = new Queue();
queue.print();
console.log(queue.enqueue(42));
queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.front());
console.log(queue.size());
console.log(queue.isEmpty());