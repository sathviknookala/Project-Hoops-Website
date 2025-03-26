import React, { useState } from "react";
import "./SignUpForm.css"; 

const errorLog = [];

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    team: "",
    division: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('Timestamp', new Date().toISOString());
      formDataToSend.append('Name', formData.name);
      formDataToSend.append('Email', formData.email);
      formDataToSend.append('Team', formData.team);
      formDataToSend.append('Division', formData.division);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxc5SGd_hT8X0fPzRRUV8bfarZUZrkSZc2NdA-bj_QVir-Mr-ltc6BXp1rhByrEENX-NA/exec", 
        {
          method: "POST",
          body: formDataToSend,
          mode: "no-cors"
        }
      );

      // Since we're using no-cors, we won't get a proper response.ok
      // Instead, if we reach here without an error, consider it successful
      alert("Your sign up has been recorded!");
      setFormData({ name: "", email: "", team: "", division: "" });
      
    } catch (error) {
      console.error("Error during form submission:", error);
      errorLog.push(error.message);
      alert("There was an error. Please try again.");
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <p style={{ textAlign: "center", padding: "20px" }}>
        We are currently accepting sign ups for the 2025 Project Hoops Tournament 
      </p>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
      </label>

      <label>
        Team Name:
        <input
          type="text"
          name="team"
          value={formData.team}
          onChange={handleChange}
          placeholder="Enter your team name"
        />
      </label>

      <label>
        Division:
        <select
          name="division"
          value={formData.division}
          onChange={handleChange}
          required
        >
          <option value="">Select your division</option>
          <option value="Division I (Competitive)">Division I (Competitive)</option>
          <option value="Division II (Recreational)">Division II (Recreational)</option>
        </select>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
