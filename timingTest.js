/*jshint esversion:6*/
var util = require('./index');
var fs = require('fs');
var RollingPalindrome = require('./RollingPalindrome');

var letters = 'abcdefghijklmnopqrstuvwxyz';

var csv = 'Total Timing Test\n';
var multiplier = 1000;
for (var x = 1; x < 201; x++){
  var str = createString(x*multiplier, 'aaaaaaaaaa');
  var start = Date.now();
  util.getLargestPalindrome(str);
  var end = Date.now();
  csv += `${x*multiplier},${end-start}\n`;
}
console.log('Done with total timing test');
csv += '\nPalindromic Rolling String Hash Timing Test\n';

var multiplier = 100;
var rh = new RollingPalindrome();
for (var x = 1; x < 21; x++){
  var start = Date.now();
  for (var y = 0; y < multiplier; y++){
    rh.addRight('a');
    rh.addLeft('a');
    var rem = rh.removeRight();
    rh.addRight(rem);
    rh.isPalindrome();
  }
  var end = Date.now();
  csv += `${x*multiplier},${end-start}\n`;
}

fs.writeFile('timingTestResult.csv', csv);


function createString(length, insertInMiddle, singleLetter){
  var choices = letters;
  if (singleLetter){
    choices = singleLetter;
  }
  var result = '';
  for (var i = 0; i < Math.floor(length/2); i++){
    result += choices[Math.floor(Math.random()*choices.length)];
  }
  result += insertInMiddle;
  for (var j = 0; j < Math.floor(length/2); j++){
    result += choices[Math.floor(Math.random()*choices.length)];
  }
  return result;
}
