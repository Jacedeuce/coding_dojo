from django.shortcuts import render, redirect, HttpResponse
from django.utils.crypto import get_random_string

# Create your views here.
def index(request):
    if request.method == "POST" or request.method == "GET":
        if 'counter' in request.session:
            request.session['counter'] += 1
        else: 
            request.session['counter'] = 1
        
        context = {
            'count' : request.session['counter'],
            'string' : get_random_string(length=14)
        }

        return render(request, "Random_Word_Generator/index.html", context)


def reset(request):
    try:
        del request.session['counter']
    except:
        return HttpResponse("Fail")
    return redirect('/random_word')