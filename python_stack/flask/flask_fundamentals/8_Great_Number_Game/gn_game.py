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
    session['leaderboard'] = {}
    session['num'] = 3 #randint(0, 100)
    return render_template("index.html", num = session['num'], 
                                        guesses_left = guesses_left)

@app.route("/number_guess", methods = ['POST'])
def number_guess():
    guesses_left = 4-len(session['guessed_nums'])
    session['guess'] = request.form['form-guess']
    session['total_guesses'] = len(session['guessed_nums'])
    try:
        session['guess_value'] = int(session['guess'])
    except: 
        return render_template("index.html", message = out_of_bounds,
                                            guesses_left = guesses_left)

    if session['guess_value'] > 100 or session['guess_value'] < 1:
        return render_template("index.html", message = out_of_bounds)
    elif session['num'] == session['guess_value']:
        session['guessed_nums'].append(session['guess_value'])
        return render_template("restart.html", message = winner,
                                                total_guesses=session['total_guesses'])
    else: 
        session['guessed_nums'].append(session['guess_value'])
        if len(session['guessed_nums']) > 4:
            return render_template("restart.html", message = loser,
                                                total_guesses=session['total_guesses'])
        elif session['guess_value'] > session['num']:
            direction = "lower"
            relation = "high"
            return render_template("index.html", message = guess_again,
                                                direction = direction,
                                                relation = relation,
                                                guesses_left = guesses_left)
        elif session['guess_value'] < session['num']:
            direction = "higher"
            relation = "low"
            return render_template("index.html", message = guess_again,
                                                direction = direction,
                                                relation = relation,
                                                guesses_left = guesses_left)
        # return render_template("index.html", message = guess_again)

@app.route("/win_name", methods = ['POST'])
def win_name():
    print(request.form['winner_name'])
    session['leaderboard'][request.form['winner_name']] = session['total_guesses']
    print(session)
    return redirect("/leaderboard")

@app.route("/leaderboard")
def leaderboard():
    leader_dict = session['leaderboard']
    print(session)
    return render_template("leaderboard.html", leader_dict = leader_dict)

if __name__=="__main__":
    app.run(debug=True)