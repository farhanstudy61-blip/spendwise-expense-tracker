from marshmallow import Schema, fields

class ExpenseSchema(Schema):

    title = fields.String(required=True)
    amount = fields.Float(required=True)
    category = fields.String()
    date = fields.Date()