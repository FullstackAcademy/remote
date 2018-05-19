function myFilter(arr, func){
  
    var output = [];
  
    for(var i = 0; i < arr.length; i++){
      if(func(arr[i]) == true){
        output.push(arr[i]);
      }
    }
    
    return output;
  }