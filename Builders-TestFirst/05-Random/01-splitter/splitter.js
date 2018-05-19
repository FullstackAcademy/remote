function splitter(str){

    var pair = "";
    var output = [];
  
    for(var i = 0; i < str.length; i++){
      pair += str[i];
  
      if(pair.length === 2){
        output.push(pair);
        pair = "";
      }
    }
  
    if(pair){
      pair+= "_";
      output.push(pair);
    }
  
    return output;
  }