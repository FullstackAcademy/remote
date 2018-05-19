#### Hint-1: Optional Arguments

Within a JavaScript function, it's possible to have optional arguments. In fact, they all can be! Let's say that the function has 3 named parameters. The first one is necessary for the function's purpose. The next two are optional. Let's take a look at what that would look like.



```js
function sumUp(num1, num2, num3) {
  if(!num1) {
    return 'num1 needs to be defined!';
  }
  var sum = num1;
  //We need to use if statements to see if num2 and num3 are defined before we add them to the sum
  if(num2) {
    sum += num2;
  }
  if(num3) {
    sum += num3;
  }
  return sum;
}
console.log(sumUp())
console.log(sumUp(5))
console.log(sumUp(5,6))
console.log(sumUp(5,6,7))
//num2 and num3 are optional arguments but they alter the return value
//num1 is required to return a number;
```
#### Hint-2: Copying vs modifying an array

It's important to know when you are modifying an array and when you are instead creating a new array. Some problems may ask you to NOT alter the array passed in. When you see this, it means that you will need to make a copy of the array passed in. To understand more fully the difference, study the code below.

```js
function add2toCopy(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    newArr[i] = arr[i]+2;
  }
  return newArr;
}
function add2(arr) {
  for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i]+2;
  }
  return arr;
}
var originalArray = [1,2,3,4,5];
var arrAdd2 = add2(originalArray);
console.log(arrAdd2);
console.log(originalArray);
//Look! originalArray and arrAdd2 are the same!
var arrAdd2 = add2toCopy(originalArray);
console.log(arrAdd2);
console.log(originalArray);
//In this example, originalArray was not altered, only arrAdd2\. 
```

Keep this in mind when deciding which built-in methods to use also. Some methods alter the array they are working on, such as `.push` , `.pop` , and `sort` . On the other hand `slice` , `concat` , and `join` do not alter the array and instead return a new array or other output.
