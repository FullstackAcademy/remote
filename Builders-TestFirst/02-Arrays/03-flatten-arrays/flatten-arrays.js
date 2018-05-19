function flatten(arr){

    var input = arr;
    var output = [];
  
    for(var i = 0; i < input.length; i++){
      if(typeof input[i] != "object"){
        output.push(input[i]);
      } else {
        console.log("Calling flatten(" + input[i] + ")");
        output = output.concat(flatten(input[i]));
        console.log("End method");
      }
      console.log("OUTPUT: " + output);
    }
    return output;
  }