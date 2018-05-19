#### Hint-1: Is it an array?

For this problem, it may be useful to know how to determine if a value is an array. Our first guess might be to use the [typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) to determine if a value has the type of 'array'. However, this will backfire because arrays have the type 'object', not 'array'!



```js
console.log(typeof [1,2,3,4,5])  //this will print 'object'
console.log(typeof {num: 5}) //this will also print 'object'
```



If we need a more specific answer, we can use the `Array.isArray()` method, and pass in the array we want to check. This function will return true if the arguments is an array, and false if not. Check out the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) or try it out below!



```js
function isItAnArray(value) {
  if(Array.isArray(value)) {
    console.log('value is an array!');
  }
  else {
    console.log('value is not an array.');
  }
}
```

#### Hint-2: Concatenating Arrays

Arrays have a built in method called `.concat()` which will concatenate two arrays together. Check out the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) and try it out in the repl above.
