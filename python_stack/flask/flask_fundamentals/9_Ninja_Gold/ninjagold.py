from flask import Flask, render_template, request, redirect, session
from gold_functions import gold_calculator
from datetime import datetime
app=Flask(__name__)
app.secret_key = 'my secret key'



@app.route('/')
def index():
    win_lose = 'play'

    # print(session)
    if 'gold_amount' in session:
        display_gold = session['gold_amount']
    else:
        session['gold_amount'] = 0
        display_gold = session['gold_amount']
    if 'activities' in session:
        activity_list = session['activities']
    else:
        activity_list = []
        session['activities'] = []

    activity_list.reverse()
    list_len = len(activity_list)

    if display_gold > 100 and len(activity_list) < 15:
        win_lose = 'won'
    elif len(activity_list) > 15:
        win_lose = 'lost'
    else:
        pass

    return render_template('index.html', gold_amount = display_gold,
                                        list_len = list_len,
                                        activity_list=activity_list,
                                        win_lose=win_lose)

@app.route('/process_money', methods = ['POST'])
def process_money():

    print(request.form['building'])
    if request.form['building'] == 'clear':
        session.clear()
        return redirect('/')
    gold_val = gold_calculator(request.form['building'])
    session['gold_amount'] += gold_val

    if gold_val > 0:
        color = 'green'
        win_lose = "won"
    elif gold_val == 0:
        color = 'yellow'
        win_lose = "won"
    else:
        color = 'red'
        win_lose = "lost"
    session['activities'].append({'color': color,
                                'win_lose': win_lose,
                                'amount': gold_val, 
                                'time':datetime.now()})
    # print(session)
    return redirect("/")

@app.route('/clear')
def clear():
    session.clear()
    return redirect("/")

if __name__=="__main__":
    app.run(debug=True)