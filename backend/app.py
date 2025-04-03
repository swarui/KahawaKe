from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()  # Load environment variables

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["https://kahawa-ke.netlify.app", "http://localhost:5174"]}})

EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "API is working!"}), 200

@app.route("/contact", methods=["POST"])
def contact():
    try:
        data = request.json

        # Validate required fields
        required_fields = ["fullName", "emailAddress", "messageSubject", "companyInfo"]
        for field in required_fields:
            if not data.get(field):
                return jsonify({"error": f"{field} is required"}), 400

        first_name = data.get("fullName")
        email = data.get("emailAddress")
        subject = data.get("messageSubject", "No subject provided")
        company = data.get("companyInfo", "Not specified")

        # Compose the email
        email_subject = f"Contact Form Message from {first_name}"
        body = f"""
        You have a new message from {first_name} ({email}):

        Company: {company}

        Subject: {subject}
        """

        msg = MIMEMultipart()
        msg["From"] = EMAIL_USER
        msg["To"] = EMAIL_USER
        msg["Subject"] = email_subject
        msg.attach(MIMEText(body, "plain"))

        # Connect to the email server
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(EMAIL_USER, EMAIL_PASS)
            server.sendmail(EMAIL_USER, EMAIL_USER, msg.as_string())

        return jsonify({"message": "Message sent successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host="0.0.0.0", port=port)
