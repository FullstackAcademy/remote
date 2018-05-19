#### Hint 1 - Loops

One of the main advantages of using loops is to repeat a block of code a certain amount of times or until a condition is met. If you find yourself re-writing the same block of code more than once it may be time to use a loop.

Here are a few links that will teach you about loops if you are not familiar with them. 
- [Jumpstart Loops](https://learn.fullstackacademy.com/workshop/566f3decc30171030006c420/content/56a7110258a4550300d2c6da/text) 
- [Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
			
			
#### Hint 2 - String Iteration
		
It is common to loop over each individual character of a string.  You may be searching for a specific character such as a `"t"` or all the vowels of a string. [Run the code snippet below](https://repl.it/GlRq/1), notice each individual character is logged to the console.

```js
var piquant = 'piquant';
for (var i = 0; i &lt; piquant.length; i++) {
  console.log(piquant[i]);
}  
```

#### Hint 3 - Check Characters in a String

If you are trying to check for a specific character or character in a string, two useful methods are:

- ['example-string'.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- ['example-string'.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)	
			
[Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) are also great to use but they can be challenging to learn and master. The string methods above are a great and common approach.  As your coding skills advance, Regular Expressions are a great topic to study.

