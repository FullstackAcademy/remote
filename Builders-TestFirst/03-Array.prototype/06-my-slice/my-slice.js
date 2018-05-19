
function mySlice(arr, beg, end){

    var output = [];
  
    if(beg < 0){
      beg = arr.length - (beg * -1);
      console.log(beg);
      end = arr.length;
    } else if(beg >= arr.length){
      return [];
    }
  
    if(end === undefined){ 
      end = arr.length; 
    } else if(end > arr.length){
      end = arr.length;
    } else if(end < 0){
      end = arr.length - (end * -1);
    }
  
    console.log(beg);
    console.log(end);
  
    for(var i = beg; i < end; i++){
      output.push(arr[i]);
    }
  
    return output;
  }