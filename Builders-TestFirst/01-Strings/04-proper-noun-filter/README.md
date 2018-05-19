## Proper Noun Filter


Write a function, `properNounFilter`, thate determines whether the `string` argument is a proper noun. 


A word is considered a proper noun if only the first letter is capitalized. If the argument is a proper noun, `properNounFilter` should return `true`.  It should return `false` if the word isn't a proper noun, if the word is mixed case, or if it is all caps.

#### Examples


- INPUT: `properNounFilter('coffee');`
- OUTPUT: `false`

- INPUT: `properNounFilter('Einstein');`
- OUTPUT: `true`

- INPUT: `properNounFilter('ApoLLo');`
- OUTPUT: `false`