/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Nav } from "reactstrap";
import { Link } from "react-router-dom";

import docRoutes from "documentation.js";

class Sidebar extends React.Component {
  render() {
    return (
      <nav className="collapse bd-links" id="bd-docs-nav">
        {docRoutes.map((prop, key) => {
          if (prop.redirect) {
            return null;
          }
          return (
            <div className="bd-toc-item active" key={key}>
              <Link to={prop.path} className="bd-toc-link">
                {prop.name}
              </Link>
              <Nav className="bd-sidenav">
                {prop.routes.map((p, k) => {
                  return (
                    <li key={k}>
                      <Link to={p.path}>{p.name}</Link>
                    </li>
                  );
                })}
              </Nav>
            </div>
          );
        })}
      </nav>
    );
  }
}

export default Sidebar;
