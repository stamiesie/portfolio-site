import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/project-details.module.css'
// import StaticImage from 'gatsby-plugin-image'

export default function ProjectDetails() {
    return (
        <>
        <Layout>
        <div className={styles.details}>
            <h2>title</h2> 
            <h3>stack</h3>
            <div className={styles.featured}>
            {/* <StaticImage fluid={} /> */}
            </div>
            {/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
        </div>
        </Layout>
        </>
    )
}
