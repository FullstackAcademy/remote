## My Map

Write a function myMap that accepts an array and a callback function that is used to create a mapped array. Try to mirror the functionality of the native [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) array method as closely as possible.

Just like the native .map(), our `myMap` function should not change the array passed in as an argument, but should rather return a mapped copy of that array.


#### Examples: 

```js
var arr = [1,2,3];

function double(num) {
  return num * 2;
}
```

- INPUT: `myMap(arr, double);`
- OUTPUT: `[2,4,6]`

- INPUT: `myMap(arr, function(num) {
  return num.toString();
});`

- OUTPUT: `[1,3,5];`

In the second example, an anonymous function is passed in that returns a stringed version of the number element.