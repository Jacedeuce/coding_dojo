from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/<rows>')
def indexRows(rows):
    try:
        rows = int(rows)
    except:
        return "Supply an Integer!"
    return render_template("indexRows.html", row_num = int(rows))

@app.route('/<rows>/<cols>')
def indexRowsCols(rows, cols):
    try:
        rows = int(rows)
    except:
        return "Supply an Integer for rows!"
    try:
        cols = int(cols)
    except:
        return "Supply an Integer for columns!"
    return render_template("indexRowsCols.html", row_num = int(rows), col_num = int(cols),
    color_1 = "red", color_2 = "black")

@app.route('/<rows>/<cols>/<color1>/<color2>')
def indexRowsColsColors(rows, cols, color1 , color2):
    try:
        rows = int(rows)
    except:
        return "Supply an Integer for rows!"
    try:
        cols = int(cols)
    except:
        return "Supply an Integer for columns!"
    return render_template("indexRowsCols.html", row_num = int(rows), col_num = int(cols),
    color_1 = color1, color_2 = color2)


if __name__=="__main__":
    app.run(debug=True)