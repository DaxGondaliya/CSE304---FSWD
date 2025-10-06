import React from "react";
import "./PageStyle.css";

function CSE() {
  return (
    <div className="page">
      <section className="hero">
        {/* Logo placeholder – replace with actual image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUm6XC87DuMWkJtZhKib6Yx2ey6dKvjur9_A&s"
          alt="CSE Department Logo"
          className="hero-logo"
        />
        <h1>Computer Science & Engineering</h1>
        <p className="tagline">Driving Innovation through Code and Technology</p>
      </section>

      <section className="section">
        <h2>About CSE Department</h2>
        <p>
          The Department of Computer Science and Engineering at DEPSTAR offers undergraduate programs focused on modern computing,
          software engineering, and AI-based technologies. With a strong emphasis on hands-on learning and industry collaboration,
          the department aims to create leaders in the IT world.
        </p>
      </section>

      <section className="section info-grid">
        <div>
          <h3>Established</h3>
          <p>2018</p>
        </div>
        <div>
          <h3>Location</h3>
          <p>DEPSTAR, CHARUSAT Campus, Changa, Gujarat</p>
        </div>
        <div>
          <h3>Programs</h3>
          <p>B.Tech (CSE), CSE-AI&ML, CSE-Cyber Security</p>
        </div>
        <div>
          <h3>Strength</h3>
          <p>Experienced faculty and modern labs</p>
        </div>
      </section>

      <section className="section">
        <h2>Vision</h2>
        <p>
          To be a leading department imparting quality education and innovative research in Computer Science and Engineering,
          shaping future-ready professionals.
        </p>
      </section>

      <section className="section">
        <h2>Mission</h2>
        <ul className="mission-list">
          <li>To provide high-quality technical education in computing fields.</li>
          <li>To promote innovation, research, and professional ethics.</li>
          <li>To build partnerships with industry and global institutions.</li>
        </ul>
      </section>
    </div>
  );
}

export default CSE;
