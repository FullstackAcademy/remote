## My Splice

Write a function `mySplice` that mirrors the behavior of JavaScript's [.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) array method. 

The `splice()` method changes the contents of an array by removing existing elements and/or adding new elements.  However,  unlike the built in method, mySplice will accept the array to operate on as its first parameter, rather than being invoked as a method on that array.  Unlike slice, splice modifies the original array!  Try and mirror the behavior of the native `.slice()` method exactly. 

`mySplice` can take an unlimited number of arguments. The first is start, the index at which to `start` changing the array. The second, `deleteCount` is optional and is the number of elements to take out of the array.  If `deleteCount` is omitted, all of the elements beginning with `start` index through the end of the array will be deleted. Every argument after `deleteCount` will be an element you should add to the array starting at the start index. 

Remember, `mySplice` returns the deleted elements, not the modified array!

Note: Do not use the native `.splice()` method in your own implementation!  

Examples

`var arr = [1,2,3,4]`

- INPUT: `mySplice(arr, 1)`    
- OUTPUT: `[2, 3, 4]  //arr is now [1]`

- INPUT: `mySplice(arr, 0, 0, 5, 6, 7)`
- OUTPUT: `[]  //arr is now [5, 6, 7, 1]`

- INPUT: `mySplice(arr, 1, 2, 'new')`
- OUTPUT: `[6, 7] //arr is now [5, 'new', 1]`