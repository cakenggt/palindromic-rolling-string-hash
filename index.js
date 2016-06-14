var RollingPalindrome = require('./RollingPalindrome');

function getLargestPalindrome(str){
  str += '*';
  //console.log('starting with', str);
  var largest = 0;
  var longest = '';
  //go through from the last char and adding on new ones
  //keep track of what the largest palindrome currently is
  //test the largest palindrome +1 and +2 chars for palindrome
  //comes in at +1
  //if is palindrome, then expand both sides by 1 to make it the new +2
  //if not palindrome, remove right and test again, then add right and remove left,
  //test again, then add on left
  //acdcab
  //abcdcbaa
  var rp = new RollingPalindrome(str.substr(str.length-1));
  for (var s = str.length-2; s >= 0; s--){
    //console.log('adding', str[s]);
    //console.log('string is', rp.getString());
    rp.addLeft(str[s]);//now +2
    if (rp.isPalindrome()){
      //console.log('first palindrome' + rp.getLength());
      largest = rp.getLength();
      longest = rp.getString();
      if (s+largest < str.length){
        //add char on to right side to make it +1
        rp.addRight(str[s+largest]);
      }
    }
    else{
      var last = rp.removeRight();//now +1
      if (rp.isPalindrome()){
        //console.log('second palindrome' + rp.getLength());
        largest = rp.getLength();
        longest = rp.getString();
      }
      rp.addRight(last);//now +1
    }
    if (rp.getLength() > largest + 1){
      rp.removeRight();
    }
    //console.log('at end rp is', rp.getString());
  }
  return [largest, longest];
}

exports.getLargestPalindrome = getLargestPalindrome;
