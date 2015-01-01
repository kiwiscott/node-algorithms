'use strict';

var s1 = "ACTGACG";
var s2 = "TGACGAC";

function circular(string1, string2) {
    if (string1 == string2) {
        //the strings are the same
        return true;
    }
    return (string1.length == string2.length && (string1 + string1).indexOf(string2) != -1);
}

console.log('true : ' + circular("ACTGACG", "TGACGAC"));
console.log("true : " + circular("ABCDEFGHIJKLMONPQRSTUVWXYZ", "ONPQRSTUVWXYZABCDEFGHIJKLM"));
console.log("false : " + circular("AAAAAAA", "BABABA"));
console.log("false : " + circular("AA", "A"));
