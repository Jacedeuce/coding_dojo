from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
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
            return redirect('/accounts')
        if user.auth_pw(request.POST['password']):
            request.session['userid'] = user.id
            return redirect('/books')
        else:
            messages.error(request, "That password is invalid.")
    return redirect('/accounts/')

def register(request):
    if request.method == 'POST':
        form = request.POST
        errors = User.objects.validate_registration(form)
        if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
            for key, value in errors.items():
                messages.error(request, value)

            return redirect('/accounts')

        user = User(first_name=form['first_name'], 
                    last_name=form['last_name'],
                    email = form['email'],
                    password = form['password'],
                    birthdate = form['birthdate'])
        user.bcrypt_password()
        user.save()
        messages.success(request, 'Account Created.')
        return redirect("/accounts")

def success(request):
    try:
        user = User.objects.get(id=request.session['userid'])
    except:
        messages.error(request, 'You forgot to log in.')
        return redirect('/accounts')
    context = {
        "username" : user.first_name,
    }
    return render(request, "login_reg_app/success.html", context=context) 

def logout(request):
    try:
        del request.session['userid']
    except KeyError:
        pass
    messages.success(request, 'You logged out.')
    return redirect('/accounts')
