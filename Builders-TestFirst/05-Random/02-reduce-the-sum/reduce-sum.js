function sumReduce(arr){

    var reducer = (accumulator, currentValue) => accumulator + currentValue;
  
    return arr.reduce(reducer, 50);
  }