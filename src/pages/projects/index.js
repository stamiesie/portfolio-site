import { graphql, Link } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css';

export default function Projects({ data }) {
  console.log(data);
  const projects = data.projects.nodes;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Projects</h2>
        <h3>Made with love. And code. </h3>
        <div className={styles.projects}>
          {projects.map((project) => (
            <Link
              className={styles.project_card}
              to={`/projects/${project.frontmatter.slug}`}
              key={project.id}
            >
              <div>
                <GatsbyImage
                  image={getImage(
                    project.frontmatter.thumbnail.childImageSharp
                      .gatsbyImageData
                  )}
                  alt="Banner"
                  className={styles.thumbnail}
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          stack
          title
          slug
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
