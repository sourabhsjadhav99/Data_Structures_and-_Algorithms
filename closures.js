function makeBankAccount() {
    let balance = 0;
    return {
      deposit: function(amount) {
        balance += amount;
      },
      withdraw: function(amount) {
        balance -= amount;
      },
      getBalance: function() {
        return balance;
      }
    };
  }
  
  const account = makeBankAccount();
  account.deposit(100);
  console.log(account.getBalance()); // 100
  account.withdraw(30);
  console.log(account.getBalance()); // 70
  