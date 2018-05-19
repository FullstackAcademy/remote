function evenOdd(arr){

    var even = [];
    var odd = [];
    var output = [];
  
    for(var i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0){
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
    output.push(even);
    output.push(odd);
  
    return output;
  }