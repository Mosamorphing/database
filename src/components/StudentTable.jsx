import React from "react";

const StudentTable = ({ students }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Graduation Year</th>
            <th>GPA</th>
            <th>Subjects</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>{student.class}</td>
              <td>{student.year}</td>
              <td>{student.gpa}</td>
              <td>{student.subjects.join(", ")}</td>
              <td>{student.contact.email}</td>
              <td>{student.contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
