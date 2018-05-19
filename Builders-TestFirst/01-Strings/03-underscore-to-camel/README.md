## Underscore to CamelCase


Write a function to convert a variable name from under_score format to camelCase. 


Make sure you support an unlimited number of underscores in the input!  You will not have to worry about white space in your input, only alphanumeric characters and underscores.


### Background Info


Different programming languages use different ways of formatting the names of their variables. For example, some separate words with underscores (i_am_a_function_name). Others, including JavaScript, separate the words inside a variable name by capitalizing the first letter of each new word. This convention is called camel case (iAmAFunctionName). Note that in camelcase, the first word is not capitalized!


### Examples

```
- INPUT: underToCamel("first_name");
- OUTPUT: "firstName"

- INPUT: underToCamel("my_income_tax_from_2015");
- OUTPUT: "myIncomeTaxFrom2015"

```