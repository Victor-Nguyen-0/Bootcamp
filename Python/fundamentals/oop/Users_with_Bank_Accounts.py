class BankAccount: 
    all_accounts = []

    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

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

    @classmethod
    def print_all_accounts(cls):
        for i in cls.all_accounts:
                i.display_account_info()

class User:
    def __init__(self, name):
        self.name = name
        self.account = BankAccount(0.2, 0)

    def make_deposit(self, amount):
        self.account.deposit(amount)
        print(f"{self.name} has deposited ${amount} and now has ${self.account.balance} in their account.")
        return self

    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        print(f"{self.name} has withdrawn ${amount} and now has ${self.account.balance} in their account.")
        return self

    def display_user_balance(self):
        print("{} Balance: ${}" .format(self.name, self.account.balance))

    def transfer_money(self, user, amount):
        self.account.withdraw(amount)
        user.account.deposit(amount)
        print(f"{User.name} has deposited {amount} into {user.name}'s account and now has ${User.account.balance} remaining.")
        print(f"{user.name} has received a ${amount} deposit from {User.name} and now has ${user.account.balance} in their account.")
        return self

user1 = User("user1")
user1.make_deposit(50).make_deposit(100).make_deposit(150).make_withdrawal(100).display_user_balance()