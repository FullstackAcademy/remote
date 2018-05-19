
#### Hint-1: Looping over objects:

When you want to loop through all the properties in an object, you can't use a `for` loop, like you would to loop over an array. Instead, you use a `for - in` loop. The `for - in` loop has different syntax than a regular for loop, as you’re not defining a numeric counter. Instead, a the loop will loop through all the enumerable properties of an object.

```js
var myDog = {name: 'Duke', breed: 'Labrador', color: 'Chocolate'};
for(var key in myDog) {
  console.log(key + ': ' + myDog[key]);
}
```


#### Hint-2: When to return `true`:

 It can be difficult to know when to return `true`, and when to return `false`. For this problem, you know that you can return `false` if: * There is a property in obj1 that isn't in obj2 * There is a property in obj2 that isn't in obj1 So, when do you return `true`? What if you return `true` if there is a property in obj1 that IS in obj2? Well, that may be problematic, because you need to make sure that ALL the properties in obj1 are in obj2. The trick is to return 'true' only if you don't return 'false'--meaning at the end of your program!
