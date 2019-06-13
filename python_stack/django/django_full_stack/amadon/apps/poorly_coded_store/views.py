from django.shortcuts import render, redirect
from django.db.models import Sum
from .models import Order, Product

def index(request):
    context = {
        "all_products": Product.objects.all()
    }
    return render(request, "store/index.html", context)

def process(request):
    quantity_from_form = int(request.POST["quantity"])
    item_from_form = int(request.POST["id"])
    price_from_database = Product.objects.get(id=item_from_form).price
    total_charge = quantity_from_form * price_from_database
    print("Charging credit card...")
    Order.objects.create(quantity_ordered=quantity_from_form, total_price=total_charge)
    return redirect("/checkout")

def checkout(request):
    
    context = {
        "total_recent_order" : str(Order.objects.last().total_price),
        "total_items_ordered" : str(Order.objects.aggregate(Sum("quantity_ordered")).get('quantity_ordered__sum')),
        "total_amount_all" : str(Order.objects.aggregate(Sum("total_price")).get('total_price__sum', 0.00))
    }
    print(context)
    return render(request, "store/checkout.html", context)