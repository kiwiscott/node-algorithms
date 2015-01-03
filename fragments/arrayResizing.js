'use strict';

function ResizingArrayStack(length) {
    this._a = new Array(length);
    this._usedLength = 0;
}
ResizingArrayStack.prototype._resize = function(length) {
    console.log('Resizing To ' + length)
    var temp = new Array(length);
    for (var i = 0; i < this._usedLength; i++) {
        temp[i] = this._a[i];
    }
    this._a = temp;
}

ResizingArrayStack.prototype.push = function(item) {
    if (this._usedLength === this._a.length)
        this._resize(2 * this._usedLength);

    this._a[this._usedLength++] = item;
}
ResizingArrayStack.prototype.pop = function() {
    var item = this._a[--this._usedLength];
    this._a[this._usedLength] = null;

    if (this._usedLength > 0 && this._usedLength == this._a.length / 4)
        this._resize(this._a.length / 2)
    return item;
}


var ar = new ResizingArrayStack(2);
for (var i = 0; i < 100; i++) {
    ar.push(i);
}

for (var i = 0; i < 100; i++) {
    ar.pop();
}