var miceAndCheese = function(reward1, reward2, k) {
    let arr=[];
  for(let i=0;i<reward1.length;i++){
      let x=reward1[i]-reward2[i];
      arr.push([x,i]);
  }
  arr.sort((a,b)=>b[0]-a[0]);
  let res=0;
  for(let i=0;i<reward1.length;i++){
      if(i<k) res+=reward1[arr[i][1]];
      else res+=reward2[arr[i][1]];    
  }
  return res;
};
// Example usage:
const reward1 = [1, 1, 3, 4];
const reward2 = [4, 4, 1, 1];
const k = 2;

console.log(maxPoints(reward1, reward2, k)); // Output: 15
