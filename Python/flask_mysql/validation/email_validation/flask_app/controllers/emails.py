from flask import render_template,redirect,request,session,flash
from flask_app import app
from flask_app.models.email import Email

@app.route('/')
def index():
    return render_template('email_submit.html')

@app.route('/process', methods=['POST'])
def process():
    if not Email.is_valid(request.form):
        return redirect('/')
    Email.save(request.form)
    return redirect('/success')

@app.route('/success')
def success():
    return render_template('success.html', emails = Email.list_all_emails())

@app.route('/destroy/<int:id>')
def destroy_email(id):
    data = {
        "id": id
    }
    Email.destroy(data)
    return redirect('/success')