const Queue = require("../../queue");

describe("Queue Data Structure", () => {
  describe("dequeue", () => {
    it("should return 'Underflow' if the queue is empty", () => {
      let queue = new Queue();
      expect(queue.dequeue()).toBe("Underflow");
    });

    it("should return the queue without the first element, if the queue is not empty", () => {
      let queue = new Queue();
      queue.enqueue(10);
      queue.enqueue(20);
      queue.enqueue(30);
      queue.enqueue(40);
      queue.enqueue(50);
      queue.enqueue(60);
      let firstElementInQueue = queue.front();
      expect(queue.dequeue()).not.toContain(firstElementInQueue);
    });
  });

  describe("helpers", () => {
    describe("isEmpty", () => {
      it("should return a true if queue is empty", () => {
        let queue = new Queue();
        expect(queue.isEmpty()).toBeTruthy();
      });
    });

    describe("front", () => {
      it("should return the first element that was added to the queue", () => {
        let queue = new Queue();
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        queue.enqueue(40);
        queue.enqueue(50);
        queue.enqueue(60);
        expect(queue.front()).toBe(10);
      });
    });

    describe("print queue", () => {
      it("should return a string representation of the empty queue", () => {
        let queue = new Queue();
        expect(queue.printQueue()).toBe("");
      });

      it("should return a string representation of the whole queue", () => {
        let queue = new Queue();
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        queue.enqueue(40);
        queue.enqueue(50);
        queue.enqueue(60);
        console.log(queue.printQueue());
        expect(queue.printQueue()).toBeTruthy();
      });
    });
  });
});
