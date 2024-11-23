import React from "react";

const Filter = ({ years, selectedYear, setSelectedYear }) => {
  return (
    <select onChange={(e) => setSelectedYear(e.target.value)} value={selectedYear}>
      <option value="">All Years</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default Filter;
