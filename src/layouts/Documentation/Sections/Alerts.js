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
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/styles/prism";

import { Alert, UncontrolledAlert } from "reactstrap";

const codeExamples = `import React from "react";

// reacstrap components
import { Alert } from "reactstrap";

class Alerts extends React.Component {
  render() {
    return (
      <>
        <Alert color="primary">This is a primary alert—check it out!</Alert>
        <Alert color="info">This is a info alert—check it out!</Alert>
        <Alert color="success">This is a success alert—check it out!</Alert>
        <Alert color="danger">This is a danger alert—check it out!</Alert>
        <Alert color="warning">This is a warning alert—check it out!</Alert>
        <Alert color="default">This is a default alert—check it out!</Alert>
      </>
    );
  }
}

export default Alerts;`;

const codeLinkColor = `import React from "react";

// reacstrap components
import { Alert } from "reactstrap";

class Alerts extends React.Component {
  render() {
    return (
      <>
        <Alert color="primary">
          This is a primary alert with{" "}
          <a href="#pablo" className="alert-link">
            an example link
          </a>. Give it a click if you like.
        </Alert>
        <Alert color="info">
          This is a info alert with{" "}
          <a
            href="#pablo"
            className="alert-link"
            onClick={e => e.preventDefault()}
          >
            an example link
          </a>. Give it a click if you like.
        </Alert>
        <Alert color="success">
          This is a success alert with{" "}
          <a
            href="#pablo"
            className="alert-link"
            onClick={e => e.preventDefault()}
          >
            an example link
          </a>. Give it a click if you like.
        </Alert>
        <Alert color="danger">
          This is a danger alert with{" "}
          <a
            href="#pablo"
            className="alert-link"
            onClick={e => e.preventDefault()}
          >
            an example link
          </a>. Give it a click if you like.
        </Alert>
        <Alert color="warning">
          This is a warning alert with{" "}
          <a
            href="#pablo"
            className="alert-link"
            onClick={e => e.preventDefault()}
          >
            an example link
          </a>. Give it a click if you like.
        </Alert>
        <Alert color="default">
          This is a default alert with{" "}
          <a
            href="#pablo"
            className="alert-link"
            onClick={e => e.preventDefault()}
          >
            an example link
          </a>. Give it a click if you like.
        </Alert>
      </>
    );
  }
}

export default Alerts;`;

const codeDismissingToggle = `import React from "react";

// reactstrap components
import { Alert } from "reactstrap";

class Alerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  onDismiss = () => {
    this.setState({ visible: false });
  };
  render() {
    return (
      <>
        <Alert
          color="info"
          isOpen={this.state.visible}
          toggle={this.onDismiss}
        >
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        </Alert>
      </>
    );
  }
}

export default Alerts;
`;

const codeDismissingUncontrolledAlert = `import React from "react";

// reactstrap components
import { UncontrolledAlert } from "reactstrap";

class Alerts extends React.Component {
  render() {
    return (
      <>
        <UncontrolledAlert color="info">
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        </UncontrolledAlert>
      </>
    );
  }
}

export default Alerts;
`;

class Alerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  onDismiss = () => {
    this.setState({ visible: false });
  };
  render() {
    return (
      <>
        <h1 className="bd-title">Alerts</h1>
        <p>
          Provide contextual feedback messages for typical user actions with the
          handful of available and flexible alert messages.
        </p>
        <h2>Examples</h2>
        <p>
          Alerts are available for any length of text, as well as an optional
          dismiss button. For proper styling, use one of the eight required
          contextual classes (e.g., .alert-success). For inline dismissal, you
          can either use them with <code class="highlighter-rouge">toggle</code>{" "}
          function, or use the{" "}
          <code class="highlighter-rouge">UncontrolledAlert</code> instead (see
          examples down bellow);
        </p>
        <div className="bd-example">
          <Alert color="primary">This is a primary alert—check it out!</Alert>
          <Alert color="info">This is a info alert—check it out!</Alert>
          <Alert color="success">This is a success alert—check it out!</Alert>
          <Alert color="danger">This is a danger alert—check it out!</Alert>
          <Alert color="warning">This is a warning alert—check it out!</Alert>
          <Alert color="default">This is a default alert—check it out!</Alert>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamples}
        </SyntaxHighlighter>
        <h2>Link color</h2>
        <p>
          Use the <code className="highlighter-rouge">.alert-link</code> utility
          class to quickly provide matching colored links within any alert.
        </p>
        <div className="bd-example">
          <Alert color="primary">
            This is a primary alert with{" "}
            <a href="#pablo" className="alert-link">
              an example link
            </a>. Give it a click if you like.
          </Alert>
          <Alert color="info">
            This is a info alert with{" "}
            <a
              href="#pablo"
              className="alert-link"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>. Give it a click if you like.
          </Alert>
          <Alert color="success">
            This is a success alert with{" "}
            <a
              href="#pablo"
              className="alert-link"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>. Give it a click if you like.
          </Alert>
          <Alert color="danger">
            This is a danger alert with{" "}
            <a
              href="#pablo"
              className="alert-link"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>. Give it a click if you like.
          </Alert>
          <Alert color="warning">
            This is a warning alert with{" "}
            <a
              href="#pablo"
              className="alert-link"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>. Give it a click if you like.
          </Alert>
          <Alert color="default">
            This is a default alert with{" "}
            <a
              href="#pablo"
              className="alert-link"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>. Give it a click if you like.
          </Alert>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeLinkColor}
        </SyntaxHighlighter>
        <h2>
          Dismissing with <code class="highlighter-rouge">toggle</code> function
        </h2>
        <div className="bd-example">
          <Alert
            color="info"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </Alert>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeDismissingToggle}
        </SyntaxHighlighter>
        <h2>
          Dismissing with{" "}
          <code class="highlighter-rouge">UncontrolledAlert</code> component
        </h2>
        <div className="bd-example">
          <UncontrolledAlert color="info">
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </UncontrolledAlert>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeDismissingUncontrolledAlert}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/alerts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap alerts documentation
          </a>.
        </p>
        <br />
        <br />
        <br />
      </>
    );
  }
}

export default Alerts;
