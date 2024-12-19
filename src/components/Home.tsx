import Image from "next/image";
import React from "react";


export default function Home() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to my Persnol Portfolio</h1>
          <p className="hero-description">
            Creative web developer with a passion for crafting seamless,
            responsive, and visually striking websites. I blend technical
            expertise with innovative design to deliver engaging digital
            experiences that leave a lasting impact.
          </p>
          <div className="button-group">
            <button className="button-primary">Contact US</button>
            <button className="button-secondary">Hire me</button>
          </div>
        </div>
        <div className="hero-image">
          <Image src="hero.png" alt="hero image" />
        </div>
      </div>
    </section>
  );
}
