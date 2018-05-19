/*  THIS IS ONE WAY TO DO IT 

function myPush(arr, value){
  
    var output = arr;
  
    output.splice(output.length, 0, value);
  
    return output;
  }

*/

function myPush(arr, value){

  var output = [];

  for(var i = 0; i < arr.length; i++){
    output[i] = arr[i];
  }
  
  output[i] = value;

  return output;
}