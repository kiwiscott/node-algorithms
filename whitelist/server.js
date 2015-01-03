'use strict';

//node server.js ../algs4-data/largeW.txt ../algs4-data/largeT.txt
//node server.js ../algs4-data/tinyW.txt ../algs4-data/tinyT.txt

var WhiteList = require('./whitelist.js');
var fs = require("fs");
var async = require('async')

var whiteListFile = process.argv[2];
var valuesForTestingFile = process.argv[3];

var donedone = function (err, result) {
    console.log('Done Done')
        //console.log(err)
        //console.log(result)
};

function sortedAndDistinct(dataArray) {
    elapsed_time('start sort:' + dataArray.length)
    dataArray = dataArray.sort();
    elapsed_time('start distinct:' + dataArray.length)
    var sortedArray = [];
    var lastValue = 0;
    for (var i = 0; i < dataArray.length; i++) {
        var v = dataArray[i]
        if (v > lastValue) {
            lastValue = v;
            sortedArray.push(v);
        }
    }
    elapsed_time('done sort and distinct:' + sortedArray.length)
    return sortedArray;
}

function readFile(fileName, funcLine, funcEnd) {
    var input = fs.createReadStream(fileName);
    var dataArray = [];
    var remaining = '';

    input.on('data', function (data) {
        remaining += data;
        var index = remaining.indexOf('\n');
        var last = 0;
        while (index > -1) {
            var line = remaining.substring(last, index);
            last = index + 1;
            funcLine(line);
            index = remaining.indexOf('\n', last);
        }
        remaining = remaining.substring(last);
    });

    input.on('end', function (data) {
        funcEnd()
    });
}

var start = process.hrtime();

var elapsed_time = function (note) {
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
    start = process.hrtime(); // reset the timer
}



async.waterfall([ // [1]
    function (next) {
        elapsed_time('starting')
        next(null);
    },
    function (next) {
        var dataArray = [];
        readFile(whiteListFile,
            function (line) {
                dataArray.push(line);
            },
            function () {
                var arrayForWhite = sortedAndDistinct(dataArray);
                var wl = new WhiteList(dataArray);
                next(null, wl)
            }
        );
    },
    function (whitelist, next) {
        elapsed_time('got whitelist')
        next(null, whitelist);
    },
    function (whitelist, next) {
        var dataArray = [];
        readFile(valuesForTestingFile,
            function (line) {
                if (whitelist.isAllowed(line)) {
                    dataArray.push(line);
                }
            },
            function () {
                next(null, dataArray);
            }
        );
    },
    function (dataArray, next) {
        elapsed_time('got list of results')
        next(null, dataArray);
    },
    function (dataArray, next) {
        var invalidValues = sortedAndDistinct(dataArray);
        next(null, invalidValues);
    }
], donedone);