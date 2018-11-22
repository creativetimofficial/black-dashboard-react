import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar
        color="info"
        expand="xs"
        className="navbar-dark flex-column flex-md-row bd-navbar"
        tag="header"
      >
        <Link to="/" className="navbar-brand mr-0 mr-md-2 navbar-absolute-logo">
          Paper Dashboard - React
        </Link>
        <Nav className="flex-row d-none d-md-flex" navbar>
          <NavItem>
            <NavLink href="#" className="p-2">
              1.0.0
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://github.com/creativetimofficial/paper-dashboard-react"
              className="p-2"
              target="_blank"
            >
              <i className="fab fa-github" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://twitter.com/CreativeTim" className="p-2">
              <i className="fab fa-twitter" />
            </NavLink>
          </NavItem>
        </Nav>
        <div className="navbar-nav-scroll ml-md-auto">
          <Nav className="bd-navbar-nav flex-row" navbar>
            <NavItem>
              <Link to="/documentation" className="nav-link">
                <i className="nc-icon nc-paper" /> Documentation
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-link">
                <i className="nc-icon nc-tv-2" /> Live Preview
              </Link>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/creativetimofficial/paper-dashboard-react/issues"
                target="_blank"
              >
                <i className="nc-icon nc-delivery-fast" /> Report issue
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    );
  }
}

export default Header;
