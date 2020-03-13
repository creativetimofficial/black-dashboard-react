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
import { Route, Switch, Redirect } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Sidebar from "./Sidebar/Sidebar.js";
import Header from "./Header/Header.js";

import docRoutes from "documentation.js";

class Documentation extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("bd-docs");
    document.documentElement.classList.toggle("bd-react-docs");
  }
  componentWillUnmount() {
    document.body.classList.toggle("bd-docs");
    document.documentElement.classList.toggle("bd-react-docs");
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <Container fluid>
          <Row className="flex-xl-nowrap">
            <Col xs={12} md={3} xl={2} className="bd-sidebar">
              <Sidebar />
            </Col>
            <Col
              xs={12}
              md={9}
              xl={8}
              className="py-md-3 pl-md-5 bd-content"
              tag="main"
            >
              <Switch>
                {docRoutes.map((prop, key) => {
                  if (prop.redirect)
                    return (
                      <Redirect from={prop.path} to={prop.pathTo} key={key} />
                    );
                  return prop.routes.map((p, k) => {
                    return (
                      <Route path={p.path} component={p.component} key={k} />
                    );
                  });
                })}
              </Switch>
            </Col>
            <Col xl={2} className="d-none d-xl-block bd-toc" />
          </Row>
        </Container>
      </>
    );
  }
}

export default Documentation;
