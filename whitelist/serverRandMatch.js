//node serverRandMatch.js 10


'use strict';
var WhiteList = require('./whitelist.js');


var timesToRunTest = process.argv[2];

var resultHolder = {};
for (var i = 0; i < timesToRunTest; i++) {
    testPattern(resultHolder);
}
console.log(resultHolder);

function positiveSixDigitValue() {
    return Math.floor(Math.random() * 1000000)
}

function randomArray(experimentSize) {
    var data = [];
    for (var i = 0; i < experimentSize; i++) {
        data.push(positiveSixDigitValue());
    }
    return sortedAndDistinct(data);
}

function sortedAndDistinct(dataArray) {
    dataArray = dataArray.sort();
    var sortedArray = [];
    var lastValue = 0;
    for (var i = 0; i < dataArray.length; i++) {
        var v = dataArray[i]
        if (v > lastValue) {
            lastValue = v;
            sortedArray.push(v);
        }
    }
    return sortedArray;
}

function testPattern(results) {

    for (var i = 3; i <= 6; i++) {
        var experimentSize = Math.pow(10, i);
        var whiteListData = randomArray(experimentSize);
        var whiteList = new WhiteList(whiteListData);

        var count = 0;
        for (var j = 0; j < experimentSize; j++) {
            if (whiteList.isAllowed(positiveSixDigitValue())) {
                count++;
            }
        }

        var key = '10^' + i;
        if (!results.hasOwnProperty(key))
            results[key] = {
                experimentSize: experimentSize,
                percentage: []
            };
        results[key].percentage.push((100 * (count / experimentSize)).toFixed(3));
    }
}
