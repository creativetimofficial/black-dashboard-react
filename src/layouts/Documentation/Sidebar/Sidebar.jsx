import React from "react";
import { Nav } from "reactstrap";
import { Link } from "react-router-dom";

import docRoutes from "routes/documentation.jsx";

class Sidebar extends React.Component {
  activeRoute = path => {
    return this.props.location.pathname.indexOf(path) > -1
      ? "active bd-sidenav-active"
      : "";
  };
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
                    <li key={k} className={this.activeRoute(p.path)}>
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
