var minNonZeroProduct = function(p) {
    const MOD = 10**9 + 7;
  
  const maxNum = BigInt(2 ** p - 1);
  const result = BigInt(maxNum - 1) ** (maxNum / BigInt(2)) * maxNum % BigInt(MOD);
  
  return result.toString();
};