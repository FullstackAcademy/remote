function mySplice(arr, start, deleteCount, item){

    var output = [];
    var temp = [];
    var count = 0;
  
    if(start > arr.length){
      start = arr.length;
    } else if(start < 0){
      start = arr.length - (start * -1);
      if(start < 0){
        start = 0;
      }
    }
  
    //DEBUG: console.log("deleteCount: " + deleteCount);
  
    if(deleteCount === undefined || deleteCount > arr.length - start){
      //pop everything from arr into output until you reach start
      count = arr.length - start;
      for(i = 0; i < count; i++){
        output.push(arr.pop());
      }
      output.reverse();
    }
  
  
    //starting from the end of arr, pop elements out of arr and into temp until you reach start
    var count = arr.length - start;
    for(var i = 0; i < count; i++){
      temp.push(arr.pop());
    }
    count = 0;
  
      //push items into arr
      for(i = 3; i < arguments.length; i++){
        arr.push(arguments[i]);
      }
      
      //pop elements from temp into output 'deleteCount' number of times
      for(i = 0; i < deleteCount; i++){
        output.push(temp.pop());
      }
  
      //pop from temp into arr until temp is empty
      while(temp[0] !== undefined){
        arr.push(temp.pop());
      }
  
    //DEBUG: console.log("arr: " + arr);
    //DEBUG: console.log("temp: " + temp);
    //DEBUG: console.log("output: " + output);
  
    return output;
  }