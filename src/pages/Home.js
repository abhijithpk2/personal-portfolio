import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import  '../styles/Home.css';



const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi , My name is Abhijith PK</h2>
        <div className="prompt">
          <p>A software developer for learning and creating.</p>
          <a href="https://github.com/abhijithpk2" target="_blank">
            <GitHubIcon />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
          >
            <EmailIcon />
          </a>
          <a href="https://www.linkedin.com/in/abhijithpk/" target="_blank">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="items">
            <h2>Front-end</h2>
            <span>
              ReactJS, HTMl, CSS, Redux, NPM, Bootstrap, Material UI, Chakra UI,
              TailwindCSS, Firebase, Flutter
            </span>
          </li>

          <li className="items">
            <h2>Back-end</h2>
            <span>
              NodeJS, ExpressJS, MongoDB, GIT, GITHUB, Netlify, AWS,
              DigitalOcean, MySQL
            </span>
          </li>

          <li className="items">
            <h2>Programming Languages</h2>
            <span>C, C++, Java, Javascript, python, Typescript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home