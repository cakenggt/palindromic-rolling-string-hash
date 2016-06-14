/*jshint expr: true*/
/*jslint node: true */
/*jslint mocha: true*/
var expect = require('chai').expect;
var util = require('./index');
var RollingPalindrome = require('./RollingPalindrome');

var letters = 'abcdefghijklmnopqrstuvwxyz';

describe('palindrome tests', function(){
  it('isPalindrome', function(){
    var rp = new RollingPalindrome('a');
    expect(rp.isPalindrome()).to.be.true;
    rp = new RollingPalindrome('aba');
    expect(rp.isPalindrome()).to.be.true;
    rp = new RollingPalindrome('abba');
    expect(rp.isPalindrome()).to.be.true;
  });
});
describe('adding and removing', function(){
  it('addRight', function(){
    var rp = new RollingPalindrome('a');
    rp.addRight('b');
    expect(rp.isPalindrome()).to.be.false;
    rp.addRight('a');
    expect(rp.isPalindrome()).to.be.true;
    rp.addRight('aba');
    expect(rp.isPalindrome()).to.be.true;
  });
  it('addLeft', function(){
    var rp = new RollingPalindrome('a');
    rp.addLeft('b');
    expect(rp.isPalindrome()).to.be.false;
    rp.addLeft('a');
    expect(rp.isPalindrome()).to.be.true;
    rp.addLeft('aba');
    expect(rp.isPalindrome()).to.be.true;
  });
  it('removeRight', function(){
    var rp = new RollingPalindrome('abbad');
    expect(rp.isPalindrome()).to.be.false;
    rp.removeRight();
    expect(rp.isPalindrome()).to.be.true;
  });
  it('removeLeft', function(){
    var rp = new RollingPalindrome('dabba');
    expect(rp.isPalindrome()).to.be.false;
    rp.removeLeft();
    expect(rp.isPalindrome()).to.be.true;
  });
  it('getString', function(){
    var rp = new RollingPalindrome('dabba');
    rp.addLeft('ads');
    expect(rp.getString()).to.equal('adsdabba');
  });
});
describe('getLargestPalindrome', function(){
  it('single', function(){
    expect(util.getLargestPalindrome('abcd')[0]).to.equal(1);
  });
  it('more than 1', function(){
    expect(util.getLargestPalindrome('aabc')[0]).to.equal(2);
    expect(util.getLargestPalindrome('abcdcbaa')[0]).to.equal(7);
    expect(util.getLargestPalindrome('abccbaa')[0]).to.equal(6);
    expect(util.getLargestPalindrome('bananas')[0]).to.equal(5);
  });
});
describe('time test', function(){
  it('small 1,000', function(){
    var str = createString(1000, 'aaaaaaaaaa');
    var start = Date.now();
    expect(util.getLargestPalindrome(str)[0]).to.be.gte(10);
    var end = Date.now();
    expect(end-start).to.be.lte(100);
  });
  it('medium 10,000', function(){
    var str = createString(10000, 'aaaaaaaaaa');
    var start = Date.now();
    expect(util.getLargestPalindrome(str)[0]).to.be.gte(10);
    var end = Date.now();
    expect(end-start).to.be.lte(1000);
  });
  it('large 100,000', function(){
    var str = createString(100000, 'aaaaaaaaaa');
    var start = Date.now();
    expect(util.getLargestPalindrome(str)[0]).to.be.gte(10);
    var end = Date.now();
    expect(end-start).to.be.lte(10000);
  });
});

function createString(length, insertInMiddle){
  var result = '';
  for (var i = 0; i < Math.floor(length/2); i++){
    result += letters[Math.floor(Math.random()*letters.length)];
  }
  result += insertInMiddle;
  for (var j = 0; j < Math.floor(length/2); j++){
    result += letters[Math.floor(Math.random()*letters.length)];
  }
  return result;
}
