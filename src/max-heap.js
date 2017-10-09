const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
		this.count=0;
	}

	push(data, priority) {
		var x=new Node(data,priority);
		this.insertNode(x);
		this.shiftNodeUp(x);
	}

	pop() {
		if(!this.isEmpty())
		{
			var res=this.detachRoot();
			this.restoreRootFromLastInsertedNode(res);
			this.shiftNodeDown(this.root);
			return res.data;
		}
	}

	detachRoot() {
		if(this.root)
		{
			var res=this.root;
			if(this.parentNodes[0]===this.root)
			{
				this.parentNodes.shift();
			}
			this.root=null;
			this.count--;
			return res;
		}
	}

	restoreRootFromLastInsertedNode(detached) {
		if (this.parentNodes.length!==1&&this.parentNodes.length!==0) {
			var last = this.parentNodes.pop();
			var fleft=false;
			var fright=false;
			if(detached.right===last)
				fright=true;
			if(detached.left===last)
				fleft=true;
			this.root=last;
			if (last.parent === detached) {
					this.parentNodes.unshift(last);
			}
			last.remove();
			if(!fleft)
			{
				last.appendChild(detached.left);
			}
			if(!fright)
			{
				last.appendChild(detached.right);
			}
		 }
		 if(this.parentNodes.length===1)
		 {
			 var tmp=this.parentNodes.pop();
			 tmp.parent=null;
			 this.root=tmp;
		 }
	}

	size() {
		return this.count;
	}

	isEmpty() {
		if((this.root===null))
		{
			return true;
		}
		else
			return false;
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
		this.count=0;
	}

	insertNode(node) {
		if (this.root){
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
			if (this.parentNodes[0].right){
				this.parentNodes.shift();
			}
		}
		else
		{
			this.root = node;
			this.parentNodes.push(node);
		}
		this.count++;
	}

	shiftNodeUp(node) {
		if((node.parent)&&(node.priority>node.parent.priority))
		{
			if(this.root===node.parent)
				this.root=node;
			var i=this.parentNodes.indexOf(node);
			var j=this.parentNodes.indexOf(node.parent);
			if(i!==(-1))
			{
				if(j!==(-1))
				{
					this.parentNodes[i]=node.parent;
					this.parentNodes[j]=node;
				}
				else
				{
					this.parentNodes[i]=node.parent;
				}
			}
			node.swapWithParent();
			this.shiftNodeUp(node);
		}
	}

	shiftNodeDown(node) {
		if(node)
		{
			if(((node.right)&&(node.priority<node.right.priority))||((node.left)&&(node.priority<node.left.priority)))
			{
				var max;
				if(node.right && node.left)
				{
					if(node.right.priority<node.left.priority)
					{
						max=node.left;
					}
					else
					{
						max=node.right;
					}
				}
				else{
					if(node.left)
					{
						max=node.left;
					}
					else
					{
						max=node.right;
					}

				}
				var i=this.parentNodes.indexOf(node);
				var j=this.parentNodes.indexOf(max);
				if(j!==(-1))
				{
					if(i!==(-1))
					{
						this.parentNodes[i]=max;
						this.parentNodes[j]=node;
					}
					else
					{
						this.parentNodes[j]=node;
					}
				}
				if(node===this.root)
				{
					this.root=max;
				}
				max.swapWithParent();
				this.shiftNodeDown(node);
			}
		}
	}
}

module.exports = MaxHeap;
