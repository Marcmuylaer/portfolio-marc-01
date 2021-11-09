import React        from "react";
import FacebookPng  from "./Data/facebook.jpg";
import LinkedinPng  from "./Data/linkedIn.png";
import githubPng    from "./Data/github.jpg";

const SocialInfo = () => {
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
            href="https://www.linkedin.com/in/marc-muylaert-58975811/"
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
      </div>
    </div>
  );
};

export default SocialInfo;
