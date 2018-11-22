import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { UncontrolledAlert, Alert } from "reactstrap";

const codeExamplesImport = `import { Alert } from 'reactstrap';`;
const codeExamples = `<Alert color="primary">
    This is a primary alert—check it out!
</Alert>
<Alert color="success">
    This is a primary alert—check it out!
</Alert>
<Alert color="danger">
    This is a primary alert—check it out!
</Alert>
<Alert color="warning">
    This is a primary alert—check it out!
</Alert>
<Alert color="info">
    This is a primary alert—check it out!
</Alert>`;

const codeLinkImport = `import { Alert } from 'reactstrap';`;
const codeLink = `<Alert color="primary">
  This is a primary alert with{" "}
  <a
    href="#/"
    className="alert-link"
    onClick={e => e.preventDefault()}
  >
    an example link
  </a>. Give it a click if you like.
</Alert>
<Alert color="success">
  This is a success alert with{" "}
  <a
    href="#/"
    className="alert-link"
    onClick={e => e.preventDefault()}
  >
    an example link
  </a>. Give it a click if you like.
</Alert>
<Alert color="danger">
  This is a danger alert with{" "}
  <a
    href="#/"
    className="alert-link"
    onClick={e => e.preventDefault()}
  >
    an example link
  </a>. Give it a click if you like.
</Alert>
<Alert color="warning">
  This is a warning alert with{" "}
  <a
    href="#/"
    className="alert-link"
    onClick={e => e.preventDefault()}
  >
    an example link
  </a>. Give it a click if you like.
</Alert>
<Alert color="info">
  This is a info alert with{" "}
  <a
    href="#/"
    className="alert-link"
    onClick={e => e.preventDefault()}
  >
    an example link
  </a>. Give it a click if you like.
</Alert>`;

const codeDismissing1Import = `import { Alert } from 'reactstrap';`;
const codeDismissing1Constructor = `constructor(props) {
    super(props);
    this.state = {
        visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
}
onDismiss(){
    this.setState({visible: !this.state.visible});
}`;
const codeDismissing1 = `<Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
    <b>Holy guacamole!</b> You should check in on some of those fields below.
</Alert>`;

const codeDismissing2Import = `import { UncontrolledAlert } from 'reactstrap';`;
const codeDismissing2 = `<UncontrolledAlert color="info">
    <b>Holy guacamole!</b> You should check in on some of those fields below.
</UncontrolledAlert>`;

class Alerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Alerts
        </h1>
        <p className="bd-lead">
          Provide contextual feedback messages for typical user actions with the
          handful of available and flexible alert messages.
        </p>
        <h2>Examples</h2>
        <p>
          Alerts are available for any length of text, as well as an optional
          dismiss button. For proper styling, use one of the eight contextual
          color (e.g., <code>color="info"</code>).
        </p>
        <div className="bd-example">
          <Alert color="primary">This is a primary alert—check it out!</Alert>
          <Alert color="success">This is a primary alert—check it out!</Alert>
          <Alert color="danger">This is a primary alert—check it out!</Alert>
          <Alert color="warning">This is a primary alert—check it out!</Alert>
          <Alert color="info">This is a primary alert—check it out!</Alert>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamplesImport}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamples}
        </SyntaxHighlighter>
        <h2>Link color</h2>
        <p>
          Use the <code>.alert-link</code> utility class to quickly provide
          matching colored links within any alert.
        </p>
        <div className="bd-example">
          <Alert color="primary">
            This is a primary alert with{" "}
            <a
              href="#/"
              className="alert-link"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>. Give it a click if you like.
          </Alert>
          <Alert color="success">
            This is a success alert with{" "}
            <a
              href="#/"
              className="alert-link"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>. Give it a click if you like.
          </Alert>
          <Alert color="danger">
            This is a danger alert with{" "}
            <a
              href="#/"
              className="alert-link"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>. Give it a click if you like.
          </Alert>
          <Alert color="warning">
            This is a warning alert with{" "}
            <a
              href="#/"
              className="alert-link"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>. Give it a click if you like.
          </Alert>
          <Alert color="info">
            This is a info alert with{" "}
            <a
              href="#/"
              className="alert-link"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>. Give it a click if you like.
          </Alert>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeLinkImport}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeLink}
        </SyntaxHighlighter>
        <h2>Dismissing</h2>
        <p>There are two ways of dismissing reactstrap's alerts:</p>
        <ol>
          <li>
            First one is to add to the <code>Alert</code> tag a{" "}
            <code>toggle</code> function like so:
            <div className="bd-example">
              <Alert
                color="info"
                isOpen={this.state.visible}
                toggle={this.onDismiss}
              >
                <b>Holy guacamole!</b> You should check in on some of those
                fields below.
              </Alert>
            </div>
            <SyntaxHighlighter language="jsx" style={prism}>
              {codeDismissing1Import}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="jsx" style={prism}>
              {codeDismissing1Constructor}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="jsx" style={prism}>
              {codeDismissing1}
            </SyntaxHighlighter>
          </li>
          <li>
            Second way is to use <code>UncontrolledAlert</code> like so
            <div className="bd-example">
              <UncontrolledAlert color="info">
                <b>Holy guacamole!</b> You should check in on some of those
                fields below.
              </UncontrolledAlert>
            </div>
            <SyntaxHighlighter language="jsx" style={prism}>
              {codeDismissing2Import}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="jsx" style={prism}>
              {codeDismissing2}
            </SyntaxHighlighter>
          </li>
        </ol>
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
      </div>
    );
  }
}

export default Alerts;
