from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/success')
def success():
    return 'Success!'

@app.route('/hello/<string:arbitraryword>/<int:num>')
def hello(arbitraryword, num):
    return f"Hello {arbitraryword * num}"

if __name__ == "__main__":
    app.run(debug=True)