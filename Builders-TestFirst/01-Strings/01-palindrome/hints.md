#### Hint-1: String Iteration

It is common to loop over each individual character of a string. You may be searching for a specific character such as a `'t'` or all the vowels of a string. Run the code snippet below, notice each individual character is logged to the console.  

**Exercise:** Create an `if` statement that only `console.logs` the character `'t'` when `'t'` is the value of `piquant[i]`.

```js
var piquant = 'piquant';
for (var i = 0; i < piquant.length; i++) {
  console.log(piquant[i]);
}
```  

#### Hint-2: Loop: Increment or Decrement?

Loops don't always have to increment. Loops can also decrement. Run the for-loop below, make a note of its condition and whether it is incrementing on every iteration or decrementing.


```js
var start = 10;
for(start; start > 0; start-=2) {
  console.log(start);
}
```

#### Hint-3: New String

It isn't necessary and is often frowned on to manipulate the original string you are trying to change (in this case, the argument string). If you had to reference the original string, but you already manipulated it, how would your program know what the original string value was? Furthermore, it is easier to create a new string rather than manipulate the original string.



#### Hint-4: Array

Using an Array is a great approach, but don't use the [reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) method!
