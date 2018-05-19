/*
  Have the function `palindrome(str)` accept a string argument, and return the boolean `true` if the argument is a palindrome (meaning that the string is the same forward as it is backward). Otherwise, return the boolean `false`.
*/

function palindrome(str){

    //input: string
    var input = str;
  
    //variable that holds the reverse of the input string
    var reverse = "";
  
    for(var i = (input.length - 1); i >= 0; i--){
      reverse+= input[i];
    }
  
    //DEBUG: console.log("Input: " + str);
    //DEBUG: console.log("Reverse: " + reverse);
  
    for(i = 0; i < input.length; i++){
      if(input[i].toLowerCase() != reverse[i].toLowerCase()){
        return false;
      }
    }
  
  return true;
  }