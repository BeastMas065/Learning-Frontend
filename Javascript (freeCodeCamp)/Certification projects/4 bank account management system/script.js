class BankAccount {
    constructor(){
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount){
        if (amount>0){
            this.balance += amount;
            this.transactions.push({
                type: "deposit",
                amount: amount
            })

            return `Successfully deposited $${amount}. New balance: $${this.balance}`
        } else {
            return `Deposit amount must be greater than zero.`
        }
    }

    withdraw(amount){
        if (amount<this.balance && amount> 0){
            this.balance -= amount;
            this.transactions.push({
                type: "withdraw",
                amount: amount
            })
            return `Successfully withdrew $${amount}. New balance: $${this.balance}`
        } else {
            return `Insufficient balance or invalid amount.`
        }
    }

    checkBalance() {
        return `Current balance: $${this.balance}`
    }

    listAllDeposits(){
        let result = 'Deposits: '
        this.transactions.forEach(t=>{
            if (t.type ==="deposit") result += t.amount + ','
        })
        return result.slice(0, -1)
    }

    listAllWithdrawals(){
        let result = 'Withdrawals: '
        this.transactions.forEach(t=>{
            if (t.type ==="withdraw") result += t.amount + ','
        })
        return result.slice(0,-1)
    }
}

const myAccount = new BankAccount();
myAccount.deposit(500);
myAccount.deposit(1500);
myAccount.deposit(700);
myAccount.withdraw(700);
myAccount.withdraw(200);
console.log(myAccount.listAllDeposits()) 
