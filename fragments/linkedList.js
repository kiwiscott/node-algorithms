var fs = require('fs');

var inValue = fs.readFileSync('/dev/stdin').toString();
var x = inValue.split(" ");

var root = new Node(x[0]);
var current = root;
for (var i = 1; i < x.length; i++) {
    var newNode = new Node(x[i], current);
    current.next = newNode;
    current = newNode;
}




dumpTree(root);

//////////////////////////////////////////////////
function Node(item) {
    var m = this;
    m.item = item;
    m.nextNode = null;

    var exports = {
        next: m.nextNode,
        item: m.item
    };

    return exports;
}

function repeat(value, num) {

    return new Array(num + 1).join(value);
}


function dumpTree(node) {
    var current = node;
    var depth = 0;
    var s = "";
    while (current != null) {
        if (depth++ != 0) {
            s += ' -> ';
        }
        s += current.item;
        current = current.next;
    }

    console.log(s);
}