from flask import Flask

app = Flask(__name__)

@app.route('/') # this is the main routing part -- everything else is same
def hello_world():
    pass

if __name__ == "__main__":
    app.run(debug=True)