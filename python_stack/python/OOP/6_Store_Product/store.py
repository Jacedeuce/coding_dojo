

class Store:
    
    def __init__(self, store_name):
        self.store_name = store_name
        self.products = {}

    def add_product(self, new_product):
        self.products[new_product.id] = new_product
        return self

    def sell_products(self, id):
        self.products.pop(id).print_info() ## need to check this later
        return self

    def inflation(self, percent_increase):
        for product in self.products.values():
            product.update_price(percent_increase, True)
        return self

    def set_clearance(self, category, percent_discount):
        for product in self.products.values():
            if product.category == category:
                product.update_price(percent_discount, False)
        return self

    def print_catalog(self):
        print(self.store_name.upper())
        for product in self.products.values():
            product.print_info()





