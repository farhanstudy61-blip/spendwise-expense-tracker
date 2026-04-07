from flask import Flask
from database import db
from routes.expense_routes import expense_bp
from flask_cors import CORS

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///expenses.db"

db.init_app(app)

CORS(app)

app.register_blueprint(expense_bp)

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)