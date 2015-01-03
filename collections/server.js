var collections = require("./index.js");


var b = new collections.Bag();
b.add(1);
b.add(2);
b.add(3);
var count = 0;

var i = b.iterator;
while (i.hasNext()) {
    count++;
    i.next();
}


// var s = ""; 
// var stack = new collections.Stack();
// stack.push(0);
// stack.push(1);
// stack.push(2);
// s+=  stack.pop() + " ";
// stack.push(3);
// stack.push(4);
// stack.push(5);
// s+=  stack.pop() + " ";
// stack.push(6);
// s+=  stack.pop() + " ";
// stack.push(7);
// s+=  stack.pop() + " ";
// s+=  stack.pop() + " ";
// stack.push(8);
// s+=  stack.pop() + " ";
// stack.push(9);
// s+=  stack.pop() + " ";
// s+=  stack.pop() + " ";
// s+=  stack.pop() + " ";
// s+=  stack.pop() + " ";

// console.log(s);