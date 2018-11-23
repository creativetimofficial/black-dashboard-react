import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Sidebar from "./Sidebar/Sidebar.jsx";
import Header from "./Header/Header.jsx";

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
