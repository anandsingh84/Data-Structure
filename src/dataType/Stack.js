
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(){
    return this.top;
  }

  push(value){
    const newNode = new Node(value);
    if(this.length === 0){
      this.top = newNode;
      this.bottom = newNode;
    }else{
      const holdingNode = this.top;      
      this.top = newNode;
      this.top.next = holdingNode;      
    }
    this.length++;
    return this;
  }

  pop(){
    if(this.length === 0)
      return null;
    /** OR  */
    if(!this.top) return null;

    if(this.top === this.bottom)
      this.bottom = null;

    // const holdingNode = this.top;
    this.top = this.top.next;
    this.length--;

    return this;

  }


}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

