from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from django.db.models import Count
import bcrypt

from .models import User

def index(request):
    return HttpResponse("This works")

# Create your views here.
def login_register(request):
    return render(request, "login_reg_app/login_register.html")

def login(request):
    if request.method=='POST':
        try:
            user = User.objects.get(email=request.POST['email'])  # hm...is it really a good idea to use the get method here?
        except:
            messages.error(request, "There is no account with that username.")
            return redirect('/')
        if user.auth_pw(request.POST['password']):
            request.session['userid'] = user.id
            print(user.id)
            print(request.session['userid'])
            request.session['user_first_name'] = user.first_name
            return redirect('/books')
        else:
            messages.error(request, "That password is invalid.")
    return redirect('/')

def register(request):
    if request.method == 'POST':
        form = request.POST
        errors = User.objects.validate_registration(form)
        if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
            for key, value in errors.items():
                messages.error(request, value)

            return redirect('/')

        user = User(first_name=form['first_name'], 
                    last_name=form['last_name'],
                    email = form['email'],
                    password = form['password'],)
        user.bcrypt_password()
        user.save()
        messages.success(request, 'Account Created.')
        return redirect("/")

def logout(request):
    try:
        del request.session['userid']
        del request.session['user_first_name']
    except KeyError:
        pass
    messages.success(request, 'You logged out.')
    return redirect('/')

def show_user(request, user_id):
    try:
        user=User.objects.get(id=user_id)
    except:
        messages.error(request, f"{user_id} doesn't match a current user.")
        return redirect('/books')
    user.review_count = len(user.reviews.all())
    context = {
        'booklist' : user.get_books(),
        'user' : user
    }
    return render(request, "login_reg_app/show_user.html", context)

# def success(request):
#     try:
#         user = User.objects.get(id=request.session['userid'])
#     except:
#         messages.error(request, 'You forgot to log in.')
#         return redirect('/')
#     context = {
#         "username" : user.first_name,
#     }
#     return render(request, "login_reg_app/success.html", context=context) 