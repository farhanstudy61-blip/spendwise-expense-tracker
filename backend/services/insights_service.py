def spending_insight(expenses):

    total = sum([e.amount for e in expenses])

    if total > 5000:
        return "Your spending is high this week"

    return "Your spending looks balanced"