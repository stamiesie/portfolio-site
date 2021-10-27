import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import resume from '../../static/resume.pdf'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)


    // const { title } = data.site.siteMetadata

    return (
       <nav>
           <h1></h1>
           <div className="links">
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/projects">Projects</Link>
               <Link href={resume}>Resume</Link>

           </div>
       </nav>
    )
}
