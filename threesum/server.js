//node server.js ../algs4-data/1Kints.txt
//node server.js ../algs4-data/4Kints.txt
//node server.js ../algs4-data/2kints.txt

var fs = require("fs");
var filename = process.argv[2];
var start = process.hrtime();


console.log(filename)
elapsed_time('Reading File')
var ints = readInts(filename);
elapsed_time('Adding :' + ints.length)
var count = threesum(ints);
elapsed_time('Found : ' + count)

///////////////////////////////////////////////////////////////////////////////
function threesum(a) {
    var n = a.length;
    var cnt = 0;
    
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            for (var k = j + 1; k < n; k++) {
                if ((a[i] + a[j] + a[k]) === 0) {
                    cnt++
                }
            }
        }
    }
    return cnt;
}

function readInts(fileName) {
    var contents = fs.readFileSync(fileName).toString();
    
    var values = contents.split("\n");
    var result = [];
    for (var i = 0; i < values.length; i++) {
        result.push(parseInt(values[i].trim()));
    }
    return result;
}

function elapsed_time(note) {
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
    start = process.hrtime(); // reset the timer
}
