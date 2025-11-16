import React, { useState, useEffect } from 'react';
import './StudentForm.css';

const StudentForm = ({ student, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    course: '',
    enrollmentDate: ''
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    } else {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        course: '',
        enrollmentDate: new Date().toISOString().split('T')[0]
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await onSubmit(student?.id, formData);
    if (success) {
      // Reset form if it's a create operation
      if (!student) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          age: '',
          course: '',
          enrollmentDate: new Date().toISOString().split('T')[0]
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <div className="form-group">
        <label htmlFor="firstName">First Name *</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="Enter first name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name *</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          placeholder="Enter last name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter age"
          min="1"
          max="150"
        />
      </div>

      <div className="form-group">
        <label htmlFor="course">Course</label>
        <input
          type="text"
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Enter course"
        />
      </div>

      <div className="form-group">
        <label htmlFor="enrollmentDate">Enrollment Date</label>
        <input
          type="date"
          id="enrollmentDate"
          name="enrollmentDate"
          value={formData.enrollmentDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {student ? 'Update Student' : 'Add Student'}
        </button>
        {student && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default StudentForm;

