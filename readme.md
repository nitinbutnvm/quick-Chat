🚀 quick-Chat

A realtime chat app built with Node.js, Express, MongoDB, Cloudinary, Socket.IO, and a React + Vite frontend.

✨ Features

JWT-based user authentication (signup/login)

Profile updates with Cloudinary image uploads

One-to-one messaging (text or image)

Realtime chat and online presence using Socket.IO

Unseen message counts + seen message tracking

🧩 Tech Stack

Backend: Node.js, Express, MongoDB (Mongoose), Socket.IO, Cloudinary
Frontend: React (Vite), React Router, Axios, Socket.IO Client, TailwindCSS
Dev Tools: nodemon, vite

📁 Project Structure
quick-chat/
│
├── backend/
│   ├── controllers/    # auth & message logic
│   ├── models/         # Mongo schemas
│   ├── routes/         # Express routes
│   ├── middleware/     # JWT auth middleware
│   ├── lib/            # DB & Cloudinary config
│   ├── server.js       # main entry with Socket.IO setup
│
└── frontend/
    ├── src/
    │   ├── context/    # Auth & Chat contexts
    │   ├── components/ # UI components
    │   └── App.jsx     # routing setup


⚙️ Environment Variables
Backend (backend/.env):
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
CLOUDINARY_CLOUD_NAME=<cloudinary-name>
CLOUDINARY_API_KEY=<cloudinary-key>
CLOUDINARY_API_SECRET=<cloudinary-secret>
PORT=5000

Frontend (frontend/.env):

VITE_BACKEND_URL=http://localhost:5000

🧠 Setup & Run Locally
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev


Visit 👉 http://localhost:5173

🔌 API Overview
Auth Routes

POST /api/auth/signup – Create account

POST /api/auth/login – Login user

PUT /api/auth/update-profile – Update user info

GET /api/auth/check – Verify token

Message Routes

GET /api/messages/users – Fetch sidebar users + unseen counts

GET /api/messages/:id – Get conversation

POST /api/messages/:id – Send message

PUT /api/messages/mark/:id – Mark message as seen

🌩️ Realtime & Cloudinary
Socket.IO enables live chat + online user tracking

Cloudinary handles image uploads for both profile pics & message attachments


🌍 Deployment
Frontend deploys easily to Vercel

Backend runs fine on Render, Railway, or VPS

Update VITE_BACKEND_URL in the frontend .env to match your deployed backend URL


🤝 Contribution
Pull requests are welcome — possible enhancements:

Pagination for messages

Socket authentication via JWT

Redis adapter for multi-instance scaling

📜 License
No license specified. Add one if you plan to open-source it.