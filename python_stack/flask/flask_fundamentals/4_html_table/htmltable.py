from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/users")
def users():
    users = [
        {'first_name' : 'Michael', 'last_name' : 'Choi' , 'pet' : "Alligator", 'home' : 'Massachusetts'},
        {'first_name' : 'John', 'last_name' : 'Supsupin' , 'pet' : "Alligator", 'home' : 'Massachusetts'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen' , 'pet' : "Alligator", 'home' : 'Massachusetts'},
        {'first_name' : 'KB' , 'last_name' : 'Tonel' , 'pet' : "Alligator", 'home' : 'Massachusetts'},
    ]
    return render_template("users.html", user_list = users)

if __name__=="__main__":
	app.run(debug=True)