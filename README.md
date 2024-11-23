# School Database Application

A responsive web application built with Vite, React, HTML, and CSS to manage and display student information. This application organizes students by class, filters them by graduation year, and optionally displays a dashboard summarizing student statistics.

---

## **Features:**

- **Class Organization:**  
  View students grouped by their respective classes.
  
- **Student Filtering:**  
  Filter students based on their graduation year for quick access.

- **Dashboard (Optional):**  
  A summary panel displaying the total number of students, separating current students from graduates.

---

## **Project Structure:**

```plaintext
src/
├── components/
│   ├── StudentList.jsx      // Renders a list of students
│   ├── ClassList.jsx        // Organizes students by class
│   ├── Dashboard.jsx        // Displays student statistics (optional)
│   └── Filter.jsx           // Filters students by graduation year
├── data/
│   └── studentsData.js      // Sample student data
├── App.jsx                  // Main application component
└── index.css                // Global styling
```

---

## **Technologies Used:**

- **Vite** for fast and optimized build tooling
- **React** for building the user interface
- **HTML/CSS** for structuring and styling the components
- **JavaScript** for logic and data handling

---

## **Installation and Setup:**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/school-database.git
   cd school-database
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**  
   Visit `http://localhost:5173` to view the application.

---

## **Usage:**

1. **Viewing Students:**  
   - Students are displayed by class.
   - Each class shows a list of enrolled students.

2. **Filtering Students:**  
   - Use the dropdown to filter students by graduation year.

3. **Dashboard (Optional):**  
   - The dashboard shows the total number of students.
   - Separates current students from graduates.

---

## **Customization:**

- **Add More Students:**  
  Modify `src/data/studentsData.js` to include additional student entries.
  
- **Extend Functionality:**  
  - Integrate a backend for dynamic data storage.
  - Enhance filters or add more categories (e.g., subjects, performance).