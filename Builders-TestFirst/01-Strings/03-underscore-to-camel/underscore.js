/*
Write a function to convert a variable name from under_score format to camelCase. 


Make sure you support an unlimited number of underscores in the input!  You will not have to worry about white space in your input, only alphanumeric characters and underscores.
*/

function underToCamel(str){

  var input = str;
  var output = "";

  for(var i = 0; i < input.length; i++){
    if(input[i] != "_"){
      output += input[i];
    } else {
      i++;
      output += input[i].toUpperCase();
    }
  }
 
 return output;
}