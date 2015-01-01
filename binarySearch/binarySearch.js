function BinarySearch(array) {
    this.array = array;
    this.rolls = 0;
}

BinarySearch.prototype.indexOf = function(key) {
    var low = 0;
    var high = this.array.length - 1;
    this.rolls = 0;

    while (low <= high) {
        this.rolls = this.rolls + 1;

        var middle = Math.floor(low + (high - low) / 2);

        if (key < this.array[middle]) {
            high = middle - 1;
        }
        else if (key > this.array[middle]) {
            low = middle + 1;
        }
        else {
            return middle;
        }
    }

    return -1;
}

module.exports = BinarySearch;