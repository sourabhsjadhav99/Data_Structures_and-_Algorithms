let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
	idx++;
	return data[idx - 1].trim();
}
function binomial(n, r) {
	if (r === 0 || n === r) {
		return 1;
	}

	return binomial(n - 1, r - 1) + binomial(n - 1, r);
}

let t = parseInt(readLine());
while (t--) {
	let input = readLine().split(" ");
	let n = parseInt(input[0]);
	let r = parseInt(input[1]);
	console.log(binomial(n, r));
}