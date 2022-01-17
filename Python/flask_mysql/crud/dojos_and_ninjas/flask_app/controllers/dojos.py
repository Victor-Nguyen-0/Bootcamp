from flask import render_template,redirect,request,session,flash
from flask_app import app
from flask_app.models.dojo import Dojo

@app.route('/')
def index():
    return redirect('/dojos')

@app.route('/dojos')
def read_dojos_all():
    return render_template("all_dojos.html", dojos = Dojo.get_all_dojos())

@app.route('/dojos/<int:id>')
def show_dojo(id):
    data = {
        "id": id
    }
    return render_template('show_one_dojo.html', dojo = Dojo.get_one_dojo_ninjas(data))

@app.route('/dojos/create',methods=['POST'])
def create_dojo():
    Dojo.save(request.form)
    return redirect('/dojos')