function setPropsOnObj(o){
    o.x = 7;
    o.y = 8;
    o.onePlus = function(elem){ return elem + 1; };
  }

  function setPropsOnArr(o){
    o[0] = 5;
    o.hello = function(){ return "Hello!"; };
    o.full = "stack";
    o.twoTimes = function(elem){ return elem * 2; };
  }

  function functionObject(){
      return 'I am a function object, all functions are objects! Function can have their own properties too!';
  }

  function setPropsOnFunc(func){
    func.divideByTwo = function(elem){ return elem / 2; };
    func.year = "20??";
  }