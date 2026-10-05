import { useEffect, useState } from "react";
function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/api/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
}, []);
  const addStudent = async () => {
  const response = await fetch("http://localhost:3000/api/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      city: city,
    }),
  });

  const newStudent = await response.json();
  setStudents([...students, newStudent]);
  setName("");
  setCity("");
};
  return (
    <div>
      <h1>StudentConnect</h1>
      <p>Connect. Learn. Pay. Grow.</p>
      <input
  type="text"
  placeholder="Student name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
<input
  type="text"
  placeholder="City"
  value={city}
  onChange={(e) => setCity(e.target.value)}
/>
<button onClick={addStudent}>
  Add Student
</button>
      <h2>Students</h2>
      {students.map((student) => (
  <p key={student.id}>{student.name} - {student.city}</p>
))}
    </div>
  )
}

export default App