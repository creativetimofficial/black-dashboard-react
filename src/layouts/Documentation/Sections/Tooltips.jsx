import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { UncontrolledTooltip } from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";

const codeImport = `import { UncontrolledTooltip } from 'reactstrap';`;

const codeImportControlled = `import { Tooltip } from 'reactstrap';`;

const codeExample = `import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';
import Button from "components/CustomButton/CustomButton.jsx";

class Example extends React.Component{
    render(){
        return (
            <Button color="secondary" id="top">
                Tooltip on top
            </Button>{\` \`}
            <UncontrolledTooltip placement="top" target="top" delay={0}>
                Tooltip on top
            </UncontrolledTooltip>
            <Button color="secondary" id="right">
                Tooltip on right
            </Button>{\` \`}
            <UncontrolledTooltip placement="right" target="right" delay={0}>
                Tooltip on right
            </UncontrolledTooltip>
            <Button color="secondary" id="bottom">
                Tooltip on bottom
            </Button>{\` \`}
            <UncontrolledTooltip placement="bottom" target="bottom" delay={0}>
                Tooltip on bottom
            </UncontrolledTooltip>
            <Button color="secondary" id="left">
                Tooltip on left
            </Button>{\` \`}
            <UncontrolledTooltip placement="left" target="left" delay={0}>
                Tooltip on left
            </UncontrolledTooltip>
            <Button color="secondary" id="html">
                Tooltip with HTML
            </Button>{\` \`}
            <UncontrolledTooltip placement="top" target="#html" delay={0}>
                <em>Tooltip</em> <u>with</u> <b>HTML</b>
            </UncontrolledTooltip>
        );
    }
}`;

class TooltipSection extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Tooltips
        </h1>
        <p className="bd-lead">
          To use this component you need to import it from reactstrap like this:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImport}
        </SyntaxHighlighter>
        <p>
          or if you want a controlled one (you'll have to add a{" "}
          <code>state</code> and a <code>function</code> for controlling the
          tooltip to your component):
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImportControlled}
        </SyntaxHighlighter>
        <h2>Example</h2>
        <p>Hover over the links below to see tooltips:</p>
        <div className="bd-example tooltip-demo">
          <p className="muted">
            Tight pants next level keffiyeh{" "}
            <a href="#pablo" id="probably">
              you probably
            </a>{" "}
            haven't heard of them. Photo booth beard raw denim letterpress vegan
            messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie
            sustainable quinoa 8-bit american apparel{" "}
            <a href="#pablo" id="have">
              have a
            </a>{" "}
            terry richardson vinyl chambray. Beard stumptown, cardigans banh mi
            lomo thundercats. Tofu biodiesel williamsburg marfa, four loko
            mcsweeney's cleanse vegan chambray. A really ironic artisan{" "}
            <a href="#pablo" id="whatever">
              whatever keytar
            </a>, scenester farm-to-table banksy Austin{" "}
            <a href="#pablo" id="twitter">
              twitter handle
            </a>{" "}
            freegan cred raw denim single-origin coffee viral.
            <UncontrolledTooltip placement="top" target="probably" delay={0}>
              Default Tooltip
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="top" target="have" delay={0}>
              Another Tooltip
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="top" target="whatever" delay={0}>
              Another one here
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="top" target="twitter" delay={0}>
              Last Tooltip
            </UncontrolledTooltip>
          </p>
        </div>
        <h3>Interactive demo</h3>
        <p>Hover over the buttons below to see their tooltips.</p>
        <div className="bd-example tooltip-demo">
          <Button color="secondary" id="top">
            Tooltip on top
          </Button>
          {` `}
          <UncontrolledTooltip placement="top" target="top" delay={0}>
            Tooltip on top
          </UncontrolledTooltip>
          <Button color="secondary" id="right">
            Tooltip on right
          </Button>
          {` `}
          <UncontrolledTooltip placement="right" target="right" delay={0}>
            Tooltip on right
          </UncontrolledTooltip>
          <Button color="secondary" id="bottom">
            Tooltip on bottom
          </Button>
          {` `}
          <UncontrolledTooltip placement="bottom" target="bottom" delay={0}>
            Tooltip on bottom
          </UncontrolledTooltip>
          <Button color="secondary" id="left">
            Tooltip on left
          </Button>
          {` `}
          <UncontrolledTooltip placement="left" target="left" delay={0}>
            Tooltip on left
          </UncontrolledTooltip>
          <Button color="secondary" id="html">
            Tooltip with HTML
          </Button>
          {` `}
          <UncontrolledTooltip placement="top" target="#html" delay={0}>
            <em>Tooltip</em> <u>with</u> <b>HTML</b>
          </UncontrolledTooltip>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h2>Props</h2>
        In this examples we have used <code>{`<a>`}</code> elements for the
        tooltips to appear over. You can use different elements. For more
        information about tooltips and how to use them, please refer to{" "}
        <a
          href="https://reactstrap.github.io/components/tooltips/"
          target="_blank"
          rel="noopener noreferrer"
        >
          reactstrap documentation
        </a>.
      </div>
    );
  }
}

export default TooltipSection;
