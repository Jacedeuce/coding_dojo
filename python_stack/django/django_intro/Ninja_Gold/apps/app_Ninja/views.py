from django.shortcuts import render, redirect
from .functions import gold_randomizer
from datetime import datetime

# Create your views here.
def index(request):

    if 'goal' not in request.session and 'goal' not in request.POST:
        return redirect('/setup')
    
    if request.method == 'POST':
        request.session['goal'] = int(request.POST['goal'])
        request.session['turns_allowed'] = int(request.POST['turns_allowed'])



    if 'gold' not in request.session:
        request.session['gold'] = 0
    if 'activity' not in request.session:
        request.session['activity'] = []

    list_len = len(request.session['activity']) # to prevent nonetype errors on Django template engine

    turns_left = request.session['turns_allowed'] - len(request.session['activity'])

    request.session['activity'].reverse()

    context = {
        'gold' : request.session['gold'],
        'activity' : request.session['activity'],
        'list_len' : len(request.session['activity']), 
        'goal' : request.session['goal'],
        'turns_left' : turns_left,
        }

    if turns_left <= 0:
        context['won_lost'] = 'lost'
    elif context['gold'] > request.session['goal']:
        context['won_lost'] = 'won'

    return render(request, "app_Ninja/index.html", context)

def process_money(request):
    if request.method == "POST":
        if request.POST['building'] == 'clear':
            request.session.flush()
            return redirect('/')
        else: 
            pass

        gold_val = gold_randomizer(request.POST['building'])
        request.session['gold'] += gold_val

        if gold_val > 0:
            color = 'green'
            win_lose = "won"
        elif gold_val == 0:
            color = 'yellow'
            win_lose = "won"
        else:
            color = 'red'
            win_lose = "lost"

        request.session['activity'].append({'color': color,
                                    'win_lose': win_lose,
                                    'amount': gold_val, 
                                    'time': str(datetime.now())})
        
        # if gold_val > request.session['goal']
        return redirect('/')

def setup(request):


    return render(request, "app_Ninja/setup.html")

def clear(request):
    request.session.flush()
    return redirect('/')