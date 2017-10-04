class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;	
		this.left=null;
		this.right=null;
		this.parent=null;
	}

	appendChild(node) {
		if(this.left===null)
		{
			this.left=node;
			node.parent=this;
		}
		else{
			if(this.right===null)
			{
				this.right=node;
				node.parent=this;
			}
		}		
	}

	removeChild(node) {
		if(node.parent===this)
		{
			if(this.left===node)
			{
				this.left=null;
				node.parent=null;
			}
			if(this.right===node)
			{
				this.right=null;
				node.parent=null;
			}
		}
		else
		{
			throw new Error(node);
		}
	}

	remove() {
		if(this.parent!==null)
		{
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if(this.parent)
		{
			var grandfather=this.parent.parent;
			var father=this.parent;
			var brother;
			var leftSon=this.left;
			var rightSon=this.right;
			if(grandfather)
			{
				if(this.parent===grandfather.left){
					grandfather.left=this;
				}else if(this.parent===grandfather.right){
					grandfather.right=this;
				}
			}
			if(this===father.left){
				brother=this.parent.right;
				this.right=brother;
				this.left=father;
			}else if(this===father.right){
				brother=this.parent.left;
				this.left=brother;
				this.right=father;
			}
			this.parent=grandfather;
			if(brother)
			{
				brother.parent=this;
			}
			father.parent=this;
			father.left=leftSon;
			father.right=rightSon;
			if(leftSon)
			{
				leftSon.parent=father;
			}
			if(rightSon)
			{
				rightSon.parent=father;
			}
		}
	}
}

module.exports = Node;
