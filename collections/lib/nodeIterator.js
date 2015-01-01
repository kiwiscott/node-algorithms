'use strict';

module.exports = NodeIterator;

function NodeIterator(root, funcSize) {
    this._currentNode = root;
    this._initialSize = -1;
    this._sizeFunc = funcSize;
}

NodeIterator.prototype._throwIfChanged = function() {
    if (this._initialSize == -1) {
        this._initialSize = this._sizeFunc();
    }

    if (this._initialSize != this._sizeFunc())
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