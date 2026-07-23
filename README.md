# APIHub

A lightweight API Testing Tool built with Flask and SQLite that allows users to send HTTP requests, inspect responses, and maintain request history.

---

## Overview

APIHub is a beginner-friendly REST API client inspired by tools like Postman and Hoppscotch. It helps developers test APIs by sending HTTP requests, viewing responses, analyzing headers, measuring response times, and storing request history.

The project was built to understand how REST APIs work internally and to gain hands-on experience with backend development using Flask.

---

## Features

### API Request Testing

- Send GET requests
- Send POST requests
- Send PUT requests
- Send DELETE requests

### Custom Request Configuration

- Add custom request headers
- Send JSON request bodies
- Select HTTP methods from a dropdown

### Response Analysis

- View status codes
- View response time
- View response headers
- View formatted response body

### Request History

- Save request history in SQLite
- Store:
  - URL
  - HTTP Method
  - Status Code
  - Timestamp
- View history on a dedicated page

### Error Handling

- Invalid JSON validation
- Invalid URL handling
- Request timeout handling
- User-friendly error messages

---

## Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Python
- Flask

### Database

- SQLite

### Libraries

- Requests

### Version Control

- Git
- GitHub

### Deployment

- Render

---

## Project Structure

```text
APIHub/
│
├── app.py
├── database.py
├── requirements.txt
├── README.md
│
├── database/
│   └── api_history.db
│
├── static/
│   ├── style.css
│   └── script.js
│
└── templates/
    ├── index.html
    └── history.html
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project

```bash
cd APIHub
```

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Virtual Environment

Windows

```bash
venv\Scripts\activate
```

Linux / macOS

```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Running the Application

Start the Flask application:

```bash
python app.py
```

Open:

```text
http://127.0.0.1:5000
```

---

## Usage

### GET Request

1. Select GET
2. Enter API URL
3. Click Send Request

Example:

```text
https://jsonplaceholder.typicode.com/posts/1
```

---

### POST Request

Headers

```json
{
    "Content-Type":"application/json"
}
```

Body

```json
{
    "title":"APIHub",
    "userId":1
}
```

Click Send Request.

---

### PUT Request

```json
{
    "title":"Updated Title",
    "userId":1
}
```

---

### DELETE Request

Select DELETE and send the request.

---

## Database Schema

### api_history

| Column | Type |
|----------|----------|
| id | INTEGER |
| url | TEXT |
| method | TEXT |
| status_code | INTEGER |
| request_time | TEXT |

---

## Key Learnings

This project helped in understanding:

- REST APIs
- HTTP Methods
- Request and Response Lifecycle
- Flask Backend Development
- JavaScript Fetch API
- SQLite Database Operations
- Error Handling
- Git and GitHub Workflow
- Web Application Deployment

---

## Future Improvements

Potential enhancements:

- Export request history
- Search and filter history
- Copy response button
- Request collections
- Environment variables support

---