#### Hint-1: Adding elements to an Array

When you think 'add an element to an array', you will probably immediately thing to use [.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) . However, in this problem, you can't use `.push()` ! So you must find a different way to add elements to an array. Remember that since arrays are objects, they are mutable and so we can modify array elements individually. Study the code block below to see how you can modify elements in the array.

```js
var arr = [1,2,3,4,5];
arr[2] = 0;
console.log(arr) //arr is now [1,2,0,4,5];
```  