from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json(force=True)   # ✅ force=True makes sure JSON is parsed
    expr = data.get("expr", "")
    try:
        result = eval(expr)  # ⚠️ only for demo, unsafe in production
    except:
        result = "Error"
    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(debug=True)
