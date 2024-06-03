# MERN-CRUD
## Project Structure

- **MERN-CRUD/**
  - **backend/**
    - **model/**
      - Model.js
    - **route/**
      - Route.js
    - **controller/**
      - Controller.js
    - index.js
    - package.json
    - .env
  - **frontend/**
    - **public/**
      - (public files)
    - **src/**
      - (source files)
    - package.json
  - README.md
  - package.json


This is a simple web application demonstrating CRUD (Create, Read, Update, Delete) operations using the MERN stack (MongoDB, Express, React, Node.js).

## Technologies Used

- **MongoDB Atlas:** Cloud-hosted MongoDB database service.
- **Express.js:** Web application framework for Node.js.
- **React.js:** JavaScript library for building user interfaces.
- **Node.js:** JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Axios:** Promise-based HTTP client for the browser and Node.js.
- **REST API:** Used for communication between frontend and backend.

## Features

- **Create:** Add new records to the database.
- **Read:** Display records from the database.
- **Update:** Edit existing records.
- **Delete:** Remove records from the database.

## Installation and Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Rishu18D/MERN-CRUD.git
    cd MERN-CRUD
    ```

2. **Backend setup:**
    ```bash
    cd backend
    npm install
    ```

3. **Frontend setup:**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Environment variables:**

    Create a `.env` file in `backend` directorie and add the necessary environment variables:

    **Backend `.env` file:**
    ```
    MONGO_URI=your_mongo_db_connection_string
    PORT=9000
    ```

5. **Running the application:**

    In one terminal, start the backend server:
    ```bash
    cd backend
    npm start
    ```

    In another terminal, start the frontend development server:
    ```bash
    cd frontend
    npm start
    ```

## Usage

1. Navigate to `http://localhost:3000` in your browser.
2. Use the form to add data.
3. View, edit, or delete records in the table.

## Contributing

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License.


