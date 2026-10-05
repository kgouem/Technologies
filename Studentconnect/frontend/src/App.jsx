import { useEffect, useState } from "react";
function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
}, []);
  return (
    <div>
      <h1>StudentConnect</h1>
      <p>Connect. Learn. Pay. Grow.</p>
      <h2>Students</h2>
      {students.map((student) => (
  <p key={student.id}>{student.name} - {student.city}</p>
))}
    </div>
  )
}

export default App