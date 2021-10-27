import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'

export default function About() {
    return (
        <Layout>
            <div className={styles.aboutContent}>
                <h2 className={styles.header}>About</h2>
                <p>Hello!  I'm an early career software engineer that is passionate about modern web development, outdoor adventures and my cat named Tuna.  Once I let Tuna outside and he came home 11 months later (no joke). I'm convinced he snuck into a time machine...</p>
                
                <p>Before becoming a software engineer I was professional photographer, where I enjoyed taking concepts and turning them into creative assignments for clients.  This eventually let me to software development, where I still get to create and build fun stuff from scratch everyday.</p>

                <p>I'm an AWS Certified Developer Associate and while I love the cloud, my heart lies in the front end.  I'm currently exploring the Jamstack (I built this site with Gatsby) and continuing to hone my React skills.     
                </p>

                <p>Have an extra ticket to the Blazers game?  Want to talk about medium format film cameras?  Think I'd be a good fit for your team?  Let's connect!</p>
            </div>
        </Layout>
    )
}
