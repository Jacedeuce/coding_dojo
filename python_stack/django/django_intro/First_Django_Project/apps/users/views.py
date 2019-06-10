## users ##
from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def register(request):
    return HttpResponse("placeholder for users to create a new user record")

def login(request):
    return HttpResponse("placeholder for users to login")

def users(request):
    return HttpResponse("placeholder dis display the list of all users")