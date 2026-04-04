# Finance Backend API

## 📌 Overview

This project is a backend system for a Finance Dashboard.
It provides APIs for managing users, financial transactions, and dashboard analytics with role-based access control.

---

##  Features

* JWT Authentication (Login/Register)
* Role-Based Access Control (Admin, Analyst, Viewer)
* Transaction Management (CRUD)
* Dashboard APIs (Summary & Category-wise data)
*  Filtering (type, category)
*  Protected Routes using Middleware

---

##  Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs

---

##  Setup Instructions

### 1️ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/finance-backend.git
cd finance-backend
```

### 2️ Install Dependencies

```bash
npm install
```

### Create `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

###  Run Server

```bash
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

##  Authentication

### Register

**POST** `/auth/register`

```json
{
  "name": "Admin",
  "email": "admin@gmail.com",
  "password": "123456",
  "role": "admin"
}
```

---

### Login

**POST** `/auth/login`

```json
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "token": "JWT_TOKEN"
}
```

---

##  API Endpoints

### Users (Admin only)

* **GET** `/users` → Get all users
* **PATCH** `/users/:id` → Update user

---

### Transactions

* **POST** `/transactions` → Create transaction (Admin only)
* **GET** `/transactions` → Get all transactions
* **PUT** `/transactions/:id` → Update transaction (Admin only)
* **DELETE** `/transactions/:id` → Delete transaction (Admin only)

Query Params:
/transactions?type=income
/transactions?category=food




### 📊 Dashboard

* **GET** `/dashboard/summary` → Income, Expense, Balance
* **GET** `/dashboard/category` → Category-wise totals

---

##  Authorization

Pass JWT token in headers:

```
Authorization: Bearer YOUR_TOKEN
```

---

##  Roles

| Role    | Permissions                |
| ------- | -------------------------- |
| Admin   | Full access (CRUD + Users) |
| Analyst | Read + Dashboard           |
| Viewer  | View only                  |

---

##  Error Handling

* 401 → Unauthorized (No/Invalid Token)
* 403 → Forbidden (Role not allowed)
* 404 → Not Found
* 400 → Bad Request

---

##  Deployment

This backend can be deployed using:

* Render 



---

## 📄 Notes

* Focus is on clean API design, access control, and data handling

---

##Author

**Kunal Gautam**

---
