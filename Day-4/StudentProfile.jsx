import React from "react";

const StudentProfile = ({ student }) => {
  if (!student) {
    return <div style={styles.page}>No student data available.</div>;
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Student Profile</h2>

        <div style={styles.row}><span style={styles.label}>Full Name:</span><span>{student.name}</span></div>
        <div style={styles.row}><span style={styles.label}>Registratiom Number:</span><span>{student.rollNumber}</span></div>
        <div style={styles.row}><span style={styles.label}>Email:</span><span>{student.email}</span></div>
        <div style={styles.row}><span style={styles.label}>Phone:</span><span>{student.phone}</span></div>
        <div style={styles.row}><span style={styles.label}>Date of Birth:</span><span>{student.dob}</span></div>
        <div style={styles.row}><span style={styles.label}>Gender:</span><span>{student.gender}</span></div>
        <div style={styles.row}><span style={styles.label}>Course:</span><span>{student.course}</span></div>
        <div style={styles.row}><span style={styles.label}>Year/Semester:</span><span>{student.year}</span></div>
        <div style={styles.row}><span style={styles.label}>Address:</span><span>{student.address}</span></div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#525252", // 🌌 Page background
    padding: "40px 0",
  },
  card: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    backgroundColor: "	#FFFFFF",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "15px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    borderBottom: "1px solid #ccc",
    paddingBottom: "4px",
  },
  label: {
    fontWeight: "bold",
  },
};

export default StudentProfile;
