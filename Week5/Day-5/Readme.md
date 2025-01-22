# Node.js Login System with Passport.js and EJS

This project is a simple login and registration system built with **Node.js**, **Passport.js**, and **EJS** as the templating engine. It uses **session-based authentication** to manage user sessions securely.

This task is completed with this given tutorial [Node.js Easy Login](https://www.youtube.com/watch?v=-RCnNyD0L-s).

---

## Features

- **User Registration**: Allows users to create an account with their name, email, and password.
- **User Login**: Authenticates registered users using email and password.
- **Session Management**: Manages user sessions securely using `express-session`.
- **Flash Messages**: Displays feedback messages for login errors, successful registration, etc.
- **Logout Functionality**: Allows users to securely log out of the application.
- **Access Control**: Protects routes from unauthorized access.

---

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building the application.
- **Passport.js**: Authentication middleware.
- **EJS**: Templating engine for rendering views.
- **Bcrypt**: Library for hashing passwords.
- **dotenv**: For managing environment variables.
- **express-session**: Session middleware for storing user sessions.
- **express-flash**: Middleware for displaying flash messages.
- **method-override**: Middleware for handling HTTP verbs such as DELETE.

---

---

## File Structure

```
.
├── server.js              # Main server file
├── passport-config.js     # Passport.js configuration
├── views                  # EJS templates
│   ├── index.ejs          # Dashboard page (after login)
│   ├── login.ejs          # Login page
│   ├── register.ejs       # Registration page
├── .env                   # Environment variables (not included in repo)
├── package.json           # Node.js project metadata
└── package-lock.json      # Dependency lock file
```

---

## Usage

### Register a New User

1. Visit `/register`.
2. Enter your name, email, and password.
3. Click "Register" to create your account.

### Login

1. Visit `/login`.
2. Enter your registered email and password.
3. Click "Login" to access the dashboard.

### Logout

1. On the dashboard, click the "Logout" button to end your session.

---

## Code Overview

### server.js

- Sets up middleware like `express-session`, `passport.initialize`, and `passport.session`.
- Defines routes for registration, login, and logout.
- Protects routes using `checkAuthenticated` and `checkNotAuthenticated` functions.

### passport-config.js

- Configures Passport.js with a local strategy for authentication.
- Uses `bcrypt` to compare passwords securely.
- Handles serialization and deserialization of user objects for session management.

---
