import React from "react";
import ProfilePic from "../../moi.jpg";
import githubLogo from "../../skillLogos/githubLogo.png";
import CVLogo from "../../Contact-Folder/cv.png";

const AboutMe = () => {
  return (
    <div className="about-me" id="About-Me">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="aboutMe-title">About Me</h1>
            <p className="lead">New challenge , new world ... </p>
            <hr />
            <p className="about-me-text">
              Hi there! My name is Marc, I am a Student in Intecbrussel , I follow the formation "Front-End Developer".
              As a Front-End Developer, My vocation is to create beautiful and user-friendly websites.
              You are someone who turns dreams into reality, a painter who uses digital tools to color a canvas
              Html, css and javascript are your fundamental building blocks.
              Research frameworks and use them to keep up with the latest trends.
              <br />
              <br />
            </p>
            <p>
              As a new developer in theb world.
              I am excited to dive into this industry and ready to learn and make an impact in any environment.
              With more than 20 years experience in the consulting always in the mainframe sector (bank , insurance ,...).
              I decided to change course by carrying out a reconversion in a new world ... the web.
              I am confident and excited to have a new challenge in a new environment.

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
              href="https://docs.google.com/document/d/1vR_9Nr-4yTnykvJfjnieLkGgbGBYfK9RZFnUnGbwM7U/edit?usp=sharing"
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
              alt="marc"
              src={ProfilePic}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
