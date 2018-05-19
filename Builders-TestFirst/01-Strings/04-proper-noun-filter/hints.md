#### Hint-1: String Iteration

It is common to loop over each individual character of a string. You may be searching for a specific character such as a `'t'` or all the vowels of a string. Run the code snippet below, notice each individual character is logged to the console.  

**Exercise:** Create an `if` statement that only `console.logs` the character `'t'` when `'t'` is the value of `piquant[i]`.

```js
var piquant = 'piquant';
for (var i = 0; i < piquant.length; i++) {
  console.log(piquant[i]);
}
```  

#### Hint-2: Character codes

In JavaScript (as well as most other languages), a character that is capitalized is a completely different character than its lowercase counterpart. This means that `'b' === 'B'` will evaluate to `false` . Knowing that they are different does not help us in finding out if one is a capital or lowercase letter.

However, each character has an associated constant UTF-16 character code. Since these codes are constant, we can lookup what range of numbers signify a capital letter. To find the character code, we can use the native `String.prototype.charCodeAt()` method. `.charCodeAt` takes an index as its first argument (default is 0) and will return the UTC-16 character code of the character at that index in the string. Let's find the range of capital letters.



```js
//These two calls help us to find  the range of character codes for capital letters
console.log('A'.charCodeAt(0)); //So capital letters start here
console.log('Z'.charCodeAt(0)); //And ends here
//More examples
console.log('Roger'.charCodeAt(4)); //Gives the character code for 'r'
console.log('Roger'.charCodeAt()); //Looks at index 0 by default
```
