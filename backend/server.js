const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage (replace with database in production)
let students = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: 20,
    course: 'Computer Science',
    enrollmentDate: '2023-09-01'
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    age: 22,
    course: 'Mathematics',
    enrollmentDate: '2023-09-01'
  }
];

// Routes

// GET all students
app.get('/api/students', (req, res) => {
  res.json({
    success: true,
    data: students,
    count: students.length
  });
});

// GET single student by ID
app.get('/api/students/:id', (req, res) => {
  const student = students.find(s => s.id === req.params.id);
  
  if (!student) {
    return res.status(404).json({
      success: false,
      message: 'Student not found'
    });
  }
  
  res.json({
    success: true,
    data: student
  });
});

// POST create new student
app.post('/api/students', (req, res) => {
  const { firstName, lastName, email, age, course, enrollmentDate } = req.body;
  
  // Validation
  if (!firstName || !lastName || !email) {
    return res.status(400).json({
      success: false,
      message: 'Please provide firstName, lastName, and email'
    });
  }
  
  // Check if email already exists
  const existingStudent = students.find(s => s.email === email);
  if (existingStudent) {
    return res.status(400).json({
      success: false,
      message: 'Student with this email already exists'
    });
  }
  
  const newStudent = {
    id: uuidv4(),
    firstName,
    lastName,
    email,
    age: age || null,
    course: course || '',
    enrollmentDate: enrollmentDate || new Date().toISOString().split('T')[0]
  };
  
  students.push(newStudent);
  
  res.status(201).json({
    success: true,
    message: 'Student created successfully',
    data: newStudent
  });
});

// PUT update student
app.put('/api/students/:id', (req, res) => {
  const { firstName, lastName, email, age, course, enrollmentDate } = req.body;
  const studentIndex = students.findIndex(s => s.id === req.params.id);
  
  if (studentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Student not found'
    });
  }
  
  // Check if email is being changed and if it already exists
  if (email && email !== students[studentIndex].email) {
    const existingStudent = students.find(s => s.email === email);
    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: 'Student with this email already exists'
      });
    }
  }
  
  students[studentIndex] = {
    ...students[studentIndex],
    firstName: firstName || students[studentIndex].firstName,
    lastName: lastName || students[studentIndex].lastName,
    email: email || students[studentIndex].email,
    age: age !== undefined ? age : students[studentIndex].age,
    course: course !== undefined ? course : students[studentIndex].course,
    enrollmentDate: enrollmentDate || students[studentIndex].enrollmentDate
  };
  
  res.json({
    success: true,
    message: 'Student updated successfully',
    data: students[studentIndex]
  });
});

// DELETE student
app.delete('/api/students/:id', (req, res) => {
  const studentIndex = students.findIndex(s => s.id === req.params.id);
  
  if (studentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Student not found'
    });
  }
  
  const deletedStudent = students.splice(studentIndex, 1)[0];
  
  res.json({
    success: true,
    message: 'Student deleted successfully',
    data: deletedStudent
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

