'use strict';

module.exports = NodeIterator;

function NodeIterator(linkedList) {
    this._linkedList = linkedList;
    this._inited = false;
    this._currentNode = null;
    this._initialSize = -1;
}


NodeIterator.prototype._init = function() {
    if (this._inited) return;
    this._inited = true;
    this._currentNode = this._linkedList._root;
};

NodeIterator.prototype._throwIfChanged = function() {
    this._init();
    if (this._initialSize == -1) {
        this._initialSize = this._linkedList.size();
    }

    if (this._initialSize != this._linkedList.size())
        throw "Concurrent modification expection : The items have changed";
};

NodeIterator.prototype.hasNext = function() {
    this._throwIfChanged();
    return this._currentNode != null;
}

NodeIterator.prototype.next = function() {
    this._throwIfChanged();

    var value = this._currentNode.item;
    this._currentNode = this._currentNode.next;
    return value;
}