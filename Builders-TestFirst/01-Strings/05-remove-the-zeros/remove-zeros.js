/*
Create a function, `removeZeros`, which strips out any zeros from a number, and returns the 'stripped' number. 

So, what happens if the input is zero? That is a special case! If the input is zero, the function should return NaN, which stands for 'Not a Number'. NaN is a special value that isn't a number, but still is of type 'number'!
*/

function removeZeros(num){

    //change num from a number to a string (turn it back into a number at the end)
    num += "";
  
    //Test variable to see if the number is zero
    var test = 0;
    var output = "";
  
    //If at any point in the loop there is a digit that is a non-zero number, we make test = 1. At the end of the loop, if test = 0 then there are no non-zero numbers; therefore, the number is zero, and we must return NaN (see below)
    for(var i = 0; i < num.length; i++){
      if(num[i] !== "0"){
        test = 1;
        output += num[i];
      }
    }
  
    if(test === 0){ return NaN; } else { output *= 1; return output; }
  }