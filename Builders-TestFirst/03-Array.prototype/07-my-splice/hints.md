#### Hint-1: The Arguments Object

The `arguments` object is a built-in array-like object corresponding to the arguments passed to a function. `arguments` is available as a function scoped variable in all functions and is refered to by the `arguments` keyword. It is referred to as "array-like" because although it is not truly an array, the object's keys are numbers that you can access using array-like bracket notation. The `arguments` object does NOT have access to array methods such as `.pop` and `.push` , however it does have a `.length` property. Check out the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)!

```js
function sumAllArgs() {
   var sum = 0;
   for(var i = 0; i < arguments.length; i++) {
     sum += arguments[i];
   }
   return sum;
 } 
 console.log(sumAllArgs(3, 4, 6, 7, 8, 9))
 //We can pass as many arguments as we want and they will be found in the arguments object
```


#### Hint-2: Optional Arguments

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
