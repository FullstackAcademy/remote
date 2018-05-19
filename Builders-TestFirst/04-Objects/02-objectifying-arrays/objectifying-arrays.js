function objectifier(arr){

    var obj = {};
    var key;
    var nestedKey;
  
    for(var i = 0; i < arr.length; i++){
      key = arr[i][0]
      obj[key] = {};
  
      for(var j = 0; j < arr[i][1].length; j+=2){
  
        nestedKey = arr[i][1][j];
        obj[key][nestedKey] = arr[i][1][j+1];
  
  
        //console.log("key: " + key);
        //console.log("nestedKey: " + nestedKey);
      }
    }
  
    //console.log(obj);
    return obj;
  }