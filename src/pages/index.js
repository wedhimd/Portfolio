import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

import "../sass/home.scss"

export default function Home() {
  return (
    <Layout>
      <section className="header">
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web developer</p>
          <Link to="/projects" className="btn">My Portfolio Projects</Link>
        </div>
      </section>
    </Layout>
  ) 
}