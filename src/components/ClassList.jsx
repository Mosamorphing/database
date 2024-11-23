import React from "react";

const ClassList = ({ students }) => {
  const classGroups = students.reduce((groups, student) => {
    const { class: className } = student;
    if (!groups[className]) {
      groups[className] = [];
    }
    groups[className].push(student);
    return groups;
  }, {});

  return (
    <div className="class-list">
      {Object.keys(classGroups).map((className) => (
        <div key={className} className="class-section">
          <h2 className="class-header">Class: {className}</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Graduation Year</th>
                <th>GPA</th>
              </tr>
            </thead>
            <tbody>
              {classGroups[className].map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.gender}</td>
                  <td>{student.year}</td>
                  <td>{student.gpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ClassList;
