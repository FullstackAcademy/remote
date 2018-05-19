function strFrequency(arr){

    var reducer = (accumulator, currentValue) => accumulator + " " + currentValue;
  
    var str = arr.reduce(reducer);
    str+= " ";
  
    console.log(str);
  
    var obj = {};
    var key = "";
  
    for(var i = 0; i < str.length; i++){
  
      if(str[i] === " "){
        console.log("key: " + key);
        if(obj[key]){ 
          obj[key]++; 
        } else { 
          obj[key] = 1; 
        }
        key = "";
      } else {
        key += str[i];
      }
    }
  
    return obj;
  }