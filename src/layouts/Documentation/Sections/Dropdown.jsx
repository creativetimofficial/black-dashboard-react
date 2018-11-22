import React from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledButtonDropdown
} from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";

const codeExamples = `<UncontrolledDropdown>
    <DropdownToggle caret>
        Dropdown button
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
    </DropdownMenu>
</UncontrolledDropdown>`;

const codeExamplesColor = `<UncontrolledDropdown group>
    <DropdownToggle caret color="danger">
        Danger
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
    </DropdownMenu>
</UncontrolledDropdown>`;

const codeExamplesSplit = `<UncontrolledButtonDropdown>
    <Button id="caret" color="primary">Ceva</Button>
    <DropdownToggle caret className="dropdown-toggle-split" color="primary" />
    <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider/>
        <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
</UncontrolledButtonDropdown>`;

const codeExamplesVariation = `<UncontrolledDropdown group>
    <DropdownToggle caret>
        Dropdown
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
    </DropdownMenu>
</UncontrolledDropdown>
<UncontrolledButtonDropdown dropup>
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

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
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
          The <code>Dropdown</code> component is used to pass the{" "}
          <code>isOpen</code> &amp; <code>toggle</code> props via context to the
          following components: <code>DropdownToggle</code>,{" "}
          <code>DropdownMenu</code>. The <code>DropdownToggle</code> uses the{" "}
          <code>Button</code> component internally, meaning it also accepts all
          the props the{" "}
          <Link to="/documentation/buttons/">Button component</Link> accepts.
        </p>
        <p>
          You can either use a controlled or a uncontrolled dropdown. In our
          examples we are going to use uncontrolled dropdowns.
        </p>
        <h3>Single button dropdowns</h3>
        <div className="bd-example">
          <UncontrolledDropdown>
            <DropdownToggle caret>Dropdown button</DropdownToggle>
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
            <DropdownToggle
              caret
              color="primary"
            >
              Primary
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown group>
            <DropdownToggle
              caret
              color="secondary"
            >
              Secondary
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown group>
            <DropdownToggle
              caret
              color="success"
            >
              Success
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown group>
            <DropdownToggle
              caret
              color="info"
            >
              Info
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown group>
            <DropdownToggle
              caret
              color="warning"
            >
              Warning
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown group>
            <DropdownToggle
              caret
              color="danger"
            >
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
          <UncontrolledDropdown group>
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledButtonDropdown dropup>
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
        <h2>Props</h2>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/dropdowns/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap dropdowns documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default Dropdown;
