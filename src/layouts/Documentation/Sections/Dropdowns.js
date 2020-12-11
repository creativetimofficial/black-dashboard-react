/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/styles/prism";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledButtonDropdown,
  Button,
  Col,
  Row,
} from "reactstrap";

const codeExamples = `<UncontrolledDropdown>
    <DropdownToggle caret data-toggle="dropdown">
        Dropdown button
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
    </DropdownMenu>
</UncontrolledDropdown>`;

const codeExamplesColor = `<UncontrolledDropdown group>
    <DropdownToggle caret color="danger" data-toggle="dropdown">
        Danger
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
    </DropdownMenu>
</UncontrolledDropdown>`;

const codeExamplesSplit = `<UncontrolledButtonDropdown>
    <Button id="caret" color="primary">Primary</Button>
    <DropdownToggle caret className="dropdown-toggle-split" color="primary" data-toggle="dropdown"/>
    <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider/>
        <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
</UncontrolledButtonDropdown>`;

const codeExamplesVariation = `<UncontrolledDropdown group direction="up">
    <DropdownToggle caret>
        Dropdown
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
    </DropdownMenu>
</UncontrolledDropdown>
<UncontrolledButtonDropdown direction="up">
    <Button id="caret">Split dropup</Button>
    <DropdownToggle caret className="dropdown-toggle-split"/>
    <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider/>
        <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
</UncontrolledButtonDropdown>`;

const codeExamplesColors = `<Col xs={6} className="ml-auto">
    <UncontrolledDropdown>
      <DropdownToggle caret data-toggle="dropdown">
        Dropdown button
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </Col>
  <Col xs={6} className="mr-auto">
    <UncontrolledDropdown>
      <DropdownToggle caret data-toggle="dropdown">
        Dropdown button
      </DropdownToggle>
      <DropdownMenu className="dropdown-black">
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </Col>
</Row>`;

class Dropdowns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Dropdowns
        </h1>
        <p className="bd-lead">
          Toggle contextual overlays for displaying lists of links and more with
          the reactstrap dropdown.
        </p>
        <h2>Examples</h2>
        <p>
          The <code className="highlighter-rouge">Dropdown</code> component is
          used to pass the <code className="highlighter-rouge">isOpen</code>{" "}
          &amp; <code className="highlighter-rouge">toggle</code> props via
          context to the following components:{" "}
          <code className="highlighter-rouge">DropdownToggle</code>,{" "}
          <code className="highlighter-rouge">DropdownMenu</code>. The{" "}
          <code className="highlighter-rouge">DropdownToggle</code> uses the{" "}
          <code className="highlighter-rouge">Button</code> component
          internally, meaning it also accepts all the props the{" "}
          <Link to="/documentation/buttons/">Button component</Link> accepts.
        </p>
        <p>
          You can either use a controlled or a uncontrolled dropdown. In our
          examples we are going to use uncontrolled dropdowns.
        </p>
        <h3>Single button dropdowns</h3>
        <div className="bd-example">
          <UncontrolledDropdown>
            <DropdownToggle caret data-toggle="dropdown">
              Dropdown button
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamples}
        </SyntaxHighlighter>
        <p>The best part is you can do this with any button variant, too:</p>
        <div className="bd-example">
          <UncontrolledDropdown group>
            <DropdownToggle caret color="primary" data-toggle="dropdown">
              Primary
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown group>
            <DropdownToggle caret color="secondary" data-toggle="dropdown">
              Secondary
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown group>
            <DropdownToggle caret color="success" data-toggle="dropdown">
              Success
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown group>
            <DropdownToggle caret color="info" data-toggle="dropdown">
              Info
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown group>
            <DropdownToggle caret color="warning" data-toggle="dropdown">
              Warning
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown group>
            <DropdownToggle caret color="danger" data-toggle="dropdown">
              Danger
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamplesColor}
        </SyntaxHighlighter>
        <h3>Split button dropdowns</h3>
        <div className="bd-example">
          <UncontrolledButtonDropdown>
            <Button id="caret" color="primary">
              Primary
            </Button>
            <DropdownToggle
              caret
              className="dropdown-toggle-split"
              data-toggle="dropdown"
              color="primary"
            />
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <UncontrolledButtonDropdown>
            <Button id="caret" color="secondary">
              Secondary
            </Button>
            <DropdownToggle
              caret
              className="dropdown-toggle-split"
              data-toggle="dropdown"
              color="secondary"
            />
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <UncontrolledButtonDropdown>
            <Button id="caret" color="success">
              Success
            </Button>
            <DropdownToggle
              caret
              className="dropdown-toggle-split"
              data-toggle="dropdown"
              color="success"
            />
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <UncontrolledButtonDropdown>
            <Button id="caret" color="info">
              Info
            </Button>
            <DropdownToggle
              caret
              className="dropdown-toggle-split"
              data-toggle="dropdown"
              color="info"
            />
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <UncontrolledButtonDropdown>
            <Button id="caret" color="warning">
              Warning
            </Button>
            <DropdownToggle
              caret
              className="dropdown-toggle-split"
              data-toggle="dropdown"
              color="warning"
            />
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <UncontrolledButtonDropdown>
            <Button id="caret" color="danger">
              Danger
            </Button>
            <DropdownToggle
              caret
              className="dropdown-toggle-split"
              data-toggle="dropdown"
              color="danger"
            />
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamplesSplit}
        </SyntaxHighlighter>
        <h2>Dropup variation</h2>
        <div className="bd-example">
          <UncontrolledDropdown group direction="up">
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledButtonDropdown direction="up">
            <Button id="caret">Split dropup</Button>
            <DropdownToggle caret className="dropdown-toggle-split" />
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamplesVariation}
        </SyntaxHighlighter>
        <h2>Colors</h2>
        <p>
          Set for the DropdownMenu{" "}
          <code className="highlighter-rouge">.dropdown-black</code> className
          to change the drodown background’s color.
        </p>
        <div className="bd-example">
          <Row>
            <Col xs={6} className="ml-auto">
              <UncontrolledDropdown>
                <DropdownToggle caret data-toggle="dropdown">
                  Dropdown button
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
            <Col xs={6} className="mr-auto">
              <UncontrolledDropdown>
                <DropdownToggle caret data-toggle="dropdown">
                  Dropdown button
                </DropdownToggle>
                <DropdownMenu className="dropdown-black">
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
          </Row>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamplesColors}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/dropdowns/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap dropdowns documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Dropdowns;
