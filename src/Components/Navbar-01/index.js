import React , { userState } from "react";
import myLogo from "../../frodon.jpg";
// REACT FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// React Scroll
import { Link } from "react-scroll";

const Navbar = ()  => {
  const [navbar,setNavbar] = userState(false);
  const changeBackground = () => {
     if (window.scrolly >= 80) {
        setNavbar(true);
        } else {
        setNavbar(false);
        }
  };
  window.addEventListener('scroll',changeBackground);

  return (

    <nav className= {navbar ? 'navbar active' : 'navbar'}>
     <div className="navbar navbar-style navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="myLogo" src={myLogo} alt="Marc Muylaert" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link
                className="nav-link"
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
              >
                {" "}
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="About-Me"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
              >
                {" "}
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="Skills"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
              >
                {" "}
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="Experience"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
              >
                {" "}
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="Portfolio"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
              >
                {" "}
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
              >
                {" "}
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
     </div>
    </nav>
  );
 };

export default Navbar;
