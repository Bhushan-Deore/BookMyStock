# 📈 BookMyStock

BookMyStock is a full-stack MERN application designed to help users manage and track their stock portfolios efficiently. The platform includes a user-facing frontend, an admin dashboard, and a backend API, all integrated to provide a seamless and secure experience.

---

## 🚀 Live Demo

- 🌐 Frontend: https://main.df2o8s39u2pcw.amplifyapp.com/
- 📊 Dashboard: https://main.d2zver9i797lx.amplifyapp.com/
- ⚙️ Backend API: https://bookmystock.onrender.com
> ⚠️ Note: The app is hosted on free infrastructure, so the first load after login/signup may take a few seconds as the Backend server wakes up.

---

## 🛠️ Tech Stack

**Frontend & Dashboard:**
- React (Vite)
- React Router
- Axios
- CSS / Flexbox / Grid

**Backend:**
- Node.js
- Express.js
- MongoDB
- JWT Authentication

**Deployment:**
- AWS Amplify (Frontend & Dashboard)
- Render (Backend)

---

## 🔐 Features

- 🔑 Secure user authentication using JWT and HTTP-only cookies  
- 📊 Interactive dashboard for managing and viewing stock-related data  
- 🧑‍💼 Admin panel for better control and management  
- 🔒 Protected routes to restrict unauthorized access  
- 🌐 Cross-origin API integration with proper CORS configuration  
- 📱 Fully responsive design for desktop, tablet, and mobile devices  
- ⚙️ Centralized API configuration using environment variables  

---

## 🧠 Key Learnings

- Implemented secure authentication using JWT and cookies  
- Solved cross-origin issues (CORS + SameSite cookie policies)  
- Handled deployment across multiple platforms (Amplify & Render)  
- Built scalable architecture with separate frontend and dashboard  
- Debugged real-world production issues and improved app reliability  

---

## 📂 Project Structure

BookMyStock/
│
├── frontend/ # User-facing React app
├── dashboard/ # Admin dashboard (React)
├── backend/ # Node.js + Express API


---

## ⚙️ Environment Variables

Create a `.env` file in frontend and dashboard:
VITE_API_URL=YOUR_BACKEND_API

Backend `.env`:
-- MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000


---

## 🧪 Running Locally

```bash
# Clone repository
git clone https://github.com/Bhushan-Deore/BookMyStock.git

# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
npm install
npm run dev

# Dashboard
cd dashboard
npm install
npm run dev
