class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0 
    def make_deposit(self, amount):
        self.account_balance += amount
    def make_withdrawal(self, amount):
        self.account_balance -= amount
    def display_user_balance(self):
        print("{} Balance: ${}" .format(self.name, self.account_balance))
    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount

user1 = User("user1", "user1@email.com")
user2 = User("user2", "user2@email.com")
user3 = User("user3", "user3@email.com")

user1.make_deposit(50)
user1.make_deposit(100)
user1.make_deposit(150)

user1.display_user_balance()

user1.make_withdrawal(100)
user1.display_user_balance()

user2.make_deposit(100)
user2.make_deposit(500)

user2.make_withdrawal(50)
user2.make_withdrawal(130)

user2.display_user_balance()

user3.make_deposit(200)
user3.make_withdrawal(100)
user3.make_withdrawal(50)
user3.make_withdrawal(50)

user3.display_user_balance()

user2.transfer_money(user3, 200)

user2.display_user_balance()
user3.display_user_balance()