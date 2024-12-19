import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div>
      {/* Section */}


      <section className="section">
    <h1 className="about-heading">ABOUT ME</h1>

        <div className="container">
          <Image
            className="section-image"
            alt="about Page Photo"
            src="hero.png"
          />
          <div className="text-container">
            <h1 className="section-title">
              I,m a Web Developer
            </h1>
            <p className="section-description">
            Web Development | Expert on HTML , CSS And continue JavaScript , TypeScript | Student at Governor Sindh IT Initiative And Cloud Computing
            </p>
            <div className="button-container">
              <button className="primary-button">View more</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
