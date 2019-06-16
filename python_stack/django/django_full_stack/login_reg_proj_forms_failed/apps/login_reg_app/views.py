from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages

from .forms import RegisterForm, LoginForm
from .models import User

# Create your views here.
def index(request):
    return HttpResponse("test")

def register(request):
    if request.method == 'POST':
        r_form = RegisterForm(request.POST)
        l_form = LoginForm()
        print(request.POST)
        print("*"*80)
        if r_form.is_valid():
            # r_form.validateAllFieldLengths()
            # print(r_form.errors.as_json())
            user = r_form.save()
            # Do something with the author (model instance)
            return redirect("/success")
        else:
            # context = {
            #     'r_form' : r_form,
            #     'message' : "try again"
            # }
            return render(request, 'login_reg_app/loginReg.html', {'r_form': r_form, 'l_form' : l_form,})

def login(request):
    r_form = RegisterForm()
    if request.method == 'POST':
        l_form = LoginForm(request.POST)
        if l_form.is_valid():
            try:
                db_user = User.objects.get(email=request.POST['email'])
            except:
                messages.error(request, f"Sorry, {l_form.cleaned_data.get('email')} is not a valid user. Please register or try a different email.")

            if messages:
                return render(request, 'login_reg_app/loginReg.html', {'r_form': r_form, 'l_form' : l_form,})
            # if db_user.password == request.POST['password']:
            #     return HttpResponse('Success')
            # else:
            #     return HttpResponse('Failed')
        else:
            return render(request, 'login_reg_app/loginReg.html', {'r_form': r_form, 'l_form' : l_form,})


def loginReg(request):    
    r_form = RegisterForm()
    # print(r_form)
    l_form = LoginForm()
    # print(l_form)
    context = {
        'l_form' : l_form,
        'r_form' : r_form,
    }

    return render(request, "login_reg_app/loginReg.html", context)