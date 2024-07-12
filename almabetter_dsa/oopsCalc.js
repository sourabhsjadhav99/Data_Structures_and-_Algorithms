const calculator = {
    add :function (a,b){
        return a+b
    }
  };
  
  const boundAdd = calculator.add.bind(calculator);
  