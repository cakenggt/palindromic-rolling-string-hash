/*jshint expr: true*/
/*jslint node: true */
/*jslint mocha: true*/
var expect = require('chai').expect;
var util = require('./index');
var RollingPalindrome = require('./RollingPalindrome');

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
