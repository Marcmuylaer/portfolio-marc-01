import React    from "react";
import PortItem from "../PortItem";
import Projects from "../Projects";

const Portfolio = () => {

  return (
    <div className="portfolio-wraper" id="Portfolio">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row card-group card-wraper">
          {Projects.map((project, i) => (
            <PortItem Projects={project} key={i}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
