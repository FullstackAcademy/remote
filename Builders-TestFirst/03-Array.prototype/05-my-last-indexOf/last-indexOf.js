function myLastIndexOf(arr, value, index){
  
    if(!index){
      index = arr.length - 1;
    } else if(index >= arr.length){
      index = arr.length - 1;
    } else if(index < 0){
      if((index * -1) > (arr.length - 1)){
        index = "nah";
      } else {
        index *= -1;
        index = (arr.length - 1) - index;
      }
    }
  
    for(var i = index; i >= 0; i--){
      if(value === arr[i]){
        return i;
      }
    }
    return -1;
  }