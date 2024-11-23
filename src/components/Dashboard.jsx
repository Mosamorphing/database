import React from "react";

const Dashboard = ({ students }) => {
  const totalStudents = students.length;
  const current = students.filter((s) => s.status === "current").length;
  const graduated = totalStudents - current;

  return (
    <div>
      <h3>Total Students: {totalStudents}</h3>
      <p>Current: {current}</p>
      <p>Graduated: {graduated}</p>
    </div>
  );
};

export default Dashboard;
