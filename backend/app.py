from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
from flask_cors import CORS

# Load environment variables from .env file
load_dotenv()

# Initialize the Flask app
app = Flask(__name__)

# Set up CORS to allow local development and your deployed front-end
CORS(app, resources={r"/*": {"origins": ["https://kahawa-ke.netlify.app", "http://localhost:5173", "http://localhost:5174"]}})

# Load environment variables for email credentials
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "API is working!"}), 200

@app.route("/contact", methods=["POST"])
def contact():
    try:
        # Get the JSON data from the request body
        data = request.json

        # Validate required fields in the request data
        required_fields = ["fullName", "emailAddress", "messageSubject", "companyInfo"]
        for field in required_fields:
            if not data.get(field):
                return jsonify({"error": f"{field} is required"}), 400

        # Extract the data from the request
        first_name = data.get("fullName")
        email = data.get("emailAddress")
        subject = data.get("messageSubject", "No subject provided")
        company = data.get("companyInfo", "Not specified")

        # Compose the email content
        email_subject = f"Contact Form Message from {first_name}"
        body = f"""
        You have a new message from {first_name} ({email}):

        Company: {company}

        Subject: {subject}
        """

        # Create the email message
        msg = MIMEMultipart()
        msg["From"] = EMAIL_USER
        msg["To"] = EMAIL_USER  # Send the email to the same address
        msg["Subject"] = email_subject
        msg.attach(MIMEText(body, "plain"))

        # Connect to the SMTP server and send the email
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(EMAIL_USER, EMAIL_PASS)
            server.sendmail(EMAIL_USER, EMAIL_USER, msg.as_string())

        # Return a success response
        return jsonify({"message": "Message sent successfully!"}), 200

    except Exception as e:
        # Return error if any exception occurs
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    # Get the port from environment variables or use 5000 by default
    port = int(os.environ.get("PORT", 5000))
    
    # Run the Flask app
    app.run(debug=True, host="0.0.0.0", port=port)
