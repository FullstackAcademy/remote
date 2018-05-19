function totalPortfolioValue(stockTicker, portfolio){

    var total = 0;
  
    for(var i = 0; i < portfolio.length; i++){
      for(var j = 0; j < stockTicker.length; j++){
        if(portfolio[i][0] === stockTicker[j]){
          total += (portfolio[i][1] * stockTicker[j+1]);
        }
      }
    }
    return total;
  }