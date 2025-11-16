import React from 'react';
import './StudentList.css';

const StudentList = ({ students, onEdit, onDelete }) => {
  if (students.length === 0) {
    return <p className="no-students">No students found. Add your first student!</p>;
  }

  return (
    <div className="student-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Course</th>
            <th>Enrollment Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.firstName} {student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.age || '-'}</td>
              <td>{student.course || '-'}</td>
              <td>{student.enrollmentDate || '-'}</td>
              <td className="actions">
                <button
                  className="btn-edit"
                  onClick={() => onEdit(student)}
                  title="Edit student"
                >
                  ✏️ Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => onDelete(student.id)}
                  title="Delete student"
                >
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;

