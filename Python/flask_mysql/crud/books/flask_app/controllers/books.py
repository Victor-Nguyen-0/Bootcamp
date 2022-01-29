from flask import render_template, redirect, request, session
from flask_app import app
from flask_app.models.author import Author
from flask_app.models.book import Book

@app.route('/books')
def show_books():
    return render_template('books.html', books = Book.get_all())

@app.route('/books/add', methods = ['POST'])
def add_book():
    data = {
        "title": request.form['title'],
        "num_of_pages": request.form['num_of_pages']
    }
    Book.save(data)
    return redirect('/books')

@app.route('/books/<int:id>')
def show_one_book(id):
    data = {
        'id': id
    }
    return render_template('show_one_book.html', book = Book.get_by_id(data), unfavorited_authors = Author.unfavorited_authors(data))

@app.route('/join/author', methods = ['POST'])
def join_author():
    data = {
        'author_id': request.form['author_id'],
        'book_id': request.form['book_id']
    }
    Author.add_favorite(data)
    return redirect(request.referrer)