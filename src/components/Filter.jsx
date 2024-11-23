import React from "react";

const Filter = ({ years, selectedYear, setSelectedYear }) => {
  return (
    <div className="filter-container">
      <select onChange={(e) => setSelectedYear(e.target.value)} value={selectedYear}>
        <option value="">All Years</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
