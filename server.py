from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>first python server (on flask!)</p>"

app.run(host="0.0.0.0", port=5005, debug=True)