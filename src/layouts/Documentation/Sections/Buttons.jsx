import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

import Button from "components/CustomButton/CustomButton.jsx";

const codeColorsExample = `<Button color="primary">Primary</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>
<Button color="default">Default</Button>`;

const codeSizesExample = `<Button color="primary" size="lg">Large</Button>
<Button color="primary">Normal</Button>
<Button color="primary" size="sm">Small</Button>`;

const codeStylesExample = `<Button color="primary">Default</Button>
<Button color="primary" round>Round</Button>
<Button color="primary" fab round icon>
  <i className="fa fa-heart"></i>
</Button>
<Button color="primary" round outline>
  <i className="fa fa-heart"></i> With Icon
</Button>
<Button color="primary" link>
    link
</Button>
<Button color="primary" neutral>Neutral</Button>`;

const codeDisabledButtons = `<Button color="primary" size="lg" disabled>Primary button</Button>
<Button color="secondary" size="lg" disabled>Button</Button>`;

const codeDisabledA = `<Button href="#" color="primary" size="lg" disabled>Primary link</Button>
<Button href="#" color="secondary" size="lg" disabled>Link</Button>`;

const codeProps = `CustomButton.propTypes = {
  simple: PropTypes.bool,
  round: PropTypes.bool,
  icon: PropTypes.bool,
  neutral: PropTypes.bool,
  wd: PropTypes.bool,
  link: PropTypes.bool,
  fab: PropTypes.bool,
  // this is an icon
  leftLabel: PropTypes.string,
  // this is an icon
  rightLabel: PropTypes.string
};`;

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Buttons
        </h1>
        <p className="bd-lead">
          Use Paper Dashboard's custom button styles for actions in forms,
          dialogs, and more with support for multiple sizes, states, and more.
        </p>
        <h2>Import</h2>
        <p>
          To use the custom buttons you need to import the custom made
          component:
        </p>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import Button from 'elements/CustomButton/CustomButton.jsx';`}</SyntaxHighlighter>
        <h2>Examples</h2>
        <p>
          Paper Dashboard has changed the predefined button styles from
          Bootstrap, each serving its own semantic purpose, with a few extras
          thrown in for more control.
        </p>
        <div className="bd-example">
          <Button color="primary">Primary</Button>
          <Button color="info">Info</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
          <Button color="default">Default</Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeColorsExample}
        </SyntaxHighlighter>
        <h2>Style buttons</h2>
        <p>
          We added extra classes (defined by <code>props</code>) that can help
          you better customise the look. Let's see some examples:
        </p>
        <div className="bd-example">
          <Button color="primary">Default</Button>
          <Button color="primary" round>
            Round
          </Button>
          <Button color="primary" fab round icon>
            <i className="fa fa-heart" />
          </Button>
          <Button color="primary" round outline>
            <i className="fa fa-heart" /> With Icon
          </Button>
          <Button color="primary" link>
            link
          </Button>
          <Button color="primary" neutral>
            Neutral
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeStylesExample}
        </SyntaxHighlighter>
        <h2>Sizes</h2>
        <p>
          Fancy larger or smaller buttons? Add <code>{`size="lg"`}</code> or{" "}
          <code>{`size="sm"`}</code> for additional sizes.
        </p>
        <div className="bd-example">
          <Button color="primary" size="lg">
            Large
          </Button>
          <Button color="primary">Normal</Button>
          <Button color="primary" size="sm">
            Small
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSizesExample}
        </SyntaxHighlighter>
        <h2>
          <code>{`<a>`}</code> tag with button styles
        </h2>
        <p>
          Adding the <code>href</code> prop (without specifying a{" "}
          <code>tag</code> prop) will default the button to a link.
        </p>
        <h2>Disabled state</h2>
        <p>
          Make buttons look inactive by adding the <code>disabled</code> boolean
          attribute to any <code>{`<Button>`}</code> element.
        </p>
        <div className="bd-example">
          <Button color="primary" size="lg" disabled>
            Primary button
          </Button>
          <Button color="secondary" size="lg" disabled>
            Button
          </Button>
          <SyntaxHighlighter language="jsx" style={prism}>
            {codeDisabledButtons}
          </SyntaxHighlighter>
          <Button href="#" color="primary" size="lg" disabled>
            Primary link
          </Button>
          <Button href="#" color="secondary" size="lg" disabled>
            Link
          </Button>
          <SyntaxHighlighter language="jsx" style={prism}>
            {codeDisabledA}
          </SyntaxHighlighter>
        </div>
        <h2>Props</h2>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeProps}
        </SyntaxHighlighter>
        <p>
          You can refer to{" "}
          <a
            href="https://reactstrap.github.io/components/buttons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap documentation
          </a>{" "}
          for more props.
        </p>
      </div>
    );
  }
}

export default Buttons;
