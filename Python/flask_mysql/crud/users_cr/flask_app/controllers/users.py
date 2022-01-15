from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.user import Users

@app.route('/')
def index():
    return redirect('/users')

@app.route('/users')
def read_users_all():
    return render_template("users.html", all_users = Users.get_all_users())

@app.route('/users/new')
def new():
    return render_template('create_user.html')

@app.route('/users/create', methods=['POST'])
def create_user():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"]
    }
    Users.save(data)
    return redirect('/users')

@app.route('/users/<int:id>')
def show_user(id):
    data = {
        "id": id
    }
    return render_template('show_user.html', user = Users.get_one_user(data))

@app.route('/users/<int:id>/edit')
def edit_user(id):
    data = {
        "id": id
    }
    return render_template('edit_user.html', user = Users.get_one_user(data))

@app.route('/users/update', methods = ['POST'])
def update_user():
    Users.update_entry(request.form)
    return redirect('/users')

@app.route('/users/<int:id>/delete')
def delete_user(id):
    data = {
        "id": id
    }
    Users.delete_entry(data)
    return redirect('/users')
