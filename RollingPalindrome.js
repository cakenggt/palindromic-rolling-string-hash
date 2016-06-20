var RollingStringHash = require('rolling-string-hash');

function RollingPalindrome(str){
  //beg will always have more if odd number of chars
  this.beg = new RollingStringHash();
  //end is reversed
  this.end = new RollingStringHash();
  //example: abcdcba
  //beg: abcd
  //end: abc
  if (str){
    this.addRight(str);
  }
}

RollingPalindrome.prototype.addLeft = function(str){
  this.beg.addLeft(str);
  while(this.beg.getLength() - this.end.getLength() > 1){
    this.end.addRight(this.beg.removeRight());
  }
};

RollingPalindrome.prototype.addRight = function(str){
  for (var i = 0; i < str.length; i++){
    this.end.addLeft(str[i]);
  }
  while(this.end.getLength()-this.beg.getLength() > 0){
    this.beg.addRight(this.end.removeRight());
  }
};

RollingPalindrome.prototype.removeRight = function(x){
  if (x === undefined){
    x = 1;
  }
  //check if x is larger than size
  var result = '';
  if (x > this.end.getLength()){
    var remainder = x-this.end.getLength();
    result = this.end.removeLeft(this.end.getLength());
    this.beg.removeRight(remainder);
  }
  else{
    result = this.end.removeLeft(x);
  }
  while(this.beg.getLength() - this.end.getLength() > 1){
    this.end.addRight(this.beg.removeRight());
  }
  return result;
};

RollingPalindrome.prototype.removeLeft = function(x){
  if (x === undefined){
    x = 1;
  }
  //check if x is larger than size
  var result = '';
  if (x > this.beg.getLength()){
    var remainder = x-this.beg.getLength();
    result = this.beg.removeLeft(this.beg.getLength());
    this.end.removeRight(remainder);
  }
  else{
    result = this.beg.removeLeft(x);
  }
  while(this.end.getLength()-this.beg.getLength() > 0){
    this.beg.addRight(this.end.removeRight());
  }
  return result;
};

RollingPalindrome.prototype.isPalindrome = function(){
  var remainder = '';
  if (this.beg.getLength() > this.end.getLength()){
    remainder = this.beg.removeRight();
  }
  var ans = this.beg.equals(this.end) &&
    this.beg.getString() == this.end.getString();
  if (remainder){
    this.beg.addRight(remainder);
  }
  return ans;
};

RollingPalindrome.prototype.getLength = function(){
  return this.beg.getLength()+this.end.getLength();
};

RollingPalindrome.prototype.getString = function(){
  return this.beg.getString() + this.end.getString().split('').reverse().join('');
};

module.exports = RollingPalindrome;
