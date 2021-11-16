import React from "react";
import InstaPng from "../../../Contact-Folder/instagram.jpg";
import FacebookPng from "../../../Contact-Folder/facebook.jpg";
import LinkedinPng from "../../../Contact-Folder/linkedIn.png";
import githubPng from "../../../Contact-Folder/github.jpg";

const SocialCards = () => {
  return (
    <div className="container social-container">
      <h1>I am Social</h1>
      <div className="row">
        <div className="col" id="card" data-aos="flip-left">
          <a
            href="https://github.com/marcmuylaer"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="img-thumbnail m-2"
              src={githubPng}
              alt="GitHub Icon"
            />
          </a>
        </div>
        <div className="col" id="card" data-aos="flip-left">
          <a
            href="https://www.linkedin.com/in/marc-muylaert-7b404433/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="img-thumbnail m-2"
              src={LinkedinPng}
              alt="LinkedIn Icon"
            />
          </a>
        </div>
        <div className="col" id="card" data-aos="flip-right">
          <a
            href="https://www.instagram.com/muylaertmarc01/"
            target="_blank"
            rel="noreferrer"
          >
            <img class="img-thumbnail m-2" src={InstaPng} alt="CV Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialCards;
