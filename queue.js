/** IMPLEMENTATION OF QUEUE IN JAVASCRIPT
 *  SOURCE: https://www.geeksforgeeks.org/implementation-queue-javascript/?ref=gcse
 */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  front() {
    // returns the Front element of
    // the queue without removing it.
    if (this.isEmpty()) {
      return "no elements in Queue";
    }
    return this.items[0];
  }

  isEmpty() {
    // return true if the queue is empty.
    return this.items.length == 0;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

module.exports = Queue;
