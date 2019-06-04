import itertools

class Product:

    id_iter = itertools.count()
    
    def __init__(self, product_name, price, category):
        self.product_name = product_name
        self.price = price
        self.category = category
        self.id = next(self.id_iter)

    def update_price(self, percent_change, is_increased):
        if is_increased == True:
            self.price = round(self.price * (1 + percent_change), 2)
        else:
            self.price = round(self.price * (1 - percent_change), 2)
        return self
    
    def print_info(self):
        print(f"Product ID: {self.id}, Product name: {self.product_name}, Product category: {self.category}, Product price: {self.price}")
        return self