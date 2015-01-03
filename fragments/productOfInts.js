/*
https://www.interviewcake.com/question/product-of-other-numbers

You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
Write a function get_products_of_all_ints_except_at_index() that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]
your function would return:

  [84, 12, 28, 21]
by calculating:

  [7*3*4, 1*3*4, 1*7*4, 1*7*3]
Do not use division in your solution.
*/
var values = randomInts(50, 1, 50);
console.log(values);

var r = get_products_of_all_ints_except_at_index(values)
console.log(r)

function get_products_of_all_ints_except_at_index(ints) {
  var length = ints.length;
  var end = new Array(length);
  var endpos = 0;

  for (var i = 0; i < ints.length; i++) {
    endpos = length - 1 - i;
    end[endpos] = ints[endpos] * (i == 0 ? 1 : end[endpos + 1]);
  }

  var value = 1;
  var endProduct = 0;
  var resultOfThisI = 0;
  for (var i = 0; i < ints.length; i++) {

    //get from the next one till the end
    endProduct = i == length - 1 ? 1 : end[i + 1];
    resultOfThisI = endProduct * value;
    //Set The Value of the next run
    value = value * (i == 0 ? 1 : ints[i]);
    //Swap the result
    end[i] = resultOfThisI;
  }
  return end;
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
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
