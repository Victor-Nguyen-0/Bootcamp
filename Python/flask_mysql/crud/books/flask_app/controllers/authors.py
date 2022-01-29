from flask import render_template, redirect, request, session
from flask_app import app
from flask_app.models.author import Author
from flask_app.models.book import Book


@app.route('/')
def index():
    return redirect('/authors')

@app.route('/authors')
def authors():
    return render_template('authors.html', authors = Author.get_all())

@app.route('/authors/add', methods = ['POST'])
def add_authors():
    data = {
        "name": request.form["name"]
    }
    Author.save(data)
    return redirect('/authors')

@app.route('/authors/<int:id>')
def show_one_author(id):
    data = {
        'id': id
    }
    return render_template('show_one_author.html', author = Author.get_by_id(data), unfavorited_books = Book.unfavorited_books(data))

@app.route('/join/book', methods = ['POST'])
def join_book():
    data = {
        'author_id': request.form['author_id'],
        'book_id': request.form['book_id']
    }
    Author.add_favorite(data)
    return redirect(request.referrer)