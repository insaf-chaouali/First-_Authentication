🔐 Authentication System (Next.js + NestJS + PostgreSQL)
🚀 Frontend (Next.js + TypeScript)
Created signin and signup pages using React and TypeScript.

Connected forms to the backend using the fetch API.

Managed user input, form validation, and redirection after successful authentication.

Implemented automatic redirection to /signin as the default landing page.

🛠 Backend (NestJS)
Set up an authentication module with /signup and /login endpoints.

Used bcrypt to securely hash user passwords.

Created DTOs and added input validation for request handling.

🗄 Database (PostgreSQL + TypeORM)
Created the User entity to represent users in the system.

Configured the PostgreSQL connection via TypeORM.

Generated and executed migrations to create the users table.

✅ Testing (Postman)
Tested registration and login endpoints using Postman.

Verified correct database storage and proper JSON responses.

🔗 Integration
Successfully integrated frontend and backend.

After a successful signup/login, users are automatically redirected to the /home page.
