from urllib import request
from flask import Flask, render_template, request, redirect, session

from users import Users

app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe' 

@app.route('/')
def index():
    return redirect('/users')

@app.route('/users', methods=['GET','POST'])
def read_users_all():
    users = Users.get_all()
    return render_template("index.html", all_users = users)

@app.route('/users/new')
def new():
    return render_template('create.html')

@app.route('/users/create', methods=['GET','POST'])
def create_user():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"]
    }
    Users.save(data)
    return redirect('/users')

if __name__ == "__main__":
    app.run(debug=True)

