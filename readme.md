# Firebase CRUD Project

A simple Node.js + Express CRUD application using Firebase Firestore.

## Features

* Add Users
* Edit Users
* Delete Users
* View All Users
* Firebase Firestore Integration
* Express Routing
* EJS Views

---

# Tech Stack

* Node.js
* Express.js
* Firebase Admin SDK
* Firestore Database
* EJS

---

# Project Structure

```bash
firebase/
│
├── controllers/
├── routes/
├── views/
├── public/
├── firebase.js
├── app.js
├── package.json
├── .env
└── serviceAccountKey.json
```

---

# Installation

## 1. Clone Repository

```bash
git clone https://github.com/mistha77/silverwink-firbase-project.git
```

## 2. Open Project Folder

```bash
cd silverwink-firbase-project
```

## 3. Install Dependencies

```bash
npm install
```

---

# Firebase Setup

1. Create Firebase Project
2. Enable Firestore Database
3. Generate Service Account Key
4. Download JSON file
5. Rename file to:

```bash
serviceAccountKey.json
```

6. Paste it into project root folder

---

# Run Project

```bash
npm run dev
```

or

```bash
node app.js
```

---

# Environment Variables

Create a `.env` file:

```env
PORT=3000
```

---

# Important

Do NOT upload these files to GitHub:

```bash
.env
serviceAccountKey.json
node_modules
```

Add them inside `.gitignore`

---

# Author

Mistha
