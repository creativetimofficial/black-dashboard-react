/*eslint-disable*/
import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="https://www.creative-tim.com">Creative Tim</a>
                </li>
                <li>
                  <a href="https://blog.creative-tim.com">Blog</a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/license"
                    target="_blank"
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                &copy; {1900 + new Date().getYear()}, made with{" "}
                <i className="fa fa-heart heart" /> by Creative Tim
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
