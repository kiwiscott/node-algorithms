'use strict';

var randomIterator = require('./randomIterator');
var linkedList = require('./linkedList');
module.exports = Bag;

function Bag() {
    this._linkedList = new linkedList();
}
Bag.prototype.isEmpty = function() {
    return this._linkedList.isEmpty();
}

Bag.prototype.add = function(item) {
    return this._linkedList.insertAt(0, item);
}

Bag.prototype.size = function() {
    return this._linkedList.size();
}

///////////////
Bag.prototype.iterator = function() {
    return new randomIterator(this._linkedList);
};
