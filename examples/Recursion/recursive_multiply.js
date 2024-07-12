let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function productOfDigits(num) {
  if (num < 10) {
    return num;
  }else{
    let digit = num % 10;
  let new_num = parseInt(num / 10);
  let product = digit * productOfDigits(new_num);
  return product;
  }  
}

function testCase(n) {
  if (n <= 0) {
    return;
  }
  let number = parseInt(readLine());
  console.log(productOfDigits(Math.abs(number)));

  testCase(n - 1);
}

let test_case = parseInt(readLine());
testCase(test_case);
