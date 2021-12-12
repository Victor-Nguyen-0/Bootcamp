class BankAccount: 
    all_accounts = []

    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited {amount}. Account balance is now ${self.balance}.")
        return self

    def withdraw(self, amount):
        if (amount <= self.balance):
            self.balance -= amount
            print(f"Withdrew {amount}. Account balance is now ${self.balance}.")
        else:
            print("Insufficient funds: Charging a $5 fee.")
            self.balance -= 5 
            print(f"Account charged. Account balance is now ${self.balance}.")
        return self

    def display_account_info(self):
        print(f"Balance: ${self.balance}")
        return f"{self.balance}"

    def yield_interest(self):
        if (self.balance > 0):
            self.balance += self.balance * self.int_rate
        else:
            print("Account is not in good standing. Cannot add interest.")
        return self

    def transfer_money(self, user, amount):
        self.withdraw(amount)
        user.deposit(amount)
        self.display_account_info()
        user.display_account_info()
        return self

    @classmethod
    def print_all_accounts(cls):
        for i in cls.all_accounts:
                i.display_account_info()

class User:
    def __init__(self, name):
        self.name = name
        self.account = {
            "checking" : BankAccount(0.02, 0),
            "savings" : BankAccount(0.05,0)
        }

    def display_user_balance(self):
        print(f"User: {self.name}; Checking Balance: ${self.account['checking'].display_account_info()}")
        print(f"User: {self.name}; Savings Balance: ${self.account['savings'].display_account_info()}")

user1 = User("user1")
user1.account["savings"].deposit(100)
user1.display_user_balance()

user1.account['savings'].transfer_money(user1.account['checking'], 100)