const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
	}

	push(data, priority) {
		
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
	}

	insertNode(node) {
		if(this.root===null)
		{
			this.root=node;
			this.parentNodes.push(node);
		}
		else{
			var flag=false;
			for(var i=0;i<this.parentNodes.length;i++)
			{
			//	console.log(this.parentNodes[i]);
				if((this.parentNodes[i].left===null))
				{
					this.parentNodes[i].appendChild(node);
					if((this.parentNodes[i].left!==null)&&(this.parentNodes[i].right!==null))
					{
						flag=true;
					}
					break;
				}
				else if((this.parentNodes[i].right===null))
				{
					this.parentNodes[i].appendChild(node);
					if((this.parentNodes[i].left!==null)&&(this.parentNodes[i].right!==null))
					{
						flag=true;
					}
					break;
				}
			}
			this.parentNodes.push(node);
			if(flag===true)
			{
				this.parentNodes.shift();
			}
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
