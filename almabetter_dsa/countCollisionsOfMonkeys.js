var monkeyMove = function (n) {
    const mod = 1000000007n;
    let ans = 1n;
    let x = 2n;
    let N = n;
    while (N > 0) {
        if (N % 2 === 1) {
            ans = (ans * x) % mod;
        }
        x = (x * x) % mod;
        N = Math.floor(N / 2);
    }
    return Number((ans - 2n + mod) % mod);
};