from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/store")
def store():
    return render_template("store.html")

@app.route("/checkout", methods = ['POST'])
def checkout():

    num_straw = int(request.form['strawberry'])
    num_rasp = int(request.form['raspberry'])
    num_apple = int(request.form['apple'])
    form_f_name = request.form['first_name']
    form_l_name = request.form['last_name']
    form_student_id = request.form['student_id']
    total_items = num_straw + num_rasp + num_apple
    print(f"Charging {form_student_id} for {total_items} fruits...")
    return render_template("checkout.html", disp_num_straw = num_straw,
                                            disp_num_rasp = num_rasp,
                                            disp_num_apple = num_apple,
                                            disp_f_name = form_f_name,
                                            disp_l_name = form_l_name,
                                            disp_student_id = form_student_id,
                                            disp_total_items = total_items)

@app.route("/fruits")
def fruits():
    return render_template("fruits.html")

if __name__=='__main__':
    app.run(debug=True)