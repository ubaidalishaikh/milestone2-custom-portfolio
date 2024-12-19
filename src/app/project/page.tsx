import React from "react"
import "../../app/styles/Project.css"
import Image from "next/image"


export default function Project(){
    return(
        <section className="product-section">
        <h1 className="project-h1">PROJECTS</h1>

    <div className="container">
      <div className="product-grid">
        <div className="product-card">
          <a href="https://tech-force-pakistan.vercel.app/" className="product-image">
            <Image src="/download.png" alt="Product Image"/>
          </a>
          <div className="product-info">
            <p className="product-category">Website</p>
            <h2 className="product-title">Tech Force Pakistan</h2>
            <p className="product-price">$00.00</p>
          </div>
        </div>

        <div className="product-card">
          <a href="https://hackathon-restaurent.vercel.app/" className="product-image">
            <Image src="/food.png" alt="Product Image"/>
          </a>
          <div className="product-info">
            <p className="product-category">Website</p>
            <h2 className="product-title">Food Restaurent</h2>
            <p className="product-price">$00.00</p>
          </div>
        </div>

        <div className="product-card">
          <a href="https://static-resume-pi-one.vercel.app/" className="product-image">
            <Image src="/resume.png" alt="Product Image"/>
          </a>
          <div className="product-info">
            <p className="product-category">Resume Builder</p>
            <h2 className="product-title">Resume Builder | CV</h2>
            <p className="product-price">$00.00</p>
          </div>
        </div>

        <div className="product-card">
          <a href="https://persnol-portfolio-phi.vercel.app/" className="product-image">
            <Image src="/portfolio.png" alt="Product Image"/>
          </a>
          <div className="product-info">
            <p className="product-category">Portfolio</p>
            <h2 className="product-title">Persnol Portfolio</h2>
            <p className="product-price">$00.00</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
    
}