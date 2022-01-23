from flask import render_template, redirect, request, session
from flask_app import app
from flask_app.models.user import User
from flask_app.models.recipe import Recipe

@app.route('/recipes/new')
def new_recipes():
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        'id': session['user_id']
    }
    return render_template('new_recipe.html', user = User.get_by_id(data))

@app.route('/recipes/new/add', methods = ['POST'])
def add_recipe():
    if 'user_id' not in session:
        return redirect('/logout')
    if not Recipe.validate_recipe(request.form):
        return redirect('/recipes/new')
    data = {
        "name": request.form["name"],
        "description": request.form["description"],
        "instructions": request.form["instructions"],
        "date_created": request.form["date_created"],
        "time_taken": request.form["time_taken"],
        "user_id": session["user_id"]
    }
    Recipe.save(data)
    return redirect('/dashboard')

@app.route('/recipes/<int:id>')
def show_recipes(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        'id': id
    }
    user_data = {
        "id": session['user_id']
    }
    return render_template('show_recipes.html', user = User.get_by_id(user_data), recipe = Recipe.get_one(data))

@app.route('/recipes/<int:id>/edit')
def edit_recipe(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        'id': id
    }
    user_data = {
        "id": session['user_id']
    }
    return render_template('edit_recipe.html', user = User.get_by_id(user_data), recipe = Recipe.get_one(data))

@app.route('/recipes/<int:id>/edit/update', methods = ['POST'])
def update_recipe(id):
    if 'user_id' not in session:
        return redirect('/logout')
    if not Recipe.validate_recipe(request.form):
        return redirect(request.referrer)
    data = {
        "name": request.form["name"],
        "description": request.form["description"],
        "instructions": request.form["instructions"],
        "date_created": request.form["date_created"],
        "time_taken": request.form['time_taken'],
        "id": id
    }
    Recipe.edit(data)
    return redirect('/dashboard')

@app.route('/recipes/<int:id>/delete')
def delete_recipe(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id": id
    }
    Recipe.delete(data)
    return redirect('/dashboard')