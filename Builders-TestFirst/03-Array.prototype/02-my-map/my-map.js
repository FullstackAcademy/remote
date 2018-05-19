function myMap(arr, func){
  
    var output = [];
  
    for(var i = 0; i < arr.length; i++){
      output.push(func(arr[i]));
    }
  
    return output;
  }