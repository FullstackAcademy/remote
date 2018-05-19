function sumOfDigits(num){

    if(!num){ return 0; }
  
    var total = 0;
    var temp = num;
    var digit;
  
    temp += "";
  
    for(var i = 0; i < temp.length; i++){
      digit = temp[i];
      digit *= 1;
      total += digit;
    }
  
    return total;
  }