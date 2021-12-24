from typing import Collection
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def checkerboard8times8():
    return render_template('index.html', row=8, col=8,color1="red", color2="black")

@app.route('/<int:x>')
def checkerboardxtimes8(x):
    return render_template('index.html', row=x, col=8,color1="red", color2="black")

@app.route('/<int:x>/<int:y>')
def checkerboardxtimesy(x,y):
    return render_template('index.html', row=x, col=y, color1="red", color2="black")

@app.route('/<int:x>/<int:y>/<string:color1>/<string:color2>')
def checkerboardxtimesywithcolor(x,y,color1, color2):
    return render_template('index.html', row=x, col=y, color1=color1, color2=color2)

if __name__ == "__main__":
    app.run(debug=True)