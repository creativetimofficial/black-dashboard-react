/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
          Black Dashboard - React
        </Link>
        <Nav className="flex-row d-none d-md-flex" navbar>
          <NavItem>
            <NavLink href="#" className="p-2">
              1.1.0
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://github.com/creativetimofficial/black-dashboard-react"
              className="p-2"
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
              <NavLink
                href="https://www.creative-tim.com/product/black-dashboard-pro-react?ref=bdr-docs-navbar-upgrade-pro"
                target="_blank"
              >
                <i className="tim-icons icon-spaceship" /> Upgrade to PRO
              </NavLink>
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-link">
                <i className="tim-icons icon-tv-2" /> Back to Dashboard
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/creativetimofficial/black-dashboard-react/issues">
                <i className="tim-icons icon-scissors" /> Report a bug
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/creativetimofficial/black-dashboard-react">
                <i className="tim-icons icon-shape-star" /> Help with a star
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" />
            </NavItem>
            <NavItem>
              <NavLink href="" />
            </NavItem>
          </Nav>
        </div>
        <a
          href="https://github.com/creativetimofficial/black-dashboard-react"
          className="github-corner"
          aria-label="View source on Github"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 250 250"
            style={{
              fill: "#fff",
              color: "#54648b",
              position: "absolute",
              top: "0",
              border: "0",
              right: "0",
            }}
            aria-hidden="true"
          >
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              style={{ transformOrigin: "130px 106px" }}
              className="octo-arm"
            />
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              className="octo-body"
            />
          </svg>
        </a>
      </Navbar>
    );
  }
}

export default Header;
