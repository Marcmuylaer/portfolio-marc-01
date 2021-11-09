import React          from 'react';
import ProfilePicture from "../Data/moi.jpg";
import githubLogo     from "../Data/githubLogo.png";
import CVLogo         from "../Data/cv.png";
import Pdf            from '../Data/cv.pdf';

const AboutMe = () => {
  return (
    <div className="about-me" id="About-Me">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="aboutMe-title">About Me</h1>
            <p className="lead">Let's change the world through Tech</p>
            <hr />
            <p className="about-me-text">
              Hi there! My name is Marc, I am a Student by Intec developer , I follow de formation "Front-End Devopper" .
              As a Front-End Developer, My vocation is to create beautiful and user-friendly websites.
              You are someone who turns dreams into reality, a painter who uses digital tools to color a canvas
              Html, css and javascript are your fundamental building blocks.
              Research frameworks and use them to keep up with the latest trends
              <br />
            </p>
            <p>
              As a new developer I am excited to dive into this industry and
              ready to learn and make an impact in any environment.
              With more than 20 years experience in the consulting world always in the mainframe sector
              (bank , insurance ,...)
              I am confident and excited to have a new challenge in a new environment
            </p>
            <br />
            <a
              href="https://github.com/marcmuylaer"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-thumbnail m-2"
                src={githubLogo}
                alt="GitHub Icon"
              />
            </a>
            <a
              href = {Pdf} 
              target="_blank"
              rel="noreferrer"
            >
              <img
                class="img-thumbnail m-2 cv-logo"
                src={CVLogo}
                alt="CV Icon"
              />
            </a>
          </div>
          <div className="col imgCon">
            <img
              className="rounded profile-picture"
              alt="Marc"
              src={ProfilePicture}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;