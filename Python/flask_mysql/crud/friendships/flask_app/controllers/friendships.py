from flask import render_template, redirect, request, session
from flask_app import app
from flask_app.models.user import User
from flask_app.models.friendship import Friendship

@app.route('/friendships/add', methods = ['POST'])
def add_friendship():
    data = {
        'user_id': request.form['user_id'],
        'friend_id': request.form['friend_id']
    }
    Friendship.save(data)
    return redirect(request.referrer)