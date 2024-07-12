function generateFibonacci(n) {
    let fibo=[1,1]
    for(let i=2; i<n; i++){
        fibo[i]=fibo[i-1] +fibo[i-2]
    }
  return fibo
  }
  console.log(generateFibonacci(5))
