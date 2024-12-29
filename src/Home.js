import React from "react";
import "./Home.css"

function Home() {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>
            Welcome to Project Hoops, a Nonprofit dedicated to helping our community!</h1>
        <p>
          Placeholder Mission Statement
        </p>
        <img
          img src="/IMG_6121.PNG"
          alt="Nonprofit Mission"
          style={{ maxWidth: "50%", height: "auto", marginTop: "20px" }}
        />
      </div>
    );
  }
  
  export default Home;