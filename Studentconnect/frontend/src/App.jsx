import { useEffect, useState } from "react";
function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/api/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
}, []);
  const addStudent = async () => {
  const response = await fetch("http://localhost:3001/api/students", {
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
const deleteStudent = async (id) => {
await fetch(`http://localhost:3001/api/students/${id}`, {
  method: "DELETE",
});
setStudents(students.filter((student) => student.id !== id));
};
const updateStudent = async (id) => {
  const newName = prompt("Enter new student name:");
  const newCity = prompt("Enter new city:");
  const response = await fetch(`http://localhost:3001/api/students/${id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: newName,
    city: newCity,
  }),
}); 
const updatedStudent = await response.json();

setStudents(
  students.map((student) =>
    student.id === id ? updatedStudent : student
  )
);
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
  <div key={student.id}>
  <span>{student.name} - {student.city}</span>
  <button onClick={() => deleteStudent(student.id)}>
    Delete
  </button>
  <button onClick={() => updateStudent(student.id)}>
  Edit
</button>
</div>
))}
    </div>
  )
}

export default App

