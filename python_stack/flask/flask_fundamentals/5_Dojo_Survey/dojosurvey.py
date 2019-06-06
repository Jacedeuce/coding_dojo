from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/result", methods=['POST'])
def result():
    print("Got Post Info")
    name_from_form = request.form['name']
    email_from_form = request.form['email']
    languages_from_form = request.form['languages']
    optin_from_form = request.form['optin']
    return render_template("result.html", name_on_result = name_from_form,
                                        email_on_result = email_from_form,
                                        languages_on_result = languages_from_form,
                                        optin_on_result = optin_from_form)

if __name__=="__main__":
    app.run(debug=True)