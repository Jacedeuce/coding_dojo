from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<h1>Hello World!</h1>"

@app.route("/dojo")
def dojo():
    return "<h1>Dojo!</h1>"

@app.route("/say/<name>")
def say_name(name):
    try:
        name = float(name)
        return ("That's a number not a string!")
    except ValueError:
        return f"<h1>Hi {name}!</h1>"

@app.route("/repeat/<num>/<phrase>")
def repeat_phrase(num, phrase):
    try:
        num = int(num)
    except ValueError:
        return "Please enter an integer!"
    try:
        phrase = float(phrase)
    except ValueError:
        return phrase * int(num)
    return "That's a number not a string!"

@app.errorhandler(404)
def page_not_found(error):
    return "Sorry! No response. Try again."


if __name__=="__main__":
    app.run(debug=True)