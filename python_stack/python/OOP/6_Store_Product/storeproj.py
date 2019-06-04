from store import Store
from product import Product

dollar_store = Store("Dollar Store")
candy = Product("candy", 1.00, "food")
milk = Product("milk", 2.00, "food")
paper = Product("paper", 1.00, "office")
pencil = Product("pencil", 2.00, "office")

dollar_store.add_product(candy).add_product(milk).add_product(paper).add_product(pencil)

dollar_store.print_catalog()
print("\nSELLING")
dollar_store.sell_products(1).sell_products(2)
print("\n")
dollar_store.print_catalog()

# milk.update_price(.5, True)

# dollar_store.print_catalog()

# milk.print_info()
# print()
# dollar_store.print_catalog()

# print()
# print("SELLING")
# dollar_store.sell_products(1)
# print()
# dollar_store.print_catalog()



dollar_store.add_product(paper)

dollar_store.inflation(.05)

dollar_store.print_catalog()

dollar_store.set_clearance("food", .10)

dollar_store.print_catalog()