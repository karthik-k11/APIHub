import sqlite3

DATABASE = "database/api_history.db"


def get_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


def create_table():
    conn = get_connection()

    conn.execute("""
        CREATE TABLE IF NOT EXISTS api_history(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            url TEXT NOT NULL,
            method TEXT NOT NULL,
            status_code INTEGER,
            request_time TEXT DEFAULT CURRENT_TIMESTAMP
        )
    """)

    conn.commit()
    conn.close()


def save_history(url, method, status_code):
    conn = get_connection()

    conn.execute("""
        INSERT INTO api_history(url, method, status_code)
        VALUES (?, ?, ?)
    """, (url, method, status_code))

    conn.commit()
    conn.close()


def get_history():
    conn = get_connection()

    history = conn.execute("""
        SELECT * FROM api_history
        ORDER BY id DESC
    """).fetchall()

    conn.close()

    return history