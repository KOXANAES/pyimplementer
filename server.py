from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import sys
import io

app = Flask(__name__)
CORS(app, resources={r"/execute": {"origins": ["http://localhost:5500", "http://127.0.0.1:5500"]}})
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/execute', methods=['POST'])
def execute_code():
    code = request.form['code']
    output = io.StringIO()
    try:
        sys.stdout = output
        exec(code)
    except Exception as e:
        return jsonify({'error': str(e)})
    finally:
        sys.stdout = sys.__stdout__

    return jsonify({'output': output.getvalue()})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5005, debug=True)