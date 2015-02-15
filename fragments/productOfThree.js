/*
https://www.interviewcake.com/question/highest-product-of-3

Does your function work with negative numbers? If array_of_ints is [−10,−10,1,3,2] 
we should return 300 (which we get by taking −10∗−10∗3).
*/
var lowest = createArrayDefinedSize(3, 0);
var highest = createArrayDefinedSize(3, 0);
var values = randomInts(50, -50, 50);
var lowest0 = 0;
var highest0 = 0;

product_of_three(values);

values.sort();
console.log(values);
console.log(lowest);
console.log(highest);

function product_of_three(ints) {
    var length = ints.length;

    for (var i = 0; i < ints.length; i++) {
        var v = ints[i];

        if (v < lowest0) {
            CheckPushIntoLowest(v);
        }
        else if (v > highest0) {
            CheckPushIntoHighest(v);
        }
    }
}

function createArrayDefinedSize(size, value) {
    var a = [];
    for (var i = 0; i < size; i++) {
        a[i] = value;
    }
    return a;
}

function CheckPushIntoLowest(value) {
    var tempValue = 0;
    for (var i = lowest.length; i--;) {
        if (value < lowest[i]) {
            tempValue = lowest[i];
            lowest[i] = value;
            value = tempValue;
        }
    }
    lowest0 = lowest[0];
}

function CheckPushIntoHighest(value) {
    for (var i = highest.length; i--;) {
        if (value > highest[i]) {
            tempValue = highest[i];
            highest[i] = value;
            value = tempValue;
        }
    }

    highest0 = highest[0]
}


//////////////////////////////////////////////////////////////////////////




function randomInts(n, min, max) {
    var result = [];
    for (var i = 0; i < n; i++) {
        result.push(getRandomChange(min, max));
    }
    return result;
}

function getRandomChange(min, max) {
    return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}
