import React from 'react'
import Navbar from './Navbar'
import linkedIn from '../../public/linkedin.png'
import gitHub from '../../public/github.png'
import mail from '../../public/mail.png'
import '../styles/global.css'

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                { children }
            </div>
            <footer>
            <a
              href="https://www.linkedin.com/in/stephen-tamiesie/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="linkedInLogo"
                src={linkedIn}
                alt="linkedIn"
              />
            </a>
            <a
              href="https://github.com/stamiesie"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="githubLogo"
                src={gitHub}
                alt="github"
              />
            </a>
            <a
              href="mailto:stephen.tamiesie@gmail.com"
            >
              <img
                className="mail"
                src={mail}
                alt="mail"
              />
            </a>
            </footer>
        </div>
    )
}
