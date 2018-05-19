## Compare Objects

Write a function that returns `true` if two objects contain the same data, or are equivalent, and `false` if not.

In order for the function to return true, ALL the properties and values that exist in object 1 must exist and be equal to those in object 2. Similarly, ALL the properties and values in object 2 must exist and be equal to those in object 1.

Note: You can assume that each object will only have one level, meaning there will be no nested objects.

#### Examples


- INPUT: `compareObjects({ name: 'giselle' }, { name: 'zeke' })`
- OUTPUT: `false`

- INPUT: `compareObjects({ name: 'nick' }, { name: 'nick' })`
- OUTPUT: `true`