import React from "react";

const Dashboard = ({ students }) => {
  const totalStudents = students.length;
  const current = students.filter((s) => s.status === "current").length;
  const graduated = totalStudents - current;

  return (
    <div className="dashboard">
      <h2>School Dashboard</h2>
      <p>Total Students: {totalStudents}</p>
      <p>Current Students: {current}</p>
      <p>Graduates: {graduated}</p>
    </div>
  );
};

export default Dashboard;
