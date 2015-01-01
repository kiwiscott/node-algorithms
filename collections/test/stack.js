'use strict';

var collections =  require('./../index.js');
var should = require('should');

describe('Stack', function() {
    it('New should be empty', function(done) {
        var b = new collections.Stack();
        b.isEmpty().should.be.true;
        done();
    });

    it('New should have size 0', function(done) {
        var b = new collections.Stack();
        b.size().should.equal(0);
        done();
    });

    it('Adding a single item should make the size bigger', function(done) {
        var b = new collections.Stack();
        b.push("Bobby");
        b.size().should.equal(1);
        done();
    });

    it('After adding the first item it should no longer be expty', function(done) {
        var b = new collections.Stack();
        b.push("Bobby");
        b.isEmpty().should.be.false;
        done();
    });

    it('Pop should be LIFO Simple', function(done) {
        var b = new collections.Stack();

        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (var i = 0; i < a.length; i++) {
            b.push(a[i]);
        }

        var i = b.pop();
        i.should.eql(10);

        i = b.pop(); //9
        i = b.pop(); //8
        i = b.pop(); //7
        i.should.eql(7);

        done();
    });
    it('Pop should be LIFO Array', function(done) {
        var b = new collections.Stack();

        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (var i = 0; i < a.length; i++) {
            b.push(a[i]);
        }
        var aa = [];
        for (var i = 0; i < a.length; i++) {
            aa.push(b.pop());
        }
        a.reverse().should.eql(aa);
        done();
    });

    it('pop should be null when empty', function(done) {
        var b = new collections.Stack();

        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (var i = 0; i < a.length; i++) {
            b.push(a[i]);
        }
        for (var i = 0; i < a.length; i++) {
            b.pop();
        }
        //Stack is empty 
        b.isEmpty().should.be.true;
        (b.pop() == null).should.be.true;
        done();
    });

    it('Adding a 100 items should result in size 100', function(done) {
        var b = new collections.Stack();

        for (var i = 0; i < 100; i++) {
            b.push(i);
        }
        b.size().should.equal(100);
        done();
    });

    it('Size should decrement every time we remove', function(done) {
        var b = new collections.Stack();
        var total = 100;

        for (var i = 0; i < total; i++) {
            b.push(i);
        }

        var expectedSize = 100;
        for (var i = 0; i < total; i++) {
            expectedSize--;
            b.pop();
            b.size().should.equal(expectedSize);
        }
        done();
    });

    it('Peek should return the last value without popping it',
        function(done) {
            var s = new collections.Stack();
            s.push("Scott");
            s.push("Suzanne");

            var size = 2;
            var suzanne = s.peek();

            suzanne.should.equal("Suzanne");
            s.size().should.equal(size);
            done();
        });
});