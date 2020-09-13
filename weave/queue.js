// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }
  peek() {
    const n = this.data.length;
    return this.data[n - 1];
  }
  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
