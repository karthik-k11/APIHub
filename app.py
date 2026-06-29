from flask import Flask, render_template, request, jsonify
import requests
import time
from database import create_table, save_history, get_history

app = Flask(__name__)

create_table()


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/history")
def history():
    history_data = get_history()
    return render_template("history.html", history=history_data)


@app.route("/send_request", methods=["POST"])
def send_request():

    data = request.get_json()

    url = data.get("url")
    method = data.get("method")
    headers = data.get("headers", {})
    body = data.get("body", {})

    start = time.time()

    response = requests.request(
        method=method,
        url=url,
        headers=headers,
        json=body if method in ["POST", "PUT"] else None
    )

    end = time.time()

    save_history(url, method, response.status_code)

    return jsonify({
        "status": response.status_code,
        "time": round((end - start) * 1000, 2),
        "headers": dict(response.headers),
        "body": response.text
    })


if __name__ == "__main__":
    app.run(debug=True)