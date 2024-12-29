import React, { useState } from "react";
import "./SignUpForm.css"; 

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
      const response = await fetch(
        "GOOGLE_APPS_SCRIPT_WEB_APP_URL", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Your Sign Up has been recorded!");
        setFormData({ name: "", email: "", team: "", division: "" });
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("There was an error. Please try again.");
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
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
