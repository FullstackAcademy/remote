## My Filter


Write a function `myFilter` that accepts an array and a callback function that is used to create a filtered array. Try to mirror the functionality of the native [.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) array method as closely as possible.


Just like the native .filter(), our `myFilter` function should not change the array passed in as an argument, but should rather return a filtered copy of that array.

```js
var arr = [1,2,3,4,5];

function isEven(num) {
  return num % 2 === 0;
}
```

- INPUT: `myFilter(arr, isEven);`
- OUTPUT: `[2,4]`

- INPUT: `myFilter(arr, function(num) {
  return !isEven(num);
});`

- OUTPUT: `[1,3,5];`

In the second example, an anonymous function is passed in that calls `isEven`, but then negates the result so that the function returns true when the num is odd! 