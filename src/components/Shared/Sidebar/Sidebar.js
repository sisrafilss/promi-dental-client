import React from "react";
import { Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import Collapsible from "react-collapsible";

const Sidebar = ({ show, handleClose }) => {
//   const Home = <NavLink to="/home">Home</NavLink>;
//   const Department = <NavLink to="/services">Department </NavLink>;
//   const Doctors = <NavLink to="/doctors">Doctors </NavLink>;
//   const Shop = <NavLink to="/shop">Shop</NavLink>;
//   const News = <NavLink to="/blogSidebar">News</NavLink>;
//   const Pages = <a href="#">Pages</a>;
  return (
    <>
      <div>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          className="side__bar"
        >
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="sidebar_sub_menu text-white mt-3">
              <li>
                <NavLink to="/">Home</NavLink>
                {/* <ul className="submenu">
                          <li>
                            <NavLink to="/">Home style 1</NavLink>
                          </li>
                          <li>
                            <NavLink to="/homeTwo">Home style 2</NavLink>
                          </li>
                          <li>
                            <NavLink to="/homeThree">Home style 3</NavLink>
                          </li>
                          <li>
                            <NavLink to="/homeFour">Home style 4</NavLink>
                          </li>
                          <li>
                            <NavLink to="/homeFive">Home style 5</NavLink>
                          </li>
                        </ul> */}
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/doctors">Our Doctors</NavLink>
              </li>

              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li>
                <NavLink to="/blogs">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>

            {/* <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/">Home style 1</NavLink></li>
                        <li><NavLink to="/homeTwo">Home style 2</NavLink></li>
                        <li><NavLink to="/homeThree">Home style 3</NavLink></li>
                        <li><NavLink to="/homeFour">Home style 4</NavLink></li>
                        <li><NavLink to="/homeFive">Home style 5</NavLink></li>
                     </ul> */}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidebar;
