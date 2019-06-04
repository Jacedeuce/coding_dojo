class BankAccount:
    def __init__(self, account_name, interest_rate = .02, balance = 0):
        self.account_name = account_name
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
        self.user_name = username
        self.email = email_address
        self.accounts = {}

    def open_account(self, account_name):
        self.accounts[account_name] = BankAccount(account_name)

    def make_deposit(self, account_name, amount):
        print(f"Depositing {amount} dollars.")
        self.accounts[account_name].deposit(amount)
        return self
    
    def make_withdrawal(self, account_name, amount):
        print(f"Withdrawing {amount} dollars.")
        self.accounts[account_name].withdraw(amount)
        return self

    def display_user_balances(self):
        print(self.user_name, "Account Balances:")
        for account in self.accounts:
            print(f"\t{self.accounts[account].account_name} Account Balance: {self.accounts[account].bal}")
        return self

    def transfer_money(self, account_name_from, to_user, account_name_to, amount):
        self.accounts[account_name_from].withdraw(amount)
        to_user.accounts[account_name_to].deposit(amount)
        self.display_user_balances()
        to_user.display_user_balances()
        return self

# if __name__ == "__main__":
jason = User("jason", "jason@codingdojo.com")
jason.open_account("savings")
jason.open_account("checking")
jason.display_user_balances()
jason.make_deposit('checking', 50)
jason.display_user_balances()
