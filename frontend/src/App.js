import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

const API_URL = 'http://localhost:5000/api/students';

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setStudents(response.data.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch students. Make sure the backend is running.');
      console.error('Error fetching students:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateStudent = async (studentData) => {
    try {
      const response = await axios.post(API_URL, studentData);
      setStudents([...students, response.data.data]);
      setError('');
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create student');
      console.error('Error creating student:', err);
      return false;
    }
  };

  const handleUpdateStudent = async (id, studentData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, studentData);
      setStudents(students.map(s => s.id === id ? response.data.data : s));
      setEditingStudent(null);
      setError('');
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update student');
      console.error('Error updating student:', err);
      return false;
    }
  };

  const handleDeleteStudent = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setStudents(students.filter(s => s.id !== id));
        setError('');
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to delete student');
        console.error('Error deleting student:', err);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Management System</h1>
      </header>
      
      <div className="container">
        {error && (
          <div className="error-message">
            {error}
            <button onClick={() => setError('')}>×</button>
          </div>
        )}

        <div className="main-content">
          <div className="form-section">
            <h2>{editingStudent ? 'Edit Student' : 'Add New Student'}</h2>
            <StudentForm
              student={editingStudent}
              onSubmit={editingStudent ? handleUpdateStudent : handleCreateStudent}
              onCancel={() => setEditingStudent(null)}
            />
          </div>

          <div className="list-section">
            <h2>Students List ({students.length})</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <StudentList
                students={students}
                onEdit={setEditingStudent}
                onDelete={handleDeleteStudent}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

