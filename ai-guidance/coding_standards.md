# Coding Standards

While developing this project, I tried to follow simple coding standards to keep the code clean and easy to understand.

## Backend (Flask)
- Routes are separated using Flask Blueprints.
- Database models are defined in a separate models file.
- Input validation is handled before storing data in the database.
- Clear JSON responses are returned from API endpoints.

## Frontend (React)
- Components are separated into reusable files.
- The dashboard logic is handled inside the main page component.
- API requests are managed through a dedicated API file.
- CSS is organized to maintain consistent layout and spacing.

## General Practices
- Descriptive variable names are used.
- Code is organized into folders for better readability.
- Repetitive logic is avoided where possible.
- Components are kept small and focused on a single responsibility.

These practices help make the project easier to maintain and understand.