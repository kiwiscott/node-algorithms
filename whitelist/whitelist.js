var BinarySearch = require("../binarySearch");

function WhiteList(sortedArray) {
    this.sortedArray = sortedArray;
    this.whiteListArray = new BinarySearch(sortedArray);
}

//This just makes everything die and go slow
WhiteList.prototype.isAllowedBrutely = function(value) {
    if (value === null) {
        return false;
    }
    for (var i = 0; i < this.sortedArray.length; i++) {
        if(value == this.sortedArray[i])
        return true;
    }
    return false;
};

WhiteList.prototype.isAllowed = function(value) {
    if (value === null) {
        return false;
    }
    return this.whiteListArray.indexOf(value) != -1;
};

module.exports = WhiteList;