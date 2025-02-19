# CRUD Backend Using Node.js, Express.js and express-validator

This project is a simple CRUD (Create, Read, Update, Delete) backend API built with Node.js and Express.js. It serves as a practice project for handling basic API operations and managing user data. The backend uses an in-memory array to store user objects, auto-generates unique IDs for each user using the `uuidv4` library, and includes validations using `express-validator`.

---

## Features

- **Create User**: Add a new user with `firstName`, `lastName`, and `age`. The `id` is auto-generated on the backend, and validations ensure proper input.
- **Read Users**: Retrieve all users or a specific user by ID.
- **Update User**: Update user details by ID using a `PATCH` route.
- **Delete User**: Remove a user by ID.

---

## Technology Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Framework for building web applications and APIs.
- **uuidv4**: For generating unique IDs.
- **express-validator**: For input validations.

---

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone <https://github.com/Netixsol-Innovator-Internship/Hassan-Mujahid/tree/main/Week5/Day-2/Express-Validation>
   cd <Express-Validation>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the server**:

   ```bash
   npm start (runs nodemon app.js)
   ```

4. The server will start at `http://localhost:8000` (default port).

---

## API Endpoints

### Base URL: `http://localhost:8000`

#### 1. **Create User**

- **Endpoint**: `POST /users`
- **Description**: Adds a new user with validations.
- **Request Body** (JSON):
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "age": 25
  }
  ```
- **Validations**:
  - `firstName`: Must be a non-empty string.
  - `lastName`: Must be a non-empty string.
  - `age`: Must be a number greater than 0.
- **Response** (Example):
  ```json
  {
    "id": "unique-id",
    "firstName": "John",
    "lastName": "Doe",
    "age": 25
  }
  ```

#### 2. **Read All Users**

- **Endpoint**: `GET /users`
- **Description**: Retrieves all users.
- **Response** (Example):
  ```json
  [
    {
      "id": "unique-id",
      "firstName": "John",
      "lastName": "Doe",
      "age": 25
    }
  ]
  ```

#### 3. **Read Single User**

- **Endpoint**: `GET /user/:id`
- **Description**: Retrieves a user by their ID.
- **Response** (Example):
  ```json
  {
    "id": "unique-id",
    "firstName": "John",
    "lastName": "Doe",
    "age": 25
  }
  ```

#### 4. **Update User**

- **Endpoint**: `PATCH /user/:id`
- **Description**: Updates user details by ID.
- **Request Body** (JSON):
  ```json
  {
    "firstName": "Jane",
    "lastName": "Doe",
    "age": 30
  }
  ```
- **Validations**:
  - `firstName`: Must be a non-empty string (if provided).
  - `lastName`: Must be a non-empty string (if provided).
  - `age`: Must be a number greater than 0 (if provided).
- **Response** (Example):
  ```json
  {
    "id": "unique-id",
    "firstName": "Jane",
    "lastName": "Doe",
    "age": 30
  }
  ```

#### 5. **Delete User**

- **Endpoint**: `DELETE /user/:id`
- **Description**: Deletes a user by their ID.
- **Response**:
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

---

## Testing the API with Postman

1. Create requests for the endpoints mentioned above.
2. Provide the necessary request body or parameters for each endpoint.
3. Send requests and view responses.

---

## Acknowledgments

- [Node.js Documentation](https://nodejs.org/)
- [Express.js Documentation](https://expressjs.com/)
- [uuid Documentation](https://www.npmjs.com/package/uuid)
- [express-validator Documentation](https://express-validator.github.io/)
