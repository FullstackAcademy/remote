/*
Create the function `getMid` that accepts a single string and returns the middle character of the string. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/

function getMid(str){

  //OUTPUT: middle character(s)
  var output = "";

  //CASE: If input is not a string, turn it into a string
  str += "";

  //DEBUG: console.log("Word: " + str);
  //DEBUG: console.log("Length of word: " + str.length);

  if(str === ""){return "";}

  if(str.length === 1){return str;}

  if((str.length % 2) === 0){
    //DEBUG: console.log("Even");
    output += str[(str.length - 2) / 2];
    output += str[str.length / 2];
  } else {
    //DEBUG: console.log("Odd");
    output += str[(str.length - 1) / 2];
  }
 
  return output;
}