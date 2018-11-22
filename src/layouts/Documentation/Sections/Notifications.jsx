import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { Alert, Row, Col } from "reactstrap";
import Notify from "react-notification-alert";

import Button from "components/CustomButton/CustomButton.jsx";

const codeExampleImport = `import { Alert } from 'reactstrap';`;
const codeExampleConstruct = `constructor(props) {
    super(props);
    this.state = {
        visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
}
onDismiss(){
    this.setState({visible: !this.state.visible})
}`;

const codeExampleStyles = `<Alert color="info"><span>This is a plain notification</span></Alert>

<Alert
    color="info"

    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>This is a notification with close button.</span>
</Alert>

<Alert
    color="info"
    className="alert-with-icon"

    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span data-notify="icon" className="now-ui-icons ui-1_bell-53"></span>
    <span data-notify="message">This is a notification with close button and icon.</span>
</Alert>

<Alert
    color="info"
    className="alert-with-icon"
    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span data-notify="icon" className="now-ui-icons ui-1_bell-53"></span>
    <span data-notify="message">
        This is a notification with close button and icon and have many lines.
        You can see that the icon and the close button are always vertically aligned.
        This is a beautiful notification. So you don't have to worry about the style.
    </span>
</Alert>`;

const codeExampleStates = `<Alert
    color="primary"

    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Primary - </b> This is a regular notification made with
        <code>color="primary"</code>
    </span>
</Alert>
<Alert
    color="primary"

    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Secondary - </b> This is a regular notification made with
        <code>color="secondary"</code>
    </span>
</Alert>
<Alert
    color="primary"

    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Success - </b> This is a regular notification made with
        <code>color="success"</code>
    </span>
</Alert>
<Alert
    color="primary"

    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Danger - </b> This is a regular notification made with
        <code>color="danger"</code>
    </span>
</Alert>
<Alert
    color="primary"

    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Warning - </b> This is a regular notification made with
         <code>color="warning"</code>
    </span>
</Alert>
<Alert
    color="primary"

    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Info - </b> This is a regular notification made with
        <code>color="info"</code>
    </span>
</Alert>
<Alert
    color="primary"

    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Light - </b> This is a regular notification made with
        <code>color="light"</code>
    </span>
</Alert>
<Alert
    color="primary"

    isOpen={this.state.visible}
    toggle={this.onDismiss}
>
    <span>
        <b> Dark - </b> This is a regular notification made with
        <code>color="dark"</code>
    </span>
</Alert>`;

const codeExamplePlacesOptions = `var options = {
    place: place,
    message: message,
    type: type,
    autoDismiss: seconds,
    icon: icon
};
this.refs.notify.notificationAlert(options);`;

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.notify = this.notify.bind(this);
  }
  onDismiss() {}
  notify() {
    var color = Math.floor(Math.random() * 8 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "secondary";
        break;
      case 3:
        type = "success";
        break;
      case 4:
        type = "danger";
        break;
      case 5:
        type = "warning";
        break;
      case 6:
        type = "info";
        break;
      case 7:
        type = "light";
        break;
      case 8:
        type = "dark";
        break;
      default:
        break;
    }
    color = Math.floor(Math.random() * 6 + 1);
    var place;
    switch (color) {
      case 1:
        place = "tl";
        break;
      case 2:
        place = "tc";
        break;
      case 3:
        place = "tr";
        break;
      case 4:
        place = "bl";
        break;
      case 5:
        place = "bc";
        break;
      case 6:
        place = "br";
        break;
      default:
        break;
    }
    var options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Paper Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      autoDismiss: 7,
      icon: "now-ui-icons ui-1_bell-53"
    };
    this.refs.notify.notificationAlert(options);
  }
  render() {
    return (
      <div>
        <Notify ref="notify" />
        <h1 className="bd-title" id="content">
          React Notification Alert v0.0.8
        </h1>
        <p className="bd-lead">
          We are very proud to present you our new{" "}
          <code>notification system</code>. It was coded by us from scratch, so
          you won't have to install any third libraries.
        </p>
        <h2>Styles</h2>
        <div className="bd-example">
          <Alert color="info">
            <span>This is a plain notification</span>
          </Alert>
          <Alert
            color="info"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            <span>This is a notification with close button.</span>
          </Alert>
          <Alert
            color="info"
            className="alert-with-icon"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            <span data-notify="icon" className="now-ui-icons ui-1_bell-53" />
            <span data-notify="message">
              This is a notification with close button and icon.
            </span>
          </Alert>
          <Alert
            color="info"
            className="alert-with-icon"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            <span data-notify="icon" className="now-ui-icons ui-1_bell-53" />
            <span data-notify="message">
              This is a notification with close button and icon and have many
              lines. You can see that the icon and the close button are always
              vertically aligned. This is a beautiful notification. So you don't
              have to worry about the style.
            </span>
          </Alert>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleImport}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleConstruct}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleStyles}
        </SyntaxHighlighter>
        <h2>States</h2>
        <div className="bd-example">
          <Alert
            color="primary"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            <span>
              <b> Primary - </b> This is a regular notification made with{" "}
              <code>color="primary"</code>
            </span>
          </Alert>
          <Alert
            color="secondary"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            <span>
              <b> Secondary - </b> This is a regular notification made with{" "}
              <code>color="secondary"</code>
            </span>
          </Alert>
          <Alert
            color="success"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            <span>
              <b> Success - </b> This is a regular notification made with{" "}
              <code>color="success"</code>
            </span>
          </Alert>
          <Alert
            color="danger"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            <span>
              <b> Danger - </b> This is a regular notification made with{" "}
              <code>color="danger"</code>
            </span>
          </Alert>
          <Alert
            color="warning"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            <span>
              <b> Warning - </b> This is a regular notification made with{" "}
              <code>color="warning"</code>
            </span>
          </Alert>
          <Alert
            color="info"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            <span>
              <b> Info - </b> This is a regular notification made with{" "}
              <code>color="info"</code>
            </span>
          </Alert>
          <Alert
            color="light"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            <span>
              <b> Light - </b> This is a regular notification made with{" "}
              <code>color="light"</code>
            </span>
          </Alert>
          <Alert
            color="dark"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            <span>
              <b> Dark - </b> This is a regular notification made with{" "}
              <code>color="dark"</code>
            </span>
          </Alert>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleImport}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleConstruct}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleStates}
        </SyntaxHighlighter>
        <h2>Places</h2>
        <div className="bd-example">
          <div className="places-button">
            <Row>
              <Col md={6} lg={6}>
                <Button block onClick={() => this.notify()}>
                  Random Position and Color
                </Button>
              </Col>
            </Row>
          </div>
        </div>
        <h3>Usage</h3>
        <p>First of all, you need to import it:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`import Notify from 'react-notification-alert';`}
        </SyntaxHighlighter>
        <p>
          Then, you have to put this component somewhere in your render method
          like so:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`<Notify ref="notify"/>`}
        </SyntaxHighlighter>
        <p>
          We've chose to get this component by using <code>refs</code> as you
          can see.
        </p>
        <p>
          After that, you have to call the{" "}
          <code>notificationAlert function</code> from this component with some{" "}
          <code>options</code>:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamplePlacesOptions}
        </SyntaxHighlighter>
        <h2>
          Props passed in <code>notificationAlert function</code>
        </h2>
        <p>
          Please refer to{" "}
          <a
            href="https://github.com/creativetimofficial/react-notification-alert"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-notification-alert documentation
          </a>.
        </p>
        <h2>Props for Alerts</h2>
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

export default Notifications;
