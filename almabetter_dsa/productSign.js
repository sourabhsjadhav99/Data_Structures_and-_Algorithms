function productSign(num1, num2, num3) {
    let product =num1*num2*num3
    if(product>0){
        return 1
    }else if(product<0){
        return -1
    }else{
        return 0
    }
  }