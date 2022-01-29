from flask import render_template, redirect, request, session
from flask_app import app
from flask_app.models.user import User
from flask_app.models.friendship import Friendship

@app.route('/')
def index():
    return redirect('/friendships')

@app.route('/friendships')
def friendships():
    return render_template('index.html')

@app.route('/friendships/user/add', methods = ['POST'])
def add_user():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"]
    }
    User.save(data)
    return redirect('/friendships')