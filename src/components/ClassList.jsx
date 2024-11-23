import React from "react";
import StudentList from "./StudentList";

const ClassList = ({ students }) => {
  const classes = [...new Set(students.map((student) => student.class))];

  return (
    <div>
      {classes.map((className) => (
        <div key={className}>
          <h3>Class {className}</h3>
          <StudentList students={students.filter((s) => s.class === className)} />
        </div>
      ))}
    </div>
  );
};

export default ClassList;
