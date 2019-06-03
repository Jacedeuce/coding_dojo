## I just wrote it with the methods prepared for chaining on the last assignment

class User:
    def __init__(self, username, email_address):
        self.name = username
        self.email = email_address
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(self.name, ":", self.account_balance)
        return self

    def transfer_money(self, to_user, amount):
        self.account_balance -= amount
        to_user.make_deposit(amount)
        self.display_user_balance()
        to_user.display_user_balance()
        return self

jason = User("jason", "jason@codingdojo.com")
jacob = User("jake", "jake@codingdojo.com")
brock = User("brock", "brock@codingdojo.com")

jason.make_deposit(10).make_deposit(20).make_deposit(30).make_withdrawal(10).display_user_balance()
jacob.make_deposit(10).make_deposit(20).make_withdrawal(10).make_withdrawal(20).display_user_balance()
brock.make_deposit(10).make_withdrawal(10).make_withdrawal(20).make_withdrawal(30).display_user_balance()

jason.transfer_money(brock, 50)