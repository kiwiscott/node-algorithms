'use strict';

var linkedList = require('./linkedList');
module.exports = DoublyLinkedNode; 

function DoublyLinkedNode(item){
    this.item = item; 
    this.next = null; 
    this.previous = null;
}