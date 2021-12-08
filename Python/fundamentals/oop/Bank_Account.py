class BankAccount: 
    # balance = 0
    # all_accounts = []
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
        # BankAccount.all_accounts.append(self)
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        if (amount < self.balance):
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee.")
            self.balance -= 5 
        return self
    def display_account_info(self):
        print(f"Balance: ${self.balance}")
        return self
    def yield_interest(self):
        if (self.balance > 0):
            self.balance += self.balance * self.int_rate
        else:
            print("Account is not in good standing. Cannot add interest.")
        return self
    # @classmethod
    # def all_accounts(cls):
    #     account_status = []
    #     for account in cls.all_accounts:
    #             account_status.append(cls)
    #     print(account_status)

account1 = BankAccount(0.05, 0)
account2 = BankAccount(0.01, 1000)

account1.deposit(100).deposit(50).deposit(200).withdraw(150).yield_interest().display_account_info()
account2.deposit(500).deposit(800).withdraw(100).withdraw(500).withdraw(1000).withdraw(50).yield_interest().display_account_info()

# BankAccount.all_accounts()
