document.getElementById("sendBtn").addEventListener("click", async function () {

    const url = document.getElementById("url").value;
    const method = document.getElementById("method").value;

    const response = await fetch("/send_request", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            url: url,
            method: method
        })
    });

    const data = await response.json();

    document.getElementById("status").textContent = data.status;
    document.getElementById("time").textContent = data.time + " ms";
    document.getElementById("responseHeaders").textContent = JSON.stringify(data.headers, null, 4);
    document.getElementById("responseBody").textContent = data.body;

});