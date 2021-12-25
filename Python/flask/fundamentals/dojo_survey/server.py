from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'dont hack this :('

@app.route('/')
def surveyform():
    return render_template('index.html')

@app.route('/process', methods = ['POST'])
def process():
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comments'] = request.form['comments']
    session['gender'] = request.form['gender']
    # session['agree1'] = request.form['agree1']
    # session['agree2'] = request.form['agree2']
    return redirect('/success')

@app.route('/success')
def success():
    return render_template('success.html')

if __name__ == "__main__":
    app.run(debug=True)
