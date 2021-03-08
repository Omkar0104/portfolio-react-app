import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './button.css';
import { mainBody, repos, about, skills, leadership } from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={` fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand className="responsive" href={process.env.PUBLIC_URL + "/#home"} >
        {<img src="DigiOrs.png" width="30"
        height="30"/>}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {
            <Nav.Link className="nav-link lead" target="_blank" href={process.env.PUBLIC_URL + "https://omkarsonawane.com/blogs/"}>
             {/* <a href="https://omkarsonawane.com/blogs/"  className="blogs">Blogs</a> */}Blogs
            </Nav.Link>
          }
          {repos.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projects
            </Nav.Link>
          )}
          {about.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </Nav.Link>
          )}
          {skills.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Skills
            </Nav.Link>
            
          )}
             {leadership.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#leadership"}
            >
              leadership
            </Nav.Link>
            
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
