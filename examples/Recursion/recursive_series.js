let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function recursive_series(n) {
  if (n <= 9) {
    return n;
  } else {
    if (n % 2 != 0) {
      return recursive_series(n - 9);
    }
    return recursive_series(n - 10);
  }
}

let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let n = parseInt(readLine());
  console.log(recursive_series(n));
}
