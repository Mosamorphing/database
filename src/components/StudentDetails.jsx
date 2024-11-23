import React from "react";

const StudentDetails = ({ student }) => {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Gender:</strong> {student.gender}</p>
      <p><strong>Class:</strong> {student.class}</p>
      <p><strong>Graduation Year:</strong> {student.year}</p>
      <p><strong>GPA:</strong> {student.gpa}</p>
      <p><strong>Subjects:</strong> {student.subjects.join(", ")}</p>
      <p><strong>Email:</strong> {student.contact.email}</p>
      <p><strong>Phone:</strong> {student.contact.phone}</p>
    </div>
  );
};

export default StudentDetails;
