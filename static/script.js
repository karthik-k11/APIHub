document.getElementById("sendBtn").addEventListener("click", async function () {

    const url = document.getElementById("url").value;
    const method = document.getElementById("method").value;

    let headers = {};
    let body = {};

    try {
        const headerText = document.getElementById("headers").value.trim();
        if (headerText) {
            headers = JSON.parse(headerText);
        }

        const bodyText = document.getElementById("body").value.trim();
        if (bodyText) {
            body = JSON.parse(bodyText);
        }

    } catch (error) {
        alert("Invalid JSON in Headers or Body");
        return;
    }

    const response = await fetch("/send_request", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            url,
            method,
            headers,
            body
        })
    });

    const data = await response.json();

    document.getElementById("status").textContent = data.status;
    document.getElementById("time").textContent = data.time + " ms";
    document.getElementById("responseHeaders").textContent = JSON.stringify(data.headers, null, 4);
    document.getElementById("responseBody").textContent = data.body;

});