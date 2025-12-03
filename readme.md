🚀 MERN Expense Tracker — Full Setup & Deployment Guide

🛠 Technologies Used
Frontend

React, Vite, Axios, Context API, TailwindCSS, Recharts

Backend

Node.js, Express, Mongoose, JWT, Bcrypt, CORS

📁 Project Structure
root/
 ├── client/                # React frontend
 ├── server/                # Node + Express backend
 ├── package.json           # contains concurrently script
 ├── .gitignore
 ├── README.md

🛠️ Prerequisites

Node.js v16+

npm or yarn

MongoDB Atlas (recommended)

Environment Variables (explained below)

🔐 Environment Variables Setup

Environment variables are NOT committed to GitHub.
You must create them manually after cloning.

📌 Backend (server)

Create server/.env:

MONGO_URL=your_mongodb_connection_url
JWT_SECRET=your_jwt_secret_key
PORT=5000

📌 Frontend (client)

Create client/.env:

VITE_API_BASE_URL=http://localhost:5000/api


(After deployment, change this to your live backend URL.)

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

2️⃣ Install Dependencies (Root + Client + Server)
Install root packages (for concurrently)
npm install

Install backend dependencies
cd server
npm install

Install frontend dependencies
cd ../client
npm install

▶️ Running the Project (Concurrently)

You can start both client + server together with one command.
Root package.json includes:
"scripts": {
  "dev": "concurrently \"npm run server\" \"npm run client\"",
  "server": "cd server && npm run dev",
  "client": "cd client && npm run dev"
}

Run project:
npm run dev

🤝 Contribute & Share Suggestions

💡 Have ideas, improvements, or feature suggestions?
📩 Feel free to open an issue or submit a pull request — contributions are always welcome!