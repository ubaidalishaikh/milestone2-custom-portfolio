import Link from "next/link"
import React from "react"


export default function Header(){
    return(
    


// Header Section 
<header className="header">
  <div className="container">
    <a href="#" className="logo">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="logo-icon" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="logo-text">Ubaid Ali</span>
    </a>
    <nav className="nav">
      <Link href="/" className="nav-item">Home</Link>
      <Link href="/about" className="nav-item">About</Link>
      <Link href="/skills" className="nav-item">Skills</Link>
      <Link href="/project" className="nav-item">Project</Link>
      <Link href="/contact" className="nav-item">Contact</Link>
      
    </nav>
    <button className="cv-button">
      Download CV
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="cv-icon" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>

   

    )
    
}