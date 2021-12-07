class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0 
    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self
    def display_user_balance(self):
        print("{} Balance: ${}" .format(self.name, self.account_balance))
    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        return self

user1 = User("user1", "user1@email.com")
user2 = User("user2", "user2@email.com")
user3 = User("user3", "user3@email.com")

user1.make_deposit(50).make_deposit(100).make_deposit(150).make_withdrawal(100).display_user_balance()

user2.make_deposit(100).make_deposit(500).make_withdrawal(50).make_withdrawal(130).display_user_balance()

user3.make_deposit(200).make_withdrawal(100).make_withdrawal(50).make_withdrawal(50).display_user_balance()

user2.transfer_money(user3, 200).display_user_balance()
user3.display_user_balance()