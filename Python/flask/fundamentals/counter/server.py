from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'dont hack this please :)'

@app.route('/')
def visits():
    if 'visit_count' in session:
        session['visit_count'] = session.get('visit_count') + 1
    else:
        session['visit_count'] = 1
    return render_template('index.html')

@app.route('/destroy_session')
def destroy_session():
    session.pop('visit_count')
    return redirect('/')

@app.route('/plus2')
def countplus2():
    session['visit_count'] += 1
    return redirect('/')

@app.route('/customnumber', methods=['POST'])
def formaddcount():
    session['visit_count'] += int(request.form['customnumber']) -1 
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)
