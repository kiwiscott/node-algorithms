var exR1 = function(n) {
    if (n <= 0) return '';
    return exR1(n - 3) + n + exR1(n - 2) + n;
};

var mystery = function(a, b) {
    if (b == 0) return 1;
    if (b % 2 == 0) return mystery(a * a, Math.floor(b / 2));
    return mystery(a * a, Math.floor(b / 2)) * a;
}

/*
--
-- This demonstrates the power of saving the fib sequence
--

*/
function Fibby() {
    this.total = 0;
    this.totalNo = 0;
    this.saved = {};
};

Fibby.prototype.count = function() {
    return this.total;
}
Fibby.prototype.countNoSave = function() {
    return this.totalNo;
}
Fibby.prototype.fibNoSave = function(n) {
    this.totalNo++;

    if (n == 0) return 0;
    if (n == 1) return 1;

    return this.fibNoSave(n - 1) + this.fibNoSave(n - 2);
};

Fibby.prototype.fib = function(n) {
    if (typeof this.saved[n] !== 'undefined') {
        return this.saved[n];
    }

    this.total++;

    if (n == 0) return 0;
    if (n == 1) return 1;

    this.saved[n] = this.fib(n - 1) + this.fib(n - 2);
    return this.saved[n];
};

var cache = true;

for (var i = 0; i < 40; i++) {
    var f = new Fibby();
    var value = cache ? f.fib(i) : f.fibNoSave(i);
    var loops = cache ? f.count() : f.countNoSave();
    console.log(i + '\tr:' + loops + '\tv:' + value);
}