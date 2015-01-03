'use strict';

module.exports = RandomIterator;

function RandomIterator(linkedList) {
    this._linkedList = linkedList;
    this._array = null;
    this._inited = false;
    this._initialSize = -1;
}

RandomIterator.prototype._init = function() {
    if (this._inited) return;
    this._inited = true;
    this._array = this._NodeToArray(this._linkedList._root);
    this._shuffleArray(this._array);
}
RandomIterator.prototype._NodeToArray = function(root) {
    var a = [];
    var current = root;
    while (current != null) {
        a.push(current.item);
        current = current.next;
    }
    return a;
}

RandomIterator.prototype._shuffleArray = function(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


RandomIterator.prototype._throwIfChanged = function() {
    this._init();
    if (this._initialSize == -1) {
        this._initialSize = this._linkedList.size();
    }

    if (this._initialSize != this._linkedList.size())
        throw "Concurrent modification expection : The items have changed";
};

RandomIterator.prototype.hasNext = function() {
    this._throwIfChanged();
    return this._array.length != 0;
}

RandomIterator.prototype.next = function() {
    this._throwIfChanged();
    
    var a = this._array.pop();
    return a;
}