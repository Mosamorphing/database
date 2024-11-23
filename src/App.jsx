import React, { useState } from "react";
import { studentsData } from "./data/studentsData";
import StudentTable from "./components/StudentTable";
import Filter from "./components/Filter";
import Dashboard from "./components/Dashboard";

function App() {
  const [selectedYear, setSelectedYear] = useState("");
  const filteredStudents = selectedYear
    ? studentsData.filter((s) => s.year.toString() === selectedYear)
    : studentsData;

  const years = [...new Set(studentsData.map((s) => s.year))];

  return (
    <div className="App">
      <h1>School Database</h1>
      <Dashboard students={studentsData} />
      <Filter years={years} selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      <StudentTable students={filteredStudents} />
    </div>
  );
}

export default App;
