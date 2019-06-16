from flask import Flask, render_template, request, redirect, session
from random import randint

app = Flask(__name__)
app.secret_key = "my_secret_key"

out_of_bounds = "Your number is out of bounds!"
winner = "Winner!"
guess_again = "Guess again!"
loser = "Sorry, you lost."
guesses_left = 5


@app.route("/")
def index():
    session['guessed_nums'] = []
    session['num'] = 3 #randint(0, 100)
    if 'leaderboard' not in session:
        session['leaderboard'] = []
    leader_list = session['leaderboard']
    return render_template("index.html", num = session['num'], 
                                        guesses_left = guesses_left, leader_list=leader_list)

@app.route("/number_guess", methods = ['POST'])
def number_guess():
    guesses_left = 4-len(session['guessed_nums'])
    session['guess'] = request.form['form-guess']
    session['total_guesses'] = len(session['guessed_nums'])
    print(session['total_guesses'])
    try:
        session['guess_value'] = int(session['guess'])
    except: 
        return render_template("index.html", message = out_of_bounds,
                                            guesses_left = guesses_left)

    if session['guess_value'] > 100 or session['guess_value'] < 1:
        return render_template("index.html", message = out_of_bounds)
    elif session['num'] == session['guess_value']:
        session['guessed_nums'].append(session['guess_value'])
        session['total_guesses'] = len(session['guessed_nums'])
        print(session['guessed_nums'])
        return render_template("restart.html", message = winner,
                                                total_guesses=session['total_guesses'])
    else: 
        session['guessed_nums'].append(session['guess_value'])
        session['total_guesses'] = len(session['guessed_nums'])
        if len(session['guessed_nums']) > 4:
            return render_template("restart.html", message = loser,
                                                total_guesses=session['total_guesses'])
        elif session['guess_value'] > session['num']:
            direction = "lower"
            relation = "high"
        elif session['guess_value'] < session['num']:
            direction = "higher"
            relation = "low"
        leader_list = session['leaderboard']
        return render_template("index.html", message = guess_again,
                                            direction = direction,
                                            relation = relation,
                                            guesses_left = guesses_left,
                                            leader_list = leader_list)

@app.route("/win_name", methods = ['POST'])
def win_name():
    print(request.form['winner_name'])
    name = request.form['winner_name']
    guess = session['total_guesses']
    new_leader = createLeader(name, guess)
    
    if 'leaderboard' in session:
        leader_list = session['leaderboard']
        leader_list.append(new_leader)
    else:
        leader_list = list(new_leader)

    session['leaderboard'] = leader_list
    print(session)
    return redirect("/")

@app.route("/leaderboard")
def leaderboard():
    print(session)
    leader_list = session['leaderboard']
    return render_template("leaderboard.html", leader_list = leader_list)

@app.route("/clear")
def clear():
    session.clear()
    return redirect('/')

def createLeader(name, guess):
    return {
        "name": name,
        "guess": guess
    }

if __name__=="__main__":
    app.run(debug=True)