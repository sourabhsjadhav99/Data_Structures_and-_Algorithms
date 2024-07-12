
function sumOfFirstN(n) {
  let sum = 0;
  if (n == 1) {
    sum = 1;
  } else {
    sum = n + sumOfFirstN(n - 1);
  }
  console.log(n, sum);
  return sum;
}
let n = 4
console.log(sumOfFirstN(n))