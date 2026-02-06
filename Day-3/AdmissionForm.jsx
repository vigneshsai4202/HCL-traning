import React, { useState } from "react";
import "./AdmissionForm.css";
import { validateName, validateEmail, validatePhone } from "./validation";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    course: "",
    qualification: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!validateName(formData.fullname)) {
      newErrors.fullname = "Name must contain only letters";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({
        fullname: "",
        dob: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
        course: "",
        qualification: ""
      });
    }
  };

  return (
    <div className="form-container">
      <h2>College Admission Form</h2>
      <form onSubmit={handleSubmit}>

        <label>Full Name</label><br />
        <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} />
        {errors.fullname && <small className="error">{errors.fullname}</small>}

        <label>Date of Birth</label><br />
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />

        <label>Gender</label><br />
        <div className="radio-group">
          <label className="radio-option"><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
          <label className="radio-option"><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
          <label className="radio-option"><input type="radio" name="gender" value="Others" onChange={handleChange} /> Others</label>
        </div>

        <br /><br />

        <label>Email</label><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <small className="error">{errors.email}</small>}

        <label>Phone Number</label><br />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <small className="error">{errors.phone}</small>}

        <label>Address</label><br />
        <textarea name="address" rows="3" value={formData.address} onChange={handleChange}></textarea>

        <label>Select Your Course</label><br />
        <div className="radio-group">
          <label className="radio-option"><input type="radio" name="course" value="CSE" onChange={handleChange} /> CSE</label>
          <label className="radio-option"><input type="radio" name="course" value="ECE" onChange={handleChange} /> ECE</label>
          <label className="radio-option"><input type="radio" name="course" value="IT" onChange={handleChange} /> IT</label>
        </div>

        <br /><br />

        <label>Previous Qualification</label><br />
        <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} />

        <br /><br />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}
