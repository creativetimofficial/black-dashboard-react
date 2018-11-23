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
          Paper Dashboard PRO - React
        </Link>
        <Nav className="flex-row d-none d-md-flex" navbar>
          <NavItem>
            <NavLink href="#" className="p-2">
              1.0.0
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://github.com/creativetimofficial/ct-paper-dashboard-pro-react"
              className="p-2"
            >
              <i className="fa fa-github" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://twitter.com/CreativeTim" className="p-2">
              <i className="fa fa-twitter" />
            </NavLink>
          </NavItem>
        </Nav>
        <div className="navbar-nav-scroll ml-md-auto">
          <Nav className="bd-navbar-nav flex-row" navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                <i className="nc-icon nc-tv-2" /> Back to Dashboard
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/creativetimofficial/ct-paper-dashboard-pro-react/issues">
                <i className="nc-icon nc-ambulance" /> Report a bug
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    );
  }
}

export default Header;
