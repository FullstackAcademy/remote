#### **Hint-1: Objects and Object Properties**

Understanding Objects is the key to becoming an expert JavaScript programmer. Objects are an unordered collection of properties. Each property consisting of a key and associated value pair.

There are two ways of accessing property values in JavaScript: dot notation and bracket notation. Dot notation requires that you know the exact key name of the property you are trying to access. For example:

```js
var myObj = {name: 'Scott'};
console.log(myObj.name); //this will print 'Scott'
var key = "name";
console.log(myObj.key) //this will be undefined
```
The second way is bracket notation. Bracket notation allows you to evaluate the expression inside the brackets to a string, and use that as your property key. This allows you to a) use variables names to access properties and b) access properties whose key includes white space, special characters, or begins with a number.

```js
var myObj = {name: 'Scott'};
var key = "name";
console.log(myObj[key]) //now we can get the value 'Scott'
```