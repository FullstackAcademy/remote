#### Hint-1: Multidimensional arrays

Here is an example of a multidimensional or "nested" array:

```js
var myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]]
];
```

How do you access an array inside an array? Array's hold values: `var arrOfValues = [1, function hello(){}, true, []]` . We can use bracket notation to access a value inside of an array, we pass the number index of the value we want to access inside of the bracket. Ex: `arrOfValues[2]` returns `true` since true is at the 2 index in `arrOfValues` .

Apply the concept of bracket notation to the code example below, this time there will be values inside of nested arrays.

```js
var nestedArray = [4,5, [1,3,[2]]];
// Using bracket notation, console.log 1 2 3 4 5 to the console.
var one = nestedArray[2][0]; // The first array holds another array at the 2nd index. The value 1 is located inside the 2nd Array at the 0th index.
var two = nestedArray[2][2][0]; // There are three arrays, The value 2 is located at the 0th index of the 3rd array. Each array is nested inside each other.
var three = nestedArray[2][1];
var four = nestedArray[0];
var five = nestedArray[1];
console.log(one,two,three,four,five);      
```
