/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button } from "reactstrap";

import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon
} from "react-share";
import GitHubButton from "react-github-button";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show-dropdown"
    };
  }
  handleClick = () => {
    if (this.state.classes === "dropdown show-dropdown") {
      this.setState({ classes: "dropdown show-dropdown show" });
    } else {
      this.setState({ classes: "dropdown show-dropdown" });
    }
  };
  activateMode = mode => {
    switch (mode) {
      case "light":
        document.body.classList.add("white-content");
        break;
      default:
        document.body.classList.remove("white-content");
        break;
    }
  };
  render() {
    return (
      <div className="fixed-plugin">
        <div className={this.state.classes}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu show">
            <li className="header-title">SIDEBAR BACKGROUND</li>
            <li className="adjustments-line">
              <div className="badge-colors text-center">
                <span
                  className={
                    this.props.bgColor === "primary"
                      ? "badge filter badge-primary active"
                      : "badge filter badge-primary"
                  }
                  data-color="primary"
                  onClick={() => {
                    this.props.handleBgClick("primary");
                  }}
                />{" "}
                <span
                  className={
                    this.props.bgColor === "blue"
                      ? "badge filter badge-info active"
                      : "badge filter badge-info"
                  }
                  data-color="blue"
                  onClick={() => {
                    this.props.handleBgClick("blue");
                  }}
                />{" "}
                <span
                  className={
                    this.props.bgColor === "green"
                      ? "badge filter badge-success active"
                      : "badge filter badge-success"
                  }
                  data-color="green"
                  onClick={() => {
                    this.props.handleBgClick("green");
                  }}
                />{" "}
              </div>
            </li>
            <li className="adjustments-line text-center color-change">
              <span className="color-label">LIGHT MODE</span>{" "}
              <span
                className="badge light-badge mr-2"
                onClick={() => this.activateMode("light")}
              />{" "}
              <span
                className="badge dark-badge ml-2"
                onClick={() => this.activateMode("dark")}
              />{" "}
              <span className="color-label">DARK MODE</span>{" "}
            </li>
            <li className="button-container">
              <Button
                href="https://www.creative-tim.com/product/black-dashboard-react"
                color="primary"
                block
                className="btn-round"
              >
                Download Now
              </Button>
              <Link to="/documentation/tutorial">
                <Button color="default" block className="btn-round" outline>
                  Documentation
                </Button>
              </Link>
            </li>
            <li className="header-title">Want more components?</li>
            <li className="button-container">
              <Button
                href="https://www.creative-tim.com/product/black-dashboard-pro-react"
                className="btn-round"
                disabled
                block
                color="danger"
              >
                Get pro version
              </Button>
            </li>
            <li className="header-title" id="sharrreTitle">
              Thank you for sharing!
            </li>
            <li className="button-container text-center">
              <FacebookShareButton url="https://demos.creative-tim.com/black-dashboard-react/#/admin/dashboard">
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <TwitterShareButton
                url="https://demos.creative-tim.com/black-dashboard-react/#/admin/dashboard"
                title="Black Dashboard React by Creative Tim | Free React Admin Template"
                hashtags={[
                  "react",
                  "creativetim",
                  "dark",
                  "dashboard",
                  "bootstrap",
                  "reactstrap",
                  "reactjs"
                ]}
                via="creativetim"
              >
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <br />
              <GitHubButton
                type="stargazers"
                namespace="creativetimofficial"
                repo="black-dashboard-react"
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
