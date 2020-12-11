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
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

const colors = [
  "dark",
  "success",
  "danger",
  "warning",
  "white",
  "primary",
  "info",
];

const codeNav = `import React from 'react';
import { Navbar, Conatiner, NavbarBrand, NavbarToggler, Collapse, Nav, NavItme, NavLink } from 'reactstrap';

class Example extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
            <Navbar expand="lg" color="primary">
                <Container>
                    <NavbarBrand>Navbar</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem active>
                                <NavLink to="#pablo">
                                    Home <span className="sr-only">(current)</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#pablo">
                                    Features
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#pablo">
                                    Pricing
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#pablo" disabled>
                                    Disabled
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}`;

const codeNavDropdown = `import React from 'react';
import { Navbar, Conatiner, NavbarBrand, NavbarToggler, Collapse, Nav, NavItme, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Example extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    dropdownToggle(e){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render(){
        return(
            <Navbar expand="lg" color="primary">
                <Container>
                    <NavbarBrand>Navbar</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem active>
                                <NavLink to="#pablo">
                                    Home <span className="sr-only">(current)</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#pablo">
                                    Features
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#pablo">
                                    Pricing
                                </NavLink>
                            </NavItem>
                            <Dropdown tag="nav" isOpen={this.state.dropdownOpen} toggle={(e) => this.dropdownToggle(e)}>
                                <DropdownToggle caret nav>
                                    <p>Dropdown Link</p>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a">Action</DropdownItem>
                                    <DropdownItem tag="a">Another Action</DropdownItem>
                                    <DropdownItem tag="a">Something else here</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}`;

const codeNavForm = `import React from 'react';
import { Navbar, Conatiner, NavbarBrand, NavbarToggler, Collapse, Nav, NavItme, NavLink, Form, FormGroup, Input, Button } from 'reactstrap';

class Example extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
            <Navbar expand="lg" color="primary">
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand>Navbar</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                        </NavbarToggler>
                    </div>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem active>
                                <NavLink to="#pablo">
                                    Link
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#pablo">
                                    Link
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Form inline className="ml-auto">
                            <FormGroup className="no-border">
                                <Input type="text" placeholder="Search"/>
                            </FormGroup>
                            <Button color="link" className="btn-icon btn-round">
                                <i className="nc-icon nc-zoom-split"></i>
                            </Button>
                        </Form>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}`;

const codeNavText = `
import React from 'react';
import { Navbar, Conatiner, } from 'reactstrap';

class Example extends React.Component{
    render(){
        return(
            <Navbar color="primary" className="navbar-dark">
                <Container>
                    <span className="navbar-text">Navbar text with an inline element</span>
                </Container>
            </Navbar>
        );
    }
}`;

const codeNavTextMix = `
import React from 'react';
import { Navbar, Conatiner, NavbarBrand, NavbarToggler, Collapse, Nav, NavItme, NavLink } from 'reactstrap';

class Example extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
            <Navbar expand="lg" color="primary">
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand>Navbar</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                        </NavbarToggler>
                    </div>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem active>
                                <NavLink to="#pablo">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#pablo">
                                    Features
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#pablo">
                                    Pricing
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <span className="navbar-text">Navbar text with an inline element</span>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}`;

var codeColorMap = "";

colors.map((prop, key) => {
  codeColorMap +=
    `<Navbar expand="lg" color="` +
    prop +
    `">
        {/* navbar content */}
</Navbar>\n\n`;
  return null;
});

const codeColor = codeColorMap;

const codeContainer = `<Navbar expand="lg" color={'primary'} light>
    <Container>
        <NavbarBrand>Navbar</NavbarBrand>
    </Container>
</Navbar>`;

const codeDefault = `<Navbar expand="lg" color={'primary'} light>
    <Container>
        <NavbarBrand>Default</NavbarBrand>
    </Container>
</Navbar>`;

const codeFixedTop = `<Navbar expand="lg" color={'primary'} light fixed={'top'}>
    <Container>
        <NavbarBrand>Fixed Top</NavbarBrand>
    </Container>
</Navbar>`;

const codeFixedBottom = `<Navbar expand="lg" color={'primary'} light fixed={'bottom'}>
    <Container>
        <NavbarBrand>Fixed Bottom</NavbarBrand>
    </Container>
</Navbar>`;

const codeStickyTop = `<Navbar expand="lg" color={'primary'} light className="sticky-top">
    <Container>
        <NavbarBrand>Sticky Top</NavbarBrand>
    </Container>
</Navbar>`;

const codeHidden = `import React from 'react';
import { Navbar, Conatiner, NavbarBrand, NavbarToggler, Collapse, Nav, NavItme, NavLink, Form, FormGroup, Input, Button } from 'reactstrap';

class Example extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
            <Navbar expand="lg" color='primary'>
                <Container>
                    <NavbarToggler onClick={this.toggle}>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <NavbarBrand>Hidden Brand</NavbarBrand>
                        <Nav navbar>
                            <NavItem active>
                                <NavLink to="#pablo">
                                    Link
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#pablo">
                                    Link
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Form inline className="ml-auto">
                            <FormGroup className={"no-border"}>
                                <Input type="text" placeholder="Search"/>
                            </FormGroup>
                            <Button color="link" className="btn-icon btn-round">
                                <i className="nc-icon nc-zoom-split"></i>
                            </Button>
                        </Form>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}`;

const codeBrand = `import React from 'react';
import { Navbar, Conatiner, NavbarBrand, NavbarToggler, Collapse, Nav, NavItme, NavLink, Form, FormGroup, Input, Button } from 'reactstrap';

class Example extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
            <Navbar expand="lg" color='primary'>
                <Container>
                    <NavbarBrand>Hidden Brand</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem active>
                                <NavLink to="#pablo">
                                    Link
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#pablo">
                                    Link
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Form inline className="ml-auto">
                            <FormGroup className={"no-border"}>
                                <Input type="text" placeholder="Search"/>
                            </FormGroup>
                            <Button color="link" className="btn-icon btn-round">
                                <i className="nc-icon nc-zoom-split"></i>
                            </Button>
                        </Form>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}`;

const codeBrandRight = `import React from 'react';
import { Navbar, Conatiner, NavbarBrand, NavbarToggler, Collapse, Nav, NavItme, NavLink, Form, FormGroup, Input, Button } from 'reactstrap';

class Example extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
            <Navbar expand="lg" color='primary'>
                <Container>
                    <NavbarToggler onClick={this.toggle}>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </NavbarToggler>
                    <NavbarBrand>Hidden Brand</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem active>
                                <NavLink to="#pablo">
                                    Link
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#pablo">
                                    Link
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Form inline className="ml-auto">
                            <FormGroup className={"no-border"}>
                                <Input type="text" placeholder="Search"/>
                            </FormGroup>
                            <Button color="link" className="btn-icon btn-round">
                                <i className="nc-icon nc-zoom-split"></i>
                            </Button>
                        </Form>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Navbars
        </h1>
        <p className="bd-lead">
          Documentation and examples for reactstrap's powerful, responsive
          navigation header, the navbar. Includes support for branding,
          navigation, and more, including support for our collapse plugin..
        </p>
        <h2>How it works</h2>
        <p>
          Here’s what you need to know before getting started with the navbar:
        </p>
        <ul>
          <li>
            Navbars require a wrapping{" "}
            <code className="highlighter-rouge">Navbar</code> component with{" "}
            <code className="highlighter-rouge">{`expand={'sm'|'md'|'lg'|'xl'}`}</code>{" "}
            prop for responsive collapsing and{" "}
            <a href="#color-schemes">color</a> prop for color scheme classes.
          </li>
          <li>
            Navbars and their contents are fluid by default. Use{" "}
            <a href="#containers">optional containers</a> to limit their
            horizontal width.
          </li>
          <li>
            Navbars are responsive by default, but you can easily modify them to
            change that.
          </li>
          <li>
            Navbars are hidden by default when printing. Force them to be
            printed by adding{" "}
            <code className="highlighter-rouge">.d-print</code> to the{" "}
            <code className="highlighter-rouge">Navbar</code>.
          </li>
        </ul>
        <p>Read on for an example and list of supported sub-components.</p>
        <h3>Navs</h3>
        <p>
          <b>
            Navigation in navbars will also grow to occupy as much horizontal
            space as possible
          </b>{" "}
          to keep your navbar contents securely aligned.
        </p>
        <p>
          Active states—with <code className="highlighter-rouge">active</code>{" "}
          prop to indicate the current page can be applied directly to{" "}
          <code className="highlighter-rouge">NavLink</code>s or their immediate
          parent <code className="highlighter-rouge">NavItem</code>s.
        </p>
        <div className="bd-example" data-example-id="">
          <Navbar expand="lg" color="primary">
            <Container>
              <NavbarBrand>Navbar</NavbarBrand>
              <NavbarToggler onClick={this.toggle}>
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </NavbarToggler>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem active>
                    <NavLink to="#pablo">
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#pablo">Features</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#pablo">Pricing</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#pablo" disabled>
                      Disabled
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeNav}
        </SyntaxHighlighter>
        <p>
          You may also utilize dropdowns in your navbar nav. You will have to
          specify the <code class="highlighter-rouge">{`tag='nav'`}</code> prop.
        </p>
        <div className="bd-example" data-example-id="">
          <Navbar expand="lg" color="primary">
            <Container>
              <NavbarBrand>Navbar</NavbarBrand>
              <NavbarToggler onClick={this.toggle}>
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </NavbarToggler>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem active>
                    <NavLink to="#pablo">
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#pablo">Features</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#pablo">Pricing</NavLink>
                  </NavItem>
                  <Dropdown
                    tag="nav"
                    isOpen={this.state.dropdownOpen}
                    toggle={(e) => this.dropdownToggle(e)}
                  >
                    <DropdownToggle caret nav>
                      <p>Dropdown Link</p>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Action</DropdownItem>
                      <DropdownItem tag="a">Another Action</DropdownItem>
                      <DropdownItem tag="a">Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="bd-example" data-example-id="">
          <SyntaxHighlighter language="jsx" style={prism}>
            {codeNavDropdown}
          </SyntaxHighlighter>
        </div>
        <h3>Forms</h3>
        <p>
          Place various form controls and components within a navbar with{" "}
          <code class="highlighter-rouge">inline</code> prop.
        </p>
        <div className="bd-example" data-example-id="">
          <Navbar expand="lg" color="primary">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand>Navbar</NavbarBrand>
                <NavbarToggler onClick={this.toggle}>
                  <span className="navbar-toggler-bar navbar-kebab" />
                  <span className="navbar-toggler-bar navbar-kebab" />
                  <span className="navbar-toggler-bar navbar-kebab" />
                </NavbarToggler>
              </div>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem active>
                    <NavLink to="#pablo">Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#pablo">Link</NavLink>
                  </NavItem>
                </Nav>
                <Form inline className="ml-auto">
                  <FormGroup className="no-border">
                    <Input type="text" placeholder="Search" />
                  </FormGroup>
                  <Button color="link" className="btn-icon btn-round">
                    <i className="tim-icons icon-zoom-split" />
                  </Button>
                </Form>
              </Collapse>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeNavForm}
        </SyntaxHighlighter>
        <h3>Text</h3>
        <p>
          Navbars may contain bits of text with the help of{" "}
          <code className="highlighter-rouge">.navbar-text</code>. This class
          adjusts vertical alignment and horizontal spacing for strings of text.
        </p>
        <div className="bd-example" data-example-id="">
          <Navbar color="primary" className="navbar-dark">
            <Container>
              <span className="navbar-text">
                Navbar text with an inline element
              </span>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeNavText}
        </SyntaxHighlighter>
        <p>Mix and match with other components and utilities as needed.</p>
        <div className="bd-example" data-example-id="">
          <Navbar expand="lg" color="primary">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand>Navbar</NavbarBrand>
                <NavbarToggler onClick={this.toggle}>
                  <span className="navbar-toggler-bar navbar-kebab" />
                  <span className="navbar-toggler-bar navbar-kebab" />
                  <span className="navbar-toggler-bar navbar-kebab" />
                </NavbarToggler>
              </div>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem active>
                    <NavLink to="#pablo">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#pablo">Features</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#pablo">Pricing</NavLink>
                  </NavItem>
                </Nav>
                <span className="navbar-text">
                  Navbar text with an inline element
                </span>
              </Collapse>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeNavTextMix}
        </SyntaxHighlighter>
        <h2>Color schemes</h2>
        <p>
          Theming the navbar has never been easier thanks to the combination of
          theming classes and{" "}
          <code className="highlighter-rouge">background-color</code> utilities.
          Choose from <code className="highlighter-rouge">light</code> for use
          with light background colors, or{" "}
          <code className="highlighter-rouge">dark</code> for dark background
          colors. Then, customize with{" "}
          <code className="highlighter-rouge">{`color={*}`}</code> prop.
        </p>
        <div className="bd-example" data-example-id="">
          {colors.map((prop, key) => {
            return (
              <Navbar expand="lg" color={prop} key={key}>
                <Container>
                  <NavbarBrand>Navbar</NavbarBrand>
                  <NavbarToggler onClick={this.toggle}>
                    <span className="navbar-toggler-bar navbar-kebab" />
                    <span className="navbar-toggler-bar navbar-kebab" />
                    <span className="navbar-toggler-bar navbar-kebab" />
                  </NavbarToggler>
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                      <NavItem active>
                        <NavLink to="#pablo">Link</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#pablo">Link</NavLink>
                      </NavItem>
                    </Nav>
                    <Form inline className="ml-auto">
                      <FormGroup
                        className={prop !== "white" ? "no-border" : ""}
                      >
                        <Input type="text" placeholder="Search" />
                      </FormGroup>
                      <Button
                        color={prop === "white" ? "info" : "link"}
                        className="btn-icon btn-round"
                      >
                        <i className="tim-icons icon-zoom-split" />
                      </Button>
                    </Form>
                  </Collapse>
                </Container>
              </Navbar>
            );
          })}
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeColor}
        </SyntaxHighlighter>
        <h2>Containers</h2>
        <p>
          When the container is within your navbar, its horizontal padding is
          removed at breakpoints lower than your specified{" "}
          <code className="highlighter-rouge">{`expand={'sm'|'md'|'lg'|'xl'}`}</code>{" "}
          prop. This ensures we’re not doubling up on padding unnecessarily on
          lower viewports when your navbar is collapsed.
        </p>
        <div className="bd-example" data-example-id="">
          <Navbar expand="lg" color={"primary"} light>
            <Container>
              <NavbarBrand>Navbar</NavbarBrand>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeContainer}
        </SyntaxHighlighter>
        <h2>Placement</h2>
        <p>
          Use our <code class="highlighter-rouge">position utilities</code> to
          place navbars in non-static positions. Choose from fixed to the top,
          fixed to the bottom, or stickied to the top (scrolls with the page
          until it reaches the top, then stays there). Fixed navbars use{" "}
          <code className="highlighter-rouge">position: fixed</code>, meaning
          they’re pulled from the normal flow of the DOM and may require custom
          CSS (e.g., <code className="highlighter-rouge">padding-top</code> on
          the <code className="highlighter-rouge">&lt;body&gt;</code>) to
          prevent overlap with other elements.
        </p>
        <p>
          Also note that{" "}
          <strong>
            <code className="highlighter-rouge">.sticky-top</code> uses{" "}
            <code className="highlighter-rouge">position: sticky</code>, which{" "}
            <a href="https://caniuse.com/#feat=css-sticky">
              isn’t fully supported in every browser
            </a>
          </strong>
          .
        </p>
        <div className="bd-example" data-example-id="">
          <Navbar expand="lg" color={"primary"} light>
            <Container>
              <NavbarBrand>Default</NavbarBrand>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeDefault}
        </SyntaxHighlighter>
        <div className="bd-example" data-example-id="">
          <Navbar expand="lg" color={"primary"} light fixed={"top"}>
            <Container>
              <NavbarBrand>Fixed Top</NavbarBrand>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeFixedTop}
        </SyntaxHighlighter>
        <div className="bd-example" data-example-id="">
          <Navbar expand="lg" color={"primary"} light fixed={"bottom"}>
            <Container>
              <NavbarBrand>Fixed Bottom</NavbarBrand>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeFixedBottom}
        </SyntaxHighlighter>
        <div className="bd-example" data-example-id="">
          <Navbar expand="lg" color={"primary"} light className="sticky-top">
            <Container>
              <NavbarBrand>Sticky Top</NavbarBrand>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeStickyTop}
        </SyntaxHighlighter>
        <h2>Responsive behaviors</h2>
        <p>
          Navbars can utilize{" "}
          <code className="highlighter-rouge">NavbarToggler</code>,{" "}
          <code className="highlighter-rouge">NavbarCollapse</code>, and{" "}
          <code className="highlighter-rouge">{`expand={'sm'|'md'|'lg'|'xl'}`}</code>{" "}
          to change when their content collapses behind a button. In combination
          with other utilities, you can easily choose when to show or hide
          particular elements.
        </p>
        <p>
          For navbars that never collapse, add the{" "}
          <code className="highlighter-rouge">expand</code> prop on the navbar.
          For navbars that always collapse, don’t add{" "}
          <code className="highlighter-rouge">expand</code> prop.
        </p>
        <h3>Toggler</h3>
        <p>
          Navbar togglers are left-aligned by default, but should they follow a
          sibling element like a{" "}
          <code className="highlighter-rouge">NavbarBrand</code>, they’ll
          automatically be aligned to the far right. Reversing your markup will
          reverse the placement of the toggler. Below are examples of different
          toggle styles.
        </p>
        <div className="bd-example" data-example-id="">
          <Navbar expand="lg" color="primary">
            <Container>
              <NavbarToggler onClick={this.toggle}>
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </NavbarToggler>
              <Collapse isOpen={this.state.isOpen} navbar>
                <NavbarBrand>Hidden Brand</NavbarBrand>
                <Nav navbar>
                  <NavItem active>
                    <NavLink to="#pablo">Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#pablo">Link</NavLink>
                  </NavItem>
                </Nav>
                <Form inline className="ml-auto">
                  <FormGroup className={"no-border"}>
                    <Input type="text" placeholder="Search" />
                  </FormGroup>
                  <Button color="link" className="btn-icon btn-round">
                    <i className="tim-icons icon-zoom-split" />
                  </Button>
                </Form>
              </Collapse>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeHidden}
        </SyntaxHighlighter>
        <p>With a brand name shown on the left and toggler on the right:</p>
        <div className="bd-example" data-example-id="">
          <Navbar expand="lg" color="primary">
            <Container>
              <NavbarBrand>Brand</NavbarBrand>
              <NavbarToggler onClick={this.toggle}>
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </NavbarToggler>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem active>
                    <NavLink to="#pablo">Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#pablo">Link</NavLink>
                  </NavItem>
                </Nav>
                <Form inline className="ml-auto">
                  <FormGroup className={"no-border"}>
                    <Input type="text" placeholder="Search" />
                  </FormGroup>
                  <Button color="link" className="btn-icon btn-round">
                    <i className="tim-icons icon-zoom-split" />
                  </Button>
                </Form>
              </Collapse>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeBrand}
        </SyntaxHighlighter>
        <p>With a toggler on the left and brand name on the right:</p>
        <div className="bd-example" data-example-id="">
          <Navbar expand="lg" color="primary">
            <Container>
              <NavbarToggler onClick={this.toggle}>
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </NavbarToggler>
              <NavbarBrand>Brand</NavbarBrand>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem active>
                    <NavLink to="#pablo">Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#pablo">Link</NavLink>
                  </NavItem>
                </Nav>
                <Form inline className="ml-auto">
                  <FormGroup className={"no-border"}>
                    <Input type="text" placeholder="Search" />
                  </FormGroup>
                  <Button color="link" className="btn-icon btn-round">
                    <i className="tim-icons icon-zoom-split" />
                  </Button>
                </Form>
              </Collapse>
            </Container>
          </Navbar>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeBrandRight}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/navbar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap navbar documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Navigation;
