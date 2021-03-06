import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Stephen Tamiesie</h2>
          <h3>Software Engineer</h3>
          <p>Excited about learning and creating.</p>
          <Link className={styles.btn} to="/projects">
            Check out some projects
          </Link>
        </div>
      </section>
    </Layout>
  );
}
