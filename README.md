Frontend (Next.js):

Created signin and signup pages using React and TypeScript.

Connected forms to backend via fetch API.

Handled user input, form validation, and redirection after success.

Added redirection to make /signin the first page that opens.

Backend (NestJS):

Set up an authentication module with signup and login endpoints.

Used bcrypt to hash passwords securely.

Implemented DTOs and validation for incoming requests.

Database (PostgreSQL with TypeORM):

Created User entity.

Configured database connection using TypeORM.

Ran migrations to create the user table in PostgreSQL.

Testing (Postman):

Successfully tested registration and login using Postman.

Verified that data is stored correctly and responses are accurate.

Integration:

Connected frontend and backend.

On successful signup/login, users are redirected to the /home page.
