from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "my secret key"

@app.route("/")
def index():
    if 'visit' in session:
        session['visit'] += 1
    else:
        session['visit'] = 1
    if 'counter' in session:
        session['counter'] += 1
    else:
        session['counter'] = 1
    return render_template("index.html")

@app.route("/destroy_session")
def clearall():
    session.clear()
    return redirect("/")

@app.route("/clearcount")
def clearcount():
    session.pop('counter')
    return redirect("/")

@app.route("/plustwo")
def plustwo():
    session['counter'] += 1
    return redirect("/")

@app.route("/increment", methods = ['POST'])
def increment():
    session['counterval'] = request.form['increment']
    session['counter'] += int(request.form['increment'])-1
    return redirect("/")


if __name__=="__main__":
    app.run(debug=True)