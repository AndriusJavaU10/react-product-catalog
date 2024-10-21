# Product catalog Frontend

This is a Spring Boot project that implements a REST API with JWT-based authentication. The project uses MySQL as the database and Maven as the build tool. It supports three user roles: user, moderator, and admin.


## Content
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [API_Endpoints](#api_endpoints)
- [Authentication](#authentication)
- [Technology](#technology)
- [Developers](#developers)

## Features
- User role: Can view products.
- Moderator role: Can view and modify products.
- Admin role: Has full access to all actions (CRUD operations).
  
## Prerequisites
Before you begin, ensure you have the following installed:
- Java JDK 17+
- Maven 3.6+
- MySQL (Ensure you have a running MySQL instance)
- Git (to clone the repository)

## Installation

To run the project on your local machine, follow these steps:

### 1. **Copy the project** from GitHub:

 git clone https://github.com/AndriusJavaU10/react-product-catalog.git
 cd project-name

### 2. Set up the MySQL database

1. Create a new MySQL database:  CREATE DATABASE spring_boot_db;
2. Create a user and grant privileges: CREATE USER 'springuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON spring_boot_db.* TO 'springuser'@'localhost';
FLUSH PRIVILEGES;

### 4. Install dependencies:
Use Maven to install all required dependencies. Run the following command:
```bash
npm install
```
### 5. Running the Application
```bash
npm start
```
This command will launch the React application and it will be available in the browser via http://localhost:3000.
### 6.Check that both frontend and backend are working:
- In the browser, the backend must be accessible via http://localhost:8080 (or another port).
- The frontend must be accessible via http://localhost:3000.The frontend must be accessible via http://localhost:3000.

### 7.Additional actions
- **Frontend-backend API integration**:
  -  Make sure the frontend is sending requests to the correct backend server address, e.g.:
``javascript
const API_URL = "http://localhost:8080/api/";
``
##### This is the standard way to clone, run, and work with a Spring Boot backend and React frontend in a Visual Studio Code environment.



##  API_Endpoints

|Method|Endpoint                | Role             | Description                 |
|------|------------------------|------------------|-----------------------------|
|GET   |	`/api/products`       | User, Mod, Admin |	View all products          |
|POST  |	`/api/products`       | Mod, Admin       |	Add a new product          |
|PUT   |	`/api/products/{id}`  | Mod, Admin       |	Update an existing product |
|DELETE|	`/api/products/{id}`  | Admin            |	Delete a product           |

|Method|Endpoint                | Role              | Description                  |
|------|------------------------|-------------------|------------------------------|
|GET   |	`/api/customers`       | Admin            |	View all customers           |
|POST  |	`/api/customers`       | User, Mod, Admin |	Add a new customers          |
|PUT   |	`/api/customers/{id}`  | User, Mod, Admin |	Update an existing customers |
|DELETE|	`/api/customers/{id}`  | Admin            |	Delete a customers           |


## Authentication
The API uses JWT (JSON Web Token) for authentication. You need to authenticate yourself to get a JWT token, which will be used for protected endpoints.
### Sign Up
- Endpoint: /api/auth/signup
- Method: POST
- Payload:
```json
{
  "username": "exampleUser",
  "email": "user@example.com",
  "password": "examplePassword"
}
```
### Sign In
- Endpoint: /api/auth/signin
- Method: POST
- Payload:
```json
{
  "username": "exampleUser",
  "password": "examplePassword"
}
```
### Example Response
```json
{
  "id": 1,
  "username": "exampleUser",
  "email": "user@example.com",
  "roles": ["ROLE_USER"],
  "tokenType": "Bearer",
  "accessToken": "your-jwt-token"
}
```
Use this accessToken to authenticate API requests by adding it to the Authorization header like so:
```makefile
Authorization: Bearer your-jwt-token
```

## Technology
- Java: Version 17
- Spring Boot: Version 3.3.4
- Database: MySQL
- Spring Security
- Spring Web
- SpringDoc OpenAPI Starter WebMVC UI
- Jackson Databind. General data-binding functionality for Jackson: works on core streaming API

## Developers
- Name: Andrius Rikteris
- Email: andrius.rikteris@codeacademylt.onmicrosoft.com
- GitHub: [AndriusJavaU10](https://github.com/AndriusJavaU10/spring-react-product-catalog)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
  
