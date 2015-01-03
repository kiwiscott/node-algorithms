'use strict';

var DoublyLinkedNode = require("./doubleNode");
module.exports = LinkedList;

function LinkedList() {
    this._size = 0;
    this._root = null;
    this._last = null;
}

LinkedList.prototype.insertAt = function(index, item) {
    var next = null;
    if (index === 0) {
        this._insertNewRoot(item);
    }
    else if (index == -1) {
        this._insertNewLast(item);
    }
    else {
        var insertBefore = this.getNodeByIndex(index);
        if (insertBefore === null) throw "Node doesn't exist";

        var newNode = new DoublyLinkedNode(item);
        newNode.previous = insertBefore.previous;
        newNode.next = insertBefore;
        insertBefore.previous = newNode;
    }
    this._size++;
};

LinkedList.prototype.peek = function(index) {
    var node = this.getNodeByIndex(index);
    return node.item || null;
}

LinkedList.prototype.getAndRemoveByIndex = function(index) {
    var node = this.getNodeByIndex(index);
    if (node === null) return null;

    if (node.previous === null) {
        //New Root
        this._root = node.next;
        if (this._root != null) this._root.previous = null;
    }
    else {
        node.previous.next = node.next;
        if (node.next === null) {
            this._last = node.previous;
        }
        else {
            node.next.previous = node.previous;
        }
    }
    this._size--;
    return node.item;
}

LinkedList.prototype.isEmpty = function() {
    return this._size === 0;
}

LinkedList.prototype.size = function() {
    return this._size;
}

LinkedList.prototype.dump = function() {
    var current = this._root;
    var depth = 0;
    var s = "";
    while (current != null) {
        if (depth++ !== 0) {
            s += ' -> ';
        }
        s += current.item;
        current = current.next;
    }
    return s;
}

LinkedList.prototype.getNodeByIndex = function(index) {
    //the index could be greater then the number of items so lets save time
    if (index + 1 > this._size) {
        return null;
    }
    if (index == -1) return this._last;

    var currentIndex = 0;
    var currentNode = this._root;

    while (currentNode != null) {
        if (currentIndex == index) {
            return currentNode;
        }
        currentNode = currentNode.next;
        currentIndex++;
    }
}
LinkedList.prototype._insertNewLast = function(item) {
    var newNode = new DoublyLinkedNode(item);
    if (this._root === null) {
        this._insertNewRoot(item);
        return;
    }

    newNode.previous = this._last; //This is now the root
    newNode.previous.next = newNode;
    newNode.next = null;
    this._last = newNode;
}

LinkedList.prototype._insertNewRoot = function(item) {
    var newNode = new DoublyLinkedNode(item);
    newNode.previous = null; //This is now the root
    newNode.next = this._root;

    if (newNode.next === null) {
        this._last = newNode;
    }
    else {
        newNode.next.previous = newNode;
    }
    this._root = newNode;
}