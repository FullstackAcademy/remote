
function frequencyAnalysis(str){

    var obj = {};
  
    for(var i = 0; i < str.length; i++){
      key = str[i];
      
      if(obj[key]){
        obj[key]++;
      } else {
        obj[key] = 1;
      }
  
    }
    return obj;
  }