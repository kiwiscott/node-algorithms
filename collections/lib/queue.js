'use strict';

var linkedList = require('./linkedList');
var nodeIterator = require("./nodeIterator");
module.exports = Queue;

function Queue() {
    this._linkedList = new linkedList();
}
Queue.prototype.isEmpty = function() {
    return this._linkedList.isEmpty();
}

Queue.prototype.enqueue = function(item) {
    return this._linkedList.insertAt(-1, item);
}

Queue.prototype.dequeue = function() {
    return this._linkedList.getAndRemoveByIndex(0);
}
Queue.prototype.removeByIndex = function(index) {
    return this._linkedList.getAndRemoveByIndex(index);
}
Queue.prototype.iterator = function() {
    return new nodeIterator(this._linkedList);
}

Queue.prototype.size = function() {
    return this._linkedList.size();
}