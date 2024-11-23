import React from "react";

const StudentList = ({ students }) => {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} - {student.class} ({student.year})
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
