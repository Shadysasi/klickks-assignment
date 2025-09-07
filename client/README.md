# Klickks Assignment Reference Document

## Login & Logout Flow in React.js & Node.js

## 🔹 Project Overview

You will build a **simple authentication system** with these features:

1. **Register (Sign Up):** User creates account with email & password.
2. **Login:** User logs in using registered credentials.
3. **Session:** Stay logged in with cookies/session.
4. **Logout:** Clear session & redirect to login.
5. **:** Protected `/dashboard` route only accessible when logged in.

---

## 🛠 Tech Stack

- **Frontend:** React.js (with fetch/axios for API calls)
- **Backend:** Node.js + Express.js
- **Database:** SQLite (lightweight, file-based DB)
- **Password Hashing:** bcrypt
- **Session Handling:** express-session + cookie-parser

---

## 📂 Project Structure

```
project-root/
│── server/
│   ├── server.js
│   ├── config/
│   │   ├── database.js
│   ├── controllers/
│   │   ├── authController.js
│   ├── routes/
│   │   ├── auth.js
│   ├── package.json
│
│── client/
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── navbar.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   ├── package.json
│
│── README.md

```

---

## ⚙️ Step 1: Backend Setup (Node.js + Express)

### Install dependencies

```bash
mkdir backend && cd backend
npm init -y
npm install express sqlite3 bcrypt express-session cookie-parser cors

```

### `database.js` (Database Setup)

### `server.js` (Main Backend File)

---

## ⚙️ Step 2: Frontend Setup (React.js)

### Install dependencies

```bash
npx create-react-app client
cd frontend
npm install axios

```

### `App.jsx`

### `Navbar.jsx`

### `Register.jsx`

### `Login.jsx`

### `Dashboard.jsx`

---

## 📖 README.md (Example)

```markdown
# React.js & Node.js Login/Logout Flow (SQLite)

## 🚀 Features
- User Registration (email, password)
- Login with sessions (cookie-based auth)
- Stay logged in until logout
- Logout & clear session
- SQLite database with password hashing

## 🛠 Setup & Run
### Backend
```bash
cd server
npm install
npm start

```

### Frontend

```bash
cd client
npm install
npm run dev

```

## Database

SQLite database file: `database.db` created automatically.