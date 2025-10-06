import React from "react";
import "./PageStyle.css";

function Depstar() {
  return (
    <div className="page">
      <section className="hero">
        {/* Logo image – replace with your own if needed */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFP4Z_r_lhuCPvz9giBJ0yytQFtTaHUNquQ&s"
          alt="DEPSTAR Logo"
          className="hero-logo"
        />
        <h1>DEPSTAR Institute</h1>
        <p className="tagline">Empowering Engineers for the Future</p>
      </section>

      <section className="section">
        <h2>About DEPSTAR</h2>
        <p>
          Devang Patel Institute of Advance Technology and Research (DEPSTAR) is one of the constituent institutes of CHARUSAT.
          It is focused on delivering quality education in Computer Science, Information Technology, and allied branches of Engineering.
        </p>
      </section>

      <section className="section info-grid">
        <div>
          <h3>Founded</h3>
          <p>2018</p>
        </div>
        <div>
          <h3>Location</h3>
          <p>CHARUSAT Campus, Changa, Gujarat, India</p>
        </div>
        <div>
          <h3>Affiliation</h3>
          <p>Constituent Institute of CHARUSAT</p>
        </div>
        <div>
          <h3>Programs</h3>
          <p>B.Tech in CSE, IT, AIML, Cyber Security</p>
        </div>
      </section>

      <section className="section">
        <h2>Vision</h2>
        <p>
          To be a center of excellence for creating industry-ready professionals through innovative and quality education.
        </p>
      </section>

      <section className="section">
        <h2>Mission</h2>
        <ul className="mission-list">
          <li>To provide globally competent education in emerging technologies.</li>
          <li>To nurture ethical, innovative, and socially responsible individuals.</li>
          <li>To bridge the gap between industry and academia through collaboration.</li>
        </ul>
      </section>
    </div>
  );
}

export default Depstar;
