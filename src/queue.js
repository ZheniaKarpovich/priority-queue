const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(!arguments.length)
			this.maxSize=30;
		else
			this.maxSize=maxSize;
		this.heap=new MaxHeap();
	}

	push(data, priority) {
		if(this.size()<this.maxSize)
		{
			this.heap.push(data,priority);
		}
		else{
			throw new Error('PriorityQueue has maxSize!!!');
		}
	}

	shift() {
		if(this.size()===0)
			throw new Error('PriorityQueue is empty!!!')
		else{
			return this.heap.pop();
		}
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
