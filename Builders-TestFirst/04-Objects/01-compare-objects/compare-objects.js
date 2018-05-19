function compareObjects(a, b){

    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    var aValue = Object.values(a);
    var bValue = Object.values(b);
  
    for(var i = 0; i < aProps.length; i++){
      if(aProps[i] !== bProps[i]){
        return false;
      }

      if(aValue[i] !== bValue[i]){
        return false;
      }
    }

    return true;
  }