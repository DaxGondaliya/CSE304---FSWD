import React from "react";
import "./PageStyle.css";

function Charusat() {
  return (
    <div className="page">
      <section className="hero">
        <img
          src="https://colleges18.s3.ap-south-1.amazonaws.com/Charotar_University_of_Science_and_Technology_CHARUSAT_Anand_logo_jpg_eb45ac6cc5.webp"
          alt="Charusat Logo"
          className="hero-logo"
        />
        <h1>CHARUSAT University</h1>
        <p className="tagline">A University Committed to Excellence</p>
      </section>

      <section className="section">
        <h2>About CHARUSAT</h2>
        <p>
          CHARUSAT (Charotar University of Science and Technology) is a state private university located in Changa, Gujarat, India.
          It was established under Gujarat Act No. 8 of 1995 and is recognized by the University Grants Commission (UGC).
          CHARUSAT offers undergraduate, postgraduate, and doctoral programs in disciplines like Engineering, Pharmacy, Management,
          Computer Applications, Nursing, and more.
        </p>
      </section>

      <section className="section info-grid">
        <div>
          <h3>Founded</h3>
          <p>2009 (as University)</p>
        </div>
        <div>
          <h3>Location</h3>
          <p>Changa, Gujarat, India</p>
        </div>
        <div>
          <h3>Accreditation</h3>
          <p>UGC, NAAC 'A+', AICTE Approved</p>
        </div>
        <div>
          <h3>Type</h3>
          <p>State Private University</p>
        </div>
      </section>

      <section className="section">
        <h2>Vision</h2>
        <p>
          To become a dynamic global institution in a knowledge-driven world through excellence in teaching, research, and innovation.
        </p>
      </section>

      <section className="section">
        <h2>Mission</h2>
        <ul className="mission-list">
          <li>To offer quality and value-based education to students.</li>
          <li>To create an environment that fosters innovation, creativity, and research.</li>
          <li>To develop socially responsible professionals with ethical values.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Campus Tour</h2>
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SCEzFwyYNwc?si=ab5MYFZ6J0CpQ1E_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
    </div>
  );
}

export default Charusat;
