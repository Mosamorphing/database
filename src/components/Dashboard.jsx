import React from "react";

const Dashboard = ({ students }) => {
  const totalStudents = students.length;
  const current = students.filter((s) => s.status === "current").length;
  const graduated = totalStudents - current;

  return (
    <div className="dashboard">
      <div className="stat-card">
        <h3 className="stat-title">Total Students</h3>
        <p className="stat-number">{totalStudents}</p>
      </div>
      <div className="stat-card">
        <h3 className="stat-title">Current Students</h3>
        <p className="stat-number">{current}</p>
      </div>
      <div className="stat-card">
        <h3 className="stat-title">Graduates</h3>
        <p className="stat-number">{graduated}</p>
      </div>
    </div>
  );
};

export default Dashboard;
