import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Stephen Tamiesie</h2>
          <h3>Software Engineer</h3>
          <p>You've tried the best, now try the rest.</p>
          <Link className={styles.btn} to="/projects">Check out some projects</Link>
        </div>
        <p>{ title } - { description }</p>
      </section>
    </Layout>
  )
}

export const query = graphql`
query SiteInfo {
  site {
    siteMetadata {
      description
      title
    }
  }
}
`