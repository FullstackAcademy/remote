#### Hint-1: Array or String?

All problems have different strategies and solutions. For the current problem, you can use an Array or a String to convert the string into camelCase. Choose the method you feel most comfortable with and come to your own solution.



#### Hint-2: String Approach

The string approach will take a few concepts you are familiar with such as String Iteration, possibly nested if statements, and more. Here are a few tips to keep in mind:  

* You don't have to manipulate the original string (the argument) with the underscore in it. It may be easier to create a new string.
* Loop over the original string. Add the current character found during iteration to the new string if it isn't an underscore.
* When an underscore is present, somehow (this is for you to figure out) make a note of it. Do not add the underscore to your new string. When the loop iterates to the next character, check and see if an underscore was previously found, if so, make the current character uppercase and add it to the new string you created.
* These are not all the steps, there are still a few to figure out!

#### Hint-3: Array Approach

Arrays have many methods that make manipulating strings convenient. Here are a few of them:  

* [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
* [pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
* [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
* [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
* [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
* and more...

With the Array approach, the first step is to create an array out of the initial string. Use the [Array.prototype.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) method, what arguments does it take? Can you split on the underscore?

Now that you have an array of words split on underscores, most of your work is done! Loop over each word in the array (except the first word), make the first character in the word uppercase, and the rest of the characters lowercase. Keep in mind the first word should be all lowercase.
