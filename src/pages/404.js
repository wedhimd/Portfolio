import * as React from "react"
import { Link } from "gatsby"
import Layout  from "../components/Layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <main>
        <title>Not found</title>
        <h1 >Sorry, Page not found</h1>
        <Link to="/">Go home</Link>.
      </main>
    </Layout>
  )
}

export default NotFoundPage
