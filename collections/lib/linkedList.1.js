var DoublyLinkedNode = require("./doubleNode");
var NodeIterator = require("./nodeIterator");
module.exports = LinkedListOld;


function LinkedListOld() {
    this._size = 0;
    this._root = null;
    this._last = null;

    var externals = {
        insertAt: insertAt,
        isEmpty: isEmpty,
        size: size,
        getAndRemoveByIndex: getAndRemoveByIndex,
        dump: dump,
        peek: peek,
        iterator: function() {
            return new NodeIterator(this._root, function() {
                return this._size;
            });
        }
    }
    return externals;


    function insertAt(index, item) {
        var next = null;
        if (index === 0) {
            insertNewRoot(item);
        }
        else if (index == -1) {
            insertNewLast(item);
        }
        else {
            var insertBefore = getNodeByIndex(index);
            if (insertBefore === null) throw "Node doesn't exist";

            var newNode = new DoublyLinkedNode(item);
            newNode.previous = insertBefore.previous;
            newNode.next = insertBefore;
            insertBefore.previous = newNode;
        }
        this._size++;
    }

    function insertNewLast(item) {
        var newNode = new DoublyLinkedNode(item);
        if (this._root === null) {
            insertNewRoot(item);
            return;
        }

        newNode.previous = this._last; //This is now the root
        newNode.previous.next = newNode;
        newNode.next = null;
        this._last = newNode;
    }

    function insertNewRoot(item) {
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

    function peek(index) {
        var node = getNodeByIndex(index);
        return node.item || null;
    }


    function getAndRemoveByIndex(index) {
        var node = getNodeByIndex(index);
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

    function isEmpty() {
        return this._size === 0;
    }

    function size() {
        return this._size;
    }

    function dump() {
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

    function getNodeByIndex(index) {
        //the index could be greater then the number of items so lets save time
        if (index + 1 > size) {
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
}