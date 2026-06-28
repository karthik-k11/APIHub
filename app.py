from flask import Flask, render_template, request, jsonify
import requests
import time

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/send_request", methods=["POST"])
def send_request():
    data = request.get_json()

    url = data.get("url")
    method = data.get("method")

    start = time.time()

    response = requests.request(method=method, url=url)

    end = time.time()

    return jsonify({
        "status": response.status_code,
        "time": round((end - start) * 1000, 2),
        "headers": dict(response.headers),
        "body": response.text
    })


if __name__ == "__main__":
    app.run(debug=True)