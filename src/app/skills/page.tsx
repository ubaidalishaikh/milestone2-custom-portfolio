import React from "react"
import "../../app/styles/Skills.css"
import Image from "next/image"


export default function Skills(){
    return(
        
        <section className="blog-section">
            <h1 className="skills-h1" >SKILLS</h1>
            <br />
    <div className="container">
      <div className="card-wrapper">
        {/* <!-- Card 1 --> */}
        <div className="card">
          <Image className="card-image" src="data:image/png;base64,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" alt="Blog Image"/>
          <div className="card-content">
            <h2 className="card-category">Frontend</h2>
            <h1 className="card-title">NEXT JS</h1>
            <p className="card-description">Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.</p>
            <div className="card-footer">
              <a href="#" className="learn-more">Learn More</a>
              <div className="card-stats">
                <span className="views">1.2K Views</span>
                <span className="comments">6 Comments</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div className="card">
          <Image className="card-image" src="data:image/png;base64,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" alt="Blog Image"/>
          <div className="card-content">
            <h2 className="card-category">Backend</h2>
            <h1 className="card-title">TypeScript</h1>
            <p className="card-description">TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.</p>
            <div className="card-footer">
              <a href="#" className="learn-more">Learn More</a>
              <div className="card-stats">
                <span className="views">1.2K Views</span>
                <span className="comments">6 Comments</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div className="card">
          <Image className="card-image" src="data:image/png;base64,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" alt="Blog Image"/>
          <div className="card-content">
            <h2 className="card-category">Frontend</h2>
            <h1 className="card-title">Tailwind Css</h1>
            <p className="card-description">Tailwind CSS is a utility-first CSS framework that simplifies web design for beginners and experienced developers alike. Here a quick overview to get you started: No Need to Write Style Code: Use over 500 pre-made styles for fast website building. Quick Changes: Easily adjust your design without deep coding</p>
            <div className="card-footer">
              <a href="#" className="learn-more">Learn More</a>
              <div className="card-stats">
                <span className="views">1.2K Views</span>
                <span className="comments">6 Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}



