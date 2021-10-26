import * as React from "react"
import { Link } from "gatsby"

import "../sass/home.scss"

export default function Home() {
  return (
      <section className="header">
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web developer</p>
          <Link to="/projects" className="btn">My Portfolio Projects</Link>
        </div>
      </section>
  ) 
}