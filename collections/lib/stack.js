'use strict';

var linkedList = require("./linkedList")
module.exports = Stack;

function Stack() {
    this._linkedList = new linkedList();
    this.iterator = this._linkedList.iterator();
}

Stack.prototype.push = function(item) {
    this._linkedList.insertAt(0, item);
};

Stack.prototype.peek = function() {
    return this._linkedList.peek(0);
};

Stack.prototype.pop = function() {
    return this._linkedList.getAndRemoveByIndex(0);
};


Stack.prototype.isEmpty = function() {
    return this._linkedList.isEmpty();
};

Stack.prototype.size = function() {
    return this._linkedList.size();
};

// Stack.prototype.iterator = function() {
//     return this._linkedList.iterator();
// }
