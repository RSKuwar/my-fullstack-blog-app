![Screenshot (17)](https://github.com/user-attachments/assets/c7c87e3e-ce12-40c4-9826-80d2f117d957)![Screenshot (19)](https://github.com/user-attachments/assets/30209199-0529-4ee0-99e7-cb6a75e082b6)# 📝 MERN Blog Application

A fullstack Blog Application built with the **MERN stack** (MongoDB, Express, React, Node.js) that allows users to register, log in, create, view, and manage blogs. Users can see their own blogs, edit or delete them, and view others' blogs as well.

---

## 🌐 Live Demo

🔗 [Live App](https://blog-frontend-18ys.onrender.com)

**Test Login Credentials:**

- Email: `rinku@gmail.com`  
- Password: `123456`

---

## 🧰 Tech Stack

### Frontend

- React.js (with Vite)
- React Router DOM
- Redux Toolkit
- Material UI (MUI)
- Axios
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- Bcrypt
- Dotenv
- CORS, Morgan
- Nodemon (Dev)

---
Backend Setup
npm install express mongoose colors morgan cors dotenv nodemon bcrypt
## 📁 Project Structure

Start backend server:
npm run server

 Frontend Setup
cd frontend
npm install
npm install @reduxjs/toolkit react-redux axios @mui/material @mui/icons-material react-router-dom react-hot-toast

Start frontend:
npm run dev

🔐 Features
User Authentication (Login & Register)
Create Blog
View all blogs
View personal blogs
Edit and Delete blog (only own blogs)
Beautiful UI with MUI
Notifications with React Hot Toast


📸 Screenshots
(Add screenshots here if needed)

👨‍💻 Author
Rohit Kuwar
GitHub: RSKuwar



```bash
my-fullstack-blog-app/
├── controllers/
├── models/
├── routes/
├── .env
├── package.json (Backend)
├── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── axios.js
│   ├── public/
│   ├── index.html
│   ├── package.json (Frontend)
│   └── vite.config.js
