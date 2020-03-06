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
import { Button, Badge } from "reactstrap";

const codeExamplesImport = `import { Button, Badge } from 'reactstrap';`;
const codeExamples = `<Button color="primary">
    Notifications <Badge color="default">4</Badge>
</Button>`;

const codeContextual = `<Badge color="primary">Primary</Badge>
<Badge color="info">Info</Badge>
<Badge color="success">Success</Badge>
<Badge color="danger">Danger</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="default">Default</Badge>`;

const codePills = `<Badge color="primary" pill>Primary</Badge>
<Badge color="info" pill>Info</Badge>
<Badge color="success" pill>Success</Badge>
<Badge color="danger" pill>Danger</Badge>
<Badge color="warning" pill>Warning</Badge>
<Badge color="default" pill>Default</Badge>`;

const codeLinks = `<Badge href="#" color="primary">Primary</Badge>
<Badge href="#" color="info">Info</Badge>
<Badge href="#" color="success">Success</Badge>
<Badge href="#" color="danger">Danger</Badge>
<Badge href="#" color="warning">Warning</Badge>
<Badge href="#" color="default">Default</Badge>`;

class Badges extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Badges
        </h1>
        <p className="bd-lead">
          Documentation and examples for badges, our small count and labeling
          component.
        </p>
        <h2>Examples</h2>
        <p>
          Badges can be used as part of links or buttons to provide a counter.
        </p>
        <div className="bd-example">
          <Button color="primary">
            Notifications <Badge color="default">4</Badge>
          </Button>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamplesImport}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamples}
        </SyntaxHighlighter>
        <h2>Contextual variations</h2>
        <p>
          Add any of the below mentioned modifier color props to change the
          appearance of a badge.
        </p>
        <div className="bd-example">
          <Badge color="primary">Primary</Badge>
          <Badge color="info">Info</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="danger">Danger</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="default">Default</Badge>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeContextual}
        </SyntaxHighlighter>
        <h2>Pill badges</h2>
        <p>
          Use the <code class="highlighter-rouge">pill</code> modifier prop to
          make badges more rounded (with a larger{" "}
          <code class="highlighter-rouge">border-radius</code> and additional
          horizontal <code class="highlighter-rouge">padding</code>). Useful if
          you miss the badges from bootstrap v3.
        </p>
        <div className="bd-example">
          <Badge color="primary" pill>
            Primary
          </Badge>
          <Badge color="info" pill>
            Info
          </Badge>
          <Badge color="success" pill>
            Success
          </Badge>
          <Badge color="danger" pill>
            Danger
          </Badge>
          <Badge color="warning" pill>
            Warning
          </Badge>
          <Badge color="default" pill>
            Default
          </Badge>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePills}
        </SyntaxHighlighter>
        <h2>Links</h2>
        <p>
          Adding the <code class="highlighter-rouge">href</code> prop (without
          specifying a <code class="highlighter-rouge">tag</code> prop) will
          default the badge to a link.
        </p>
        <div className="bd-example">
          <Badge href="#" color="primary" onClick={e => e.preventDefault()}>
            Primary
          </Badge>
          <Badge href="#" color="info" onClick={e => e.preventDefault()}>
            Info
          </Badge>
          <Badge href="#" color="success" onClick={e => e.preventDefault()}>
            Success
          </Badge>
          <Badge href="#" color="danger" onClick={e => e.preventDefault()}>
            Danger
          </Badge>
          <Badge href="#" color="warning" onClick={e => e.preventDefault()}>
            Warning
          </Badge>
          <Badge href="#" color="default" onClick={e => e.preventDefault()}>
            Default
          </Badge>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeLinks}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/badge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap badge documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default Badges;
