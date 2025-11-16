# Student Management System - CRUD Operations

A full-stack web application for managing student records with Create, Read, Update, and Delete (CRUD) operations.

## 🚀 Features

- ✅ **Create** - Add new students with validation
- ✅ **Read** - View all students in a responsive table
- ✅ **Update** - Edit existing student information
- ✅ **Delete** - Remove students with confirmation dialog
- ✅ **Email Validation** - Prevents duplicate emails
- ✅ **Responsive Design** - Works on mobile and desktop devices
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Form Validation** - Required fields marked with asterisks

## 📁 Project Structure

```
Component-Demo-1/
├── backend/                 # Node.js + Express API
│   ├── server.js           # Main server file with all API routes
│   └── package.json        # Backend dependencies
│
├── frontend/               # React Application
│   ├── public/
│   │   └── index.html     # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── StudentForm.js      # Form component for add/edit
│   │   │   ├── StudentForm.css
│   │   │   ├── StudentList.js      # Table component for listing students
│   │   │   └── StudentList.css
│   │   ├── App.js         # Main React component
│   │   ├── App.css        # Main styles
│   │   ├── index.js       # React entry point
│   │   └── index.css
│   ├── package.json       # Frontend dependencies
│   └── .gitignore
│
└── README.md              # This file
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **UUID** - Unique ID generation
- **Body-parser** - Request body parsing

### Frontend
- **React 18** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling with modern features

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

To verify installation:
```bash
node --version
npm --version
```

## 🚦 Installation & Setup

### 1. Clone or Navigate to the Project

```bash
cd /Users/naveenkumar.yellared/Component-Demo-1
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm run dev
```

The backend server will start on **http://localhost:5000**

**Backend API Endpoints:**
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get single student
- `POST /api/students` - Create new student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

### 3. Frontend Setup

Open a **new terminal window** and run:

```bash
# Navigate to frontend directory
cd /Users/naveenkumar.yellared/Component-Demo-1/frontend

# Install dependencies
npm install

# Start the React development server
npm start
```

The frontend application will automatically open at **http://localhost:3000**

## 🎯 Usage

1. **Add a Student**: Fill in the form on the left side and click "Add Student"
2. **View Students**: All students are displayed in the table on the right
3. **Edit a Student**: Click the "✏️ Edit" button on any student row
4. **Delete a Student**: Click the "🗑️ Delete" button and confirm the deletion

## 📊 Student Data Model

```javascript
{
  id: string,              // Unique identifier (auto-generated)
  firstName: string,       // Required
  lastName: string,        // Required
  email: string,          // Required (must be unique)
  age: number,            // Optional
  course: string,         // Optional
  enrollmentDate: string  // Optional (YYYY-MM-DD format)
}
```

## 🔧 Configuration

### Backend Port
The backend runs on port 5000 by default. To change it, set the `PORT` environment variable:

```bash
# In backend/.env (create this file)
PORT=5000
```

### Frontend API URL
The frontend connects to the backend at `http://localhost:5000`. To change this, edit:

```javascript
// In frontend/src/App.js
const API_URL = 'http://localhost:5000/api/students';
```

## 📝 Sample Data

The backend comes with 2 sample students pre-loaded:
1. John Doe - Computer Science
2. Jane Smith - Mathematics

## 🚀 Running in Production

### Backend Production Build

```bash
cd backend
npm start  # Uses node instead of nodemon
```

### Frontend Production Build

```bash
cd frontend
npm run build

# The build folder will contain optimized production files
# Serve them with a static server like:
npm install -g serve
serve -s build
```

## 🗄️ Database Integration (Optional)

Currently, the application uses in-memory storage. To persist data, integrate a database:

### MongoDB Example:
```bash
npm install mongoose
```

### PostgreSQL Example:
```bash
npm install pg
```

Update `backend/server.js` to replace the in-memory `students` array with database queries.

## 🐛 Troubleshooting

### Backend won't start
- Ensure port 5000 is not being used by another application
- Check that all dependencies are installed: `npm install`

### Frontend can't connect to backend
- Verify backend is running on http://localhost:5000
- Check browser console for CORS errors
- Ensure `cors` package is installed in backend

### "Cannot find module" errors
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1400px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🎨 Customization

### Change Color Scheme
Edit the gradient colors in `frontend/src/App.css`:

```css
.App-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Modify Form Fields
Add or remove fields in `frontend/src/components/StudentForm.js`

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Development

### Running Backend Only
```bash
cd backend
npm run dev
```

### Running Frontend Only
```bash
cd frontend
npm start
```

### Testing API with curl

```bash
# Get all students
curl http://localhost:5000/api/students

# Create a student
curl -X POST http://localhost:5000/api/students \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Alice","lastName":"Johnson","email":"alice@example.com","age":21,"course":"Physics"}'

# Update a student
curl -X PUT http://localhost:5000/api/students/1 \
  -H "Content-Type: application/json" \
  -d '{"firstName":"John","lastName":"Doe","age":21}'

# Delete a student
curl -X DELETE http://localhost:5000/api/students/1
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📧 Support

If you encounter any issues, please check the troubleshooting section or create an issue.

---

**Happy Coding! 🎉**
