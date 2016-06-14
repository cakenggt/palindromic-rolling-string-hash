# Palindromic Rolling String Hash
This package is a proof of concept for a O(n) solution to the longest palindromic substring problem using rolling hashes.

## Installation
Once you download this repo to your local machine, use the following command to install all dependencies:

`npm install`

## Tests
Run the following command to run the test suite, which includes run-time tests:

`npm test`

## Usage
The method to get the largest palindrome can be used by importing `index.js`.

```
var getLargestPalindrome = require('./index').getLargestPalindrome;
console.log(getLargestPalindrome('hellolleh'));
```

### getLargestPalindrome(string)
Takes in a string to find the largest palindromic substring. Returns an array where the first element is the length of the largest palindromic substring, and the second element is the longest substring.

## RollingPalindrome
RollingPalindrome exposes the RollingStringHash api, also adding the isPalindrome() method to find out if the currently included string is a palindrome. This works by having an internal structure of two RollingStringHashes, one reversed, for comparison.

### Constructor
To create a new RollingPalindrome, you can initialize it with no parameters or a string parameter which will represent the hash's initial contents.

`var rp = new RollingPalindrome('hello');`
### Methods
#### `addRight(string)`
Adds a string to the right side of the hash.
#### `addLeft(string)`
Adds a string to the left side of the hash.
#### `removeRight(number = 1)`
Removes a number of characters from the right side of the hash. If no number is specified, it removes one character. Returns the characters that were removed.
#### `removeLeft(number = 1)`
Removes a number of characters from the left side of the hash. If no number is specified, it removes one character. Returns the characters that were removed.
#### `getHash()`
Returns the JavaScript number representation of the hash value.
#### `getLength()`
Returns the length of the string being hashed.
#### `getString()`
Returns the string being hashed. Runs in O(string.length) time.
#### `isPalindrome()`
Used to see if the currently included string is a palindrome in O(1) time.
