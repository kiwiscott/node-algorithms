'use strict';

var linkedList = require('./linkedList');
module.exports = Queue;

function Queue() {
    this._linkedList = new linkedList();
    this.iterator = this._linkedList.iterator();
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

Queue.prototype.size = function() {
    return this._linkedList.size();
}