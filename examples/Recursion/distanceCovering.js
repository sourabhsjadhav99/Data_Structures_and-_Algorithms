let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function distanceCovering(currentPosition, targetPosition) {
  if (currentPosition === targetPosition) {
    return 1;
  }
  if (currentPosition > targetPosition) {
    return 0;
  }
  return (
    distanceCovering(currentPosition + 1, targetPosition) +
    distanceCovering(currentPosition + 2, targetPosition)
  );
}
let testCase = parseInt(readLine());
for (let i = 0; i < testCase; i++) {
  let distance = parseInt(readLine());
  console.log(distanceCovering(0, distance));
}
