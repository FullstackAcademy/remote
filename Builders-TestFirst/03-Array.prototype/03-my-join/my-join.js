function myJoin(arr, deliminator){

    var output = "";
  
    if(deliminator == null){ deliminator = ","; }
  
    for(var i = 0; i < arr.length; i++){
      output += arr[i];
      if((i + 1) !== arr.length){
        output += deliminator;
      }
    }
  
    return output;
  }