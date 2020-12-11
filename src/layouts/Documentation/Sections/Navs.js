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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/styles/prism";
import { Nav, NavItem, NavLink } from "reactstrap";

const codeBase = `<Nav>
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Another Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink disabled href="#">Disabled Link</NavLink>
    </NavItem>
</Nav>`;

const codeCenter = `<Nav className="justify-content-center">
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Another Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink disabled href="#">Disabled Link</NavLink>
    </NavItem>
</Nav>`;
const codeRight = `<Nav className="justify-content-right">
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Another Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink disabled href="#">Disabled Link</NavLink>
    </NavItem>
</Nav>`;

const codeVertical = `<Nav vertical>
    <NavItem>
        <NavLink href="#" active>Active</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink disabled href="#">Disabled</NavLink>
    </NavItem>
</Nav>`;

const codeVertical1 = `<Nav vertical tag="nav">
  <NavItem>
    <NavLink href="#" active>
      Active
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink disabled href="#">
      Disabled
    </NavLink>
  </NavItem>
</Nav>`;

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      activeTabIcons: "4",
      hTabs: "ht1",
      vTabs: "vt1",
      pageSubcategories: "ps1",
    };
    this.toggle = this.toggle.bind(this);
    this.toggle = this.toggleIcons.bind(this);
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  toggleIcons(tab) {
    if (this.state.activeTabIcons !== tab) {
      this.setState({
        activeTabIcons: tab,
      });
    }
  }
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Navs
        </h1>
        <p className="bd-lead">
          Documentation and examples for how to use reactstrap's included
          navigation components.
        </p>
        <h2>Base nav</h2>
        <p>
          Navigation available in Bootstrap share general markup and styles,
          from the base <code className="highlighter-rouge">.nav</code> class to
          the active and disabled states. Swap modifier classes and props to
          switch between each style.
        </p>
        <p>
          The base .nav component is built with flexbox and provide a strong
          foundation for building all types of navigation components. It
          includes some style overrides (for working with lists), some link
          padding for larger hit areas, and basic disabled styling.
        </p>
        <div className="bd-callout bd-callout-info">
          <p>
            The base <code className="highlighter-rouge">.nav</code> component
            does not include any{" "}
            <code className="highlighter-rouge">.active</code> state. The
            following examples include the class, mainly to demonstrate that
            this particular class does not trigger any special styling.
          </p>
        </div>
        <div className="bd-example">
          <Nav>
            <NavItem>
              <NavLink href="#" active>
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Nav, NavItem, NavLink } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeBase}
        </SyntaxHighlighter>
        <h2>Available styles</h2>
        <p>
          Change the style of <code className="highlighter-rouge">nav</code>{" "}
          component with modifiers and utilities. Mix and match as needed, or
          build your own.
        </p>
        <h3>Horizontal alignment</h3>
        <p>
          Change the horizontal alignment of your nav with flexbox utilities. By
          default, navs are left-aligned, but you can easily change them to
          center or right aligned.
        </p>
        <p>
          Centered with{" "}
          <code className="highlighter-rouge">.justify-content-center</code>:
        </p>
        <div className="bd-example">
          <Nav className="justify-content-center">
            <NavItem>
              <NavLink href="#" active>
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Nav, NavItem, NavLink } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeCenter}
        </SyntaxHighlighter>
        <div className="bd-example">
          <Nav className="justify-content-right">
            <NavItem>
              <NavLink href="#" active>
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Nav, NavItem, NavLink } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeRight}
        </SyntaxHighlighter>
        <h3>Vertical</h3>
        <p>
          Stack your navigation by changing the flex item direction with the{" "}
          <code className="highlighter-rouge">.flex-column</code> utility or you
          can use <code className="highlighter-rouge">vertical</code> prop. Need
          to stack them on some viewports but not others? Use the responsive
          versions (e.g.,{" "}
          <code className="highlighter-rouge">.flex-sm-column</code>).
        </p>
        <div className="bd-example">
          <Nav vertical>
            <NavItem>
              <NavLink href="#" active>
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Nav, NavItem, NavLink } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeVertical}
        </SyntaxHighlighter>
        <p>
          You can choose to change the default tag of the{" "}
          <code class="highlighter-rouge">Nav</code> to something else:
        </p>
        <div className="bd-example">
          <Nav vertical tag="nav">
            <NavItem>
              <NavLink href="#" active>
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeVertical1}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          For more information please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/tabs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap's tabs documentation
          </a>{" "}
          and{" "}
          <a
            href="https://reactstrap.github.io/components/navs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap's navs documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Accordion;
