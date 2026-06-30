const sendButton = document.getElementById("sendBtn");
const statusBadge = document.getElementById("status");
const timeBadge = document.getElementById("time");

sendButton.addEventListener("click", async () => {

    const url = document.getElementById("url").value.trim();
    const method = document.getElementById("method").value;

    if (!url) {
        alert("Please enter an API URL.");
        return;
    }

    let headers = {};
    let body = {};

    try {

        const headerText = document.getElementById("headers").value.trim();

        if (headerText !== "") {
            headers = JSON.parse(headerText);
        }

        const bodyText = document.getElementById("body").value.trim();

        if (bodyText !== "") {
            body = JSON.parse(bodyText);
        }

    } catch {

        alert("Invalid JSON in Headers or Request Body.");
        return;

    }

    sendButton.disabled = true;
    sendButton.textContent = "Sending...";

    statusBadge.textContent = "...";
    statusBadge.className = "badge badge-gray";

    timeBadge.textContent = "-- ms";

    document.getElementById("responseHeaders").textContent = "Loading...";
    document.getElementById("responseBody").textContent = "Loading...";

    try {

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

        statusBadge.textContent = data.status;

        if (data.status >= 200 && data.status < 300) {

            statusBadge.className = "badge badge-green";

        } else if (data.status >= 300 && data.status < 400) {

            statusBadge.className = "badge badge-blue";

        } else if (data.status >= 400 && data.status < 500) {

            statusBadge.className = "badge badge-orange";

        } else {

            statusBadge.className = "badge badge-red";

        }

        timeBadge.textContent = data.time + " ms";

        document.getElementById("responseHeaders").textContent =
            JSON.stringify(data.headers, null, 4);

        try {

            const formatted = JSON.stringify(JSON.parse(data.body), null, 4);

            document.getElementById("responseBody").textContent = formatted;

        } catch {

            document.getElementById("responseBody").textContent = data.body;

        }

    } catch (error) {

        statusBadge.textContent = "Error";
        statusBadge.className = "badge badge-red";

        document.getElementById("responseHeaders").textContent = "";

        document.getElementById("responseBody").textContent =
            error.message;

    }

    sendButton.disabled = false;
    sendButton.textContent = "Send Request";

});