from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def Hello():
    return "<h1>Hello!</h1>"


@app.route("/play")
def play3blue():
    return render_template("play.html", repeat = 3, box_color = "lightseagreen")

@app.route("/play/<times>")
def playXblue(times):
    return render_template("play.html", repeat = int(times), box_color = "lightseagreen")

@app.route("/play/<times>/<color>")
def playXcolor(times, color):
    return render_template("play.html", repeat = int(times), box_color = color)

if __name__ == "__main__":
    app.run(debug=True)