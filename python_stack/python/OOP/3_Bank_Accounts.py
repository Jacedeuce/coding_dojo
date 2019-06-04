class BankAccount:
    def __init__(self, account_name, interest_rate, balance = 0):
        self.name = account_name
        self.int_rate = interest_rate
        self.bal = balance

    def deposit(self, amount):
        self.bal += amount
        return self

    def withdraw(self, amount):
        self.bal -= amount
        return self

    def display_account_info(self):
        print("Account Name:", self.name)
        print("Balance:", self.bal)
        print("Interest Rate:", self.int_rate)
        return self

    def yield_interest(self):
        self.bal = self.bal + self.bal * self.int_rate
        return self

if __name__ == "__main__":
    account1 = BankAccount("Account 1", .05, 100)
    account2 = BankAccount("Account 2", .10, 50)

    account1.deposit(100).deposit(100).deposit(100).withdraw(200).yield_interest().display_account_info()
    account2.deposit(200).deposit(200).withdraw(50).withdraw(50).withdraw(50).withdraw(50).yield_interest().display_account_info()