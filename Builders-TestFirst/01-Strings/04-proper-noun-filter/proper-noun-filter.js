function properNounFilter(str){

  //CASE: Is the first letter capitalized?
  if(str[0] !== str[0].toUpperCase()){ return false; }

  for(var i = 1; i < str.length; i++){
    if(str[i] === str[i].toUpperCase()){
      return false;
    }
  }

  return true;
}