/*
Write a function, `changeKeys`, which will take an array of musical keys and transpose those keys a specified number of steps.

In music the chromatic scale has the following notes `[A, A#, B, C, C#, D, D#, E, F, F#, G, G#]`.  A '#' is "sharp" notation.  A#, or A sharp, is in between A and B.  Your function `changeKeys()` should take an array of notes and a number between 1-9 as the number of steps. The function should return an array with all the notes in the array transposed up that many steps. 
*/

function changeKeys(arr, num){

    var keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  
    var output = [];
  
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < keys.length; j++){
        if(arr[i] === keys[j]){
          temp = j;
          console.log(temp);
          temp += num;
          console.log(temp);
          if(temp > 11){ 
            temp %= 11; 
            console.log(temp);
            temp -= 1;
          }
          console.log(temp);
          output.push(keys[temp]);
        }
      }
    }
  
    return output;
  }