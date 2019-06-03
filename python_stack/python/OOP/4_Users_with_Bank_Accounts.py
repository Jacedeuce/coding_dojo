class BankAccount:
    def __init__(self, interest_rate, balance = 0):
        self.int_rate = interest_rate
        self.bal = balance

    def deposit(self, amount):
        self.bal += amount
        return self

    def withdraw(self, amount):
        self.bal -= amount
        return self

    def display_account_info(self):
        print("Balance:", self.bal)
        print("Interest Rate:", self.int_rate)
        return self

    def yield_interest(self):
        self.bal = self.bal + self.bal * self.int_rate
        return self

class User:
    def __init__(self, username, email_address):
        self.name = username
        self.email = email_address
        self.account = BankAccount(interest_rate=0.02, balance=0)

    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self
    
    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self

    def display_user_balance(self):
        print(self.name, "Account Balance:", self.account.bal)
        return self

    def transfer_money(self, to_user, amount):
        self.account.withdraw(amount)
        to_user.account.deposit(amount)
        self.display_user_balance()
        to_user.display_user_balance()
        return self


jason = User("jason", "jason@codingdojo.com")

jason.display_user_balance().make_deposit(50).make_withdrawal(25).account.yield_interest().display_account_info()