import React from "react";
import StudentProfile from "./StudentProfile";

function App() {
  const studentData = {
    name: "Sai Vignesh",
    rollNumber: "99220040853",
    email: "saivignesh@example.com",
    phone: "+91 9876543210",
    dob: "23 April  2004",
    gender: "Male",
    course: "B.Tech Computer Science",
    year: "4th Year",
    address: "Madurai, Tamil Nadu, India",
  };

  return (
    <div style={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: "20px" }}>
      <StudentProfile student={studentData} />
    </div>
  );
}

export default App;
