#### **Hint-1: Strings vs Numbers**

Each data type has their own intrinsic behavior. For instance, when you add two numbers together they will evaluate an arithmetic expression.  

`5 + 5; // evaluates to: 10`  

When you add two string values together, they combine or concatenate.  

`'Hello' + ' Fullstack' // evaluates to: 'Hello Fullstack'`  

You can also access individual indexes with String values, but you can't access individual indexes using [`'string'.charAt(1)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) or Bracket Notation with Number values since Numbers don't have indexes or access to the [String.prototype.charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) method.  

```js
  'Fullstack'[0] // returns 'F'
  123456[2] // undefined, you can't use bracket notation with number values
```


#### Hint-2: Number.prototype.toString

Number values do not have the ability to use bracket notation or the `'string'.charAt` method. If you want to use bracket notation with a Number value, you need to change the Number to a String. Look into using the [Number.prototype.toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) method to convert a Number into a String. When the Number is a String, you can use `'123456'.charAt` method or bracket notation.  

Here is a great Stack Overflow post on [converting Numbers to Strings](http://stackoverflow.com/questions/5765398/whats-the-best-way-to-convert-a-number-to-a-string-in-javascript).

#### **Hint-3: NaN**

`NaN` stands for Not-A-Number. If you are unfamiliar with `NaN` review the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).
