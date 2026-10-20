
const request = require("supertest");

// Mock PostgreSQL to protect our real database
jest.mock("pg", () => ({
  Pool: jest.fn().mockImplementation(() => ({
    query: jest.fn(),
  })),
}));

const { app, pool } = require("../server");

describe("StudentConnect API", () => {

  // Test 1: Welcome endpoint
  test("GET / should return the welcome message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      "Welcome to StudentConnect API!"
    );
  });

  // Test 2: Get all students
  test("GET /api/students should return all students", async () => {
    const mockStudents = [
      { id: 1, name: "John", city: "New York" },
      { id: 2, name: "Sarah", city: "Atlanta" },
    ];

    pool.query.mockResolvedValueOnce({
      rows: mockStudents,
    });

    const response = await request(app).get("/api/students");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockStudents);
    expect(pool.query).toHaveBeenCalledWith(
      "SELECT * FROM students"
    );
  });

  // Test 3: Create a new student
  test("POST /api/students should create a student", async () => {
    const newStudent = {
      name: "Michael",
      city: "New York",
    };

    const createdStudent = {
      id: 3,
      ...newStudent,
    };

    pool.query.mockResolvedValueOnce({
      rows: [createdStudent],
    });

    const response = await request(app)
      .post("/api/students")
      .send(newStudent);

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(createdStudent);

    expect(pool.query).toHaveBeenCalledWith(
      "INSERT INTO students (name, city) VALUES ($1, $2) RETURNING *",
      ["Michael", "New York"]
    );
  });

});

  // Test 4: Update a student
  test("PUT /api/students/:id should update a student", async () => {
    const updatedStudent = {
      id: 3,
      name: "Michael",
      city: "Chicago",
    };

    pool.query.mockResolvedValueOnce({
      rows: [updatedStudent],
    });

    const response = await request(app)
      .put("/api/students/3")
      .send({
        name: "Michael",
        city: "Chicago",
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(updatedStudent);

    expect(pool.query).toHaveBeenCalledWith(
      "UPDATE students SET name = $1, city = $2 WHERE id = $3 RETURNING *",
      ["Michael", "Chicago", "3"]
    );
  });

  // Test 5: Delete a student
  test("DELETE /api/students/:id should delete a student", async () => {
    pool.query.mockResolvedValueOnce({
      rowCount: 1,
    });

    const response = await request(app)
      .delete("/api/students/3");

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
      message: "Student deleted",
    });

    expect(pool.query).toHaveBeenCalledWith(
      "DELETE FROM students WHERE id = $1",
      ["3"]
    );
  });
