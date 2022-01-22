from flask import render_template,redirect,request
from flask_app import app
from flask_app.models.survey import Survey

@app.route('/')
def surveyform():
    return render_template('index.html')

@app.route('/process', methods = ['POST'])
def process():
    if Survey.validate_survey_response(request.form):
        Survey.save(request.form)
        return redirect('/success')
    return redirect('/')

@app.route('/success')
def success():
    return render_template('success.html', survey = Survey.get_last_survey())

