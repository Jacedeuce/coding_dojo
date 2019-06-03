class User:
    def __init__(self, username, email_address):
        self.name = username
        self.email = email_address
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
    
    def make_withdrawal(self, amount):
        self.account_balance -= amount

    def display_user_balance(self):
        print(self.account_balance)


Jason = User("jason", "jason@codingdojo.com")
Jacob = User("jake", "jake@codingdojo.com")
Brock = User("brock", "brock@codingdojo.com")

Jason.make_deposit(10).make_deposit(20).make_deposit(30).make_withdrawal(10).display_user_balance()
Jacob.make_deposit(10).make_deposit(20).make_withdrawal(10).make_withdrawal(20).display_user_balance()
Brock.make_deposit(10).make_withdrawal(10).make_withdrawal(20).make_withdrawal(30).display_user_balance()