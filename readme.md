# 💬 quick-Chat

A realtime chat app built with **Node.js**, **Express**, **MongoDB**, **Cloudinary**, and **React + Vite**.  
Powered by **Socket.IO** for realtime messaging and online presence.

---

## 🚀 Features
- 🔐 JWT authentication (signup/login)
- 🖼️ Profile updates with Cloudinary uploads  
- 💬 One-to-one chat (text + image)  
- 🟢 Realtime online status  
- 📩 Unseen message count & seen tracking  

---

## 🧩 Tech Stack
**Frontend:** React (Vite), React Router, TailwindCSS, Axios, Socket.IO Client  
**Backend:** Node.js, Express, MongoDB (Mongoose), Socket.IO, Cloudinary  
**Dev Tools:** Nodemon, Vite  

---

## ⚙️ Environment Variables

### Backend → `.env`
```env
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
CLOUDINARY_CLOUD_NAME=<your-cloud-name>
CLOUDINARY_API_KEY=<your-api-key>
CLOUDINARY_API_SECRET=<your-api-secret>
PORT=5000
```
Frontend → .env
env
Copy code
```
VITE_BACKEND_URL=http://localhost:5000
```
🧠 Setup & Run Locally
Backend
bash
Copy code```
cd backend
npm install
npm run dev```
Frontend
bash
Copy code```
cd frontend
npm install
npm run dev
Then open http://localhost:5173```

---

## 🔌 API Routes
Auth

POST /api/auth/signup – Register

POST /api/auth/login – Login

PUT /api/auth/update-profile – Update profile

GET /api/auth/check – Verify token

---

Messages

GET /api/messages/users – Sidebar users + unseen counts

GET /api/messages/:id – Fetch conversation

POST /api/messages/:id – Send message

PUT /api/messages/mark/:id – Mark message as seen

---

## ☁️ Realtime & Uploads
Socket.IO → realtime messaging and user presence

Cloudinary → handles profile pictures and image messages

---
## 🌍 Deployment
Frontend → Vercel

Backend → Render / Railway / VPS

Update VITE_BACKEND_URL to your backend’s production URL
---

## 🤝 Contribution
Pull requests are welcome 💪
-Future improvements:

Pagination for messages

JWT-secured sockets

Redis adapter for scaling
---

## 📜 License
No license yet — add one if open-sourcing.