import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show"
    };
  }
  handleClick = () => {
    if (this.state.classes === "dropdown") {
      this.setState({ classes: "dropdown show" });
    } else {
      this.setState({ classes: "dropdown" });
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
                />
                <span
                  className={
                    this.props.bgColor === "blue"
                      ? "badge filter badge-blue active"
                      : "badge filter badge-blue"
                  }
                  data-color="blue"
                  onClick={() => {
                    this.props.handleBgClick("blue");
                  }}
                />
                <span
                  className={
                    this.props.bgColor === "green"
                      ? "badge filter badge-green active"
                      : "badge filter badge-green"
                  }
                  data-color="green"
                  onClick={() => {
                    this.props.handleBgClick("green");
                  }}
                />
              </div>
            </li>
            <li className="adjustments-line" />
            <li className="button-container">
              <Button
                href="https://www.creative-tim.com/product/black-dashboard-react"
                color="primary"
                block
                className="btn-round"
              >
                Download now
              </Button>
            </li>
            <li className="button-container">
              <Button
                color="default"
                block
                className="btn-round"
                outline
                href="https://demos.creative-tim.com/paper-dashboard-react/#/documentation/tutorial"
              >
                <i className="nc-icon nc-paper" /> Documentation
              </Button>
            </li>
            <li class="header-title">Want more components?</li>
            <li class="button-container">
              <Button
                href="https://www.creative-tim.com/product/black-dashboard-pro-react"
                className="btn-round"
                disabled
                color="danger"
              >
                Get pro version
              </Button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
