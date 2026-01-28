# Task Manager – MERN Stack Application

A full-stack Task Management application built using the **MERN stack**.  
This project allows users to create, update, delete, and manage tasks with real-time database storage and full deployment.

---

## 🚀 Live Project

- **Frontend (Vercel):** https://your-frontend-link.vercel.app  
- **Backend (Render):** https://task-manager-1-w5e9.onrender.com  

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas (Free Tier)

---

## ✨ Features

- Create new tasks
- View all tasks
- Update tasks
- Delete tasks
- Change task status (Pending / Completed)
- Form validation
- RESTful API architecture
- Environment variable usage
- Cloud deployment

---

## 📁 Project Structure

```
task-manager
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── app.js
│   └── .env
│
└── frontend
    ├── src
    │   ├── Task.jsx
    │   ├── main.jsx
    │   └── styles
    └── .env
```

---

## ⚙️ Environment Variables

### Backend `.env`

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/taskmanager
```

### Frontend `.env`

```
VITE_API_URL=https://task-manager-1-w5e9.onrender.com/api
```

> ⚠️ `.env` files are not committed to GitHub for security reasons.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create new task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

---

## 🖥 Local Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/task-manager.git
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:
```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## ☁️ Deployment

- Backend deployed on Render
- Frontend deployed on Vercel
- Database hosted on MongoDB Atlas

The application is fully cloud deployed and production ready.

---

## 📚 Learning Outcomes

- MERN stack development
- REST API design
- MongoDB schema modeling
- Environment variable handling
- Frontend–backend integration
- Full-stack deployment

---

## 👨‍💻 Author

**Vansh Tyagi**  
B.Tech CSE (AI/ML)  
MERN Stack Developer

---

## 📄 License

This project is created for learning and educational purposes.

---

⭐ If you found this project helpful, please give it a star on GitHub!
