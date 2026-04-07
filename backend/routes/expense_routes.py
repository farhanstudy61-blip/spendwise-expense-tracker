from flask import Blueprint, request, jsonify
from models import Expense
from database import db
from schemas import ExpenseSchema

expense_bp = Blueprint("expense_bp", __name__)

schema = ExpenseSchema()

@expense_bp.route("/expenses", methods=["POST"])
def add_expense():

    data = request.json

    errors = schema.validate(data)

    if errors:
        return jsonify(errors), 400

    expense = Expense(
        title=data["title"],
        amount=data["amount"],
        category=data.get("category"),
        date=data.get("date")
    )

    db.session.add(expense)
    db.session.commit()

    return jsonify({"message": "Expense added"})
    

@expense_bp.route("/expenses", methods=["GET"])
def get_expenses():

    expenses = Expense.query.all()

    result = []

    for e in expenses:
        result.append({
            "id": e.id,
            "title": e.title,
            "amount": e.amount,
            "category": e.category,
            "date": str(e.date)
        })

    return jsonify(result)
@expense_bp.route("/expenses/<int:id>", methods=["DELETE"])
def delete_expense(id):

    expense = Expense.query.get(id)

    if not expense:
        return jsonify({"error": "Expense not found"}), 404

    db.session.delete(expense)
    db.session.commit()

    return jsonify({"message": "Expense deleted"})