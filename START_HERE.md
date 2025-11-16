# 🚀 Quick Start Guide

Your Student CRUD application is fully set up and ready to run!

## ✅ Installation Complete

- ✅ Node.js v25.2.0 installed
- ✅ npm v11.6.2 installed
- ✅ Backend dependencies installed (101 packages)
- ✅ Frontend dependencies installed (1327 packages)

## 🎯 How to Run the Application

You need to run TWO terminal windows simultaneously:

### Terminal 1: Start Backend Server

```bash
cd /Users/naveenkumar.yellared/Component-Demo-1/backend
npm run dev
```

You should see:
```
Server is running on port 5000
```

### Terminal 2: Start Frontend Application

Open a **NEW** terminal window and run:

```bash
cd /Users/naveenkumar.yellared/Component-Demo-1/frontend
npm start
```

The frontend will:
- Automatically open your browser at http://localhost:3000
- Connect to the backend at http://localhost:5000

## 🎉 That's It!

Once both servers are running:
1. The browser will open automatically
2. You'll see the Student Management System interface
3. You can immediately start adding, editing, and deleting students!

## 📊 What You Can Do

- **Add Students**: Fill the form on the left and click "Add Student"
- **View Students**: See all students in the table on the right
- **Edit Students**: Click the ✏️ Edit button on any student
- **Delete Students**: Click the 🗑️ Delete button (with confirmation)

## 🛑 To Stop the Servers

In each terminal window, press: `Ctrl + C`

## 🔧 Troubleshooting

### Port Already in Use
If you get "port already in use" error:
- Backend: Change port in `backend/server.js` (line 6)
- Frontend: Change port by setting `PORT=3001 npm start`

### Can't Connect to Backend
Make sure the backend is running first before starting the frontend!

---

**Need help?** Check the main README.md for more detailed information!

