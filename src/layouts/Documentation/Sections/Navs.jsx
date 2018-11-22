import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

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

const codeTabsPlainDep = `constructor(props) {
    super(props);
    this.state = {
        activeTab: '1',
    };
    this.toggle = this.toggle.bind(this);
}
toggle(tab) {
    if (this.state.activeTab !== tab) {
        this.setState({
            activeTab: tab
        });
    }
}`;

const codeTabsPlain = `<Card className="card-plain">
    <CardHeader>
        <Nav tabs>
            <NavItem>
                <NavLink
                    className={this.state.activeTab === '1' ? 'active':''}
                    onClick={() => { this.toggle('1'); }}
                    >
                        Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className={this.state.activeTab === '2' ? 'active':''}
                    onClick={() => { this.toggle('2'); }}
                >
                    Updates
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className={this.state.activeTab === '3' ? 'active':''}
                    onClick={() => { this.toggle('3'); }}
                >
                    History
                </NavLink>
            </NavItem>
        </Nav>
    </CardHeader>
    <CardBody>
        <TabContent activeTab={this.state.activeTab} className="text-center">
            <TabPane tabId="1">
                <p>I think that's a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it's supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
            </TabPane>
            <TabPane tabId="2">
                <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that's a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that's a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
            </TabPane>
            <TabPane tabId="3">
                <p> I think that's a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that's a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
            </TabPane>
        </TabContent>
    </CardBody>
</Card>`;

const codePillsHorizontalDep = `constructor(props) {
    super(props);
    this.state = {
        hTabs: "ht1",
    };
}`;

const codePillsHorizontal = `<Nav pills className="nav-pills-primary">
    <NavItem>
        <NavLink
            className={this.state.hTabs === "ht1" ? "active":""}
            onClick={() => this.setState({hTabs: "ht1"})}
        >
            Profile
        </NavLink>
    </NavItem>
    <NavItem>
        <NavLink
            className={this.state.hTabs === "ht2" ? "active":""}
            onClick={() => this.setState({hTabs: "ht2"})}
        >
            Settings
        </NavLink>
    </NavItem>
    <NavItem>
        <NavLink
            className={this.state.hTabs === "ht3" ? "active":""}
            onClick={() => this.setState({hTabs: "ht3"})}
        >
            Options
        </NavLink>
    </NavItem>
</Nav>
<TabContent activeTab={this.state.hTabs} className="tab-space">
    <TabPane tabId="ht1">
        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
        <br/><br/>
        Dramatically visualize customer directed convergence without revolutionary ROI.
    </TabPane>
    <TabPane tabId="ht2">
        Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
        <br/><br/>
        Dramatically maintain clicks-and-mortar solutions without functional solutions.
    </TabPane>
    <TabPane tabId="ht3">
        Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
        <br/><br/>
        Dynamically innovate resource-leveling customer service for state of the art customer service.
    </TabPane>
</TabContent>`;

const codePillsVerticalDep = `constructor(props) {
    super(props);
    this.state = {
        vTabs: "vt1",
    };
}`;
const codePillsVertical = `<Row>
    <Col md={4} xs={12}>
        <Nav pills className="nav-pills-primary flex-column">
            <NavItem>
                <NavLink
                    className={this.state.vTabs === "vt1" ? "active":""}
                    onClick={() => this.setState({vTabs: "vt1"})}
                >
                    Profile
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className={this.state.vTabs === "vt2" ? "active":""}
                    onClick={() => this.setState({vTabs: "vt2"})}
                >
                    Settings
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className={this.state.vTabs === "vt3" ? "active":""}
                    onClick={() => this.setState({vTabs: "vt3"})}
                >
                    Options
                </NavLink>
            </NavItem>
        </Nav>
    </Col>
    <Col md={8} xs={12}>
        <TabContent activeTab={this.state.vTabs}>
            <TabPane tabId="vt1">
                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                <br/><br/>
                Dramatically visualize customer directed convergence without revolutionary ROI.
            </TabPane>
            <TabPane tabId="vt2">
                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                <br/><br/>
                Dramatically maintain clicks-and-mortar solutions without functional solutions.
            </TabPane>
            <TabPane tabId="vt3">
                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                <br/><br/>
                Dynamically innovate resource-leveling customer service for state of the art customer service.
            </TabPane>
        </TabContent>
    </Col>
</Row>`;

const codePillsIconsDep = `constructor(props) {
    super(props);
    this.state = {
        pageSubcategories: 'ps1'
    };
}`;
const codePillsIcons = `<Nav pills className="nav-pills-primary nav-pills-icons">
    <NavItem>
        <NavLink
            className={this.state.pageSubcategories === "ps1" ? "active":""}
            onClick={() => this.setState({pageSubcategories: "ps1"})}
        >
            <i className="now-ui-icons objects_umbrella-13"></i>
            Home
        </NavLink>
    </NavItem>
    <NavItem>
        <NavLink
            className={this.state.pageSubcategories === "ps2" ? "active":""}
            onClick={() => this.setState({pageSubcategories: "ps2"})}
        >
            <i className="now-ui-icons shopping_shop"></i>
            Messages
        </NavLink>
    </NavItem>
    <NavItem>
        <NavLink
            className={this.state.pageSubcategories === "ps3" ? "active":""}
            onClick={() => this.setState({pageSubcategories: "ps3"})}
        >
            <i className="now-ui-icons ui-2_settings-90"></i>
            Settings
        </NavLink>
    </NavItem>
</Nav>
<TabContent className="tab-space" activeTab={this.state.pageSubcategories}>
    <TabPane tabId="ps1">
        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
        <br/><br/>
        Dramatically visualize customer directed convergence without revolutionary ROI.
    </TabPane>
    <TabPane tabId="ps2">
        Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
        <br/><br/>
        Dramatically maintain clicks-and-mortar solutions without functional solutions.
    </TabPane>
    <TabPane tabId="ps3">
        Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
        <br/><br/>
        Dynamically innovate resource-leveling customer service for state of the art customer service.
    </TabPane>
</TabContent>`;

const codePillsDropdown = `<Nav pills>
    <NavItem>
        <NavLink href="#" active>Active</NavLink>
    </NavItem>
    <UncontrolledDropdown nav>
        <DropdownToggle nav caret>
            Dropdown
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Separated link</DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
    <NavItem>
        <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
        <NavLink disabled href="#">Disabled</NavLink>
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
      pageSubcategories: "ps1"
    };
    this.toggle = this.toggle.bind(this);
    this.toggle = this.toggleIcons.bind(this);
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  toggleIcons(tab) {
    if (this.state.activeTabIcons !== tab) {
      this.setState({
        activeTabIcons: tab
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
          from the base <code>.nav</code> class to the active and disabled
          states. Swap modifier classes and props to switch between each style.
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
          Change the style of <code>nav</code> component with modifiers and
          utilities. Mix and match as needed, or build your own.
        </p>
        <h3>Horizontal alignment</h3>
        <p>
          Change the horizontal alignment of your nav with flexbox utilities. By
          default, navs are left-aligned, but you can easily change them to
          center or right aligned.
        </p>
        <p>
          Centered with <code>.justify-content-center</code>:
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
          <code>.flex-column</code> utility or you can use <code>vertical</code>{" "}
          prop. Need to stack them on some viewports but not others? Use the
          responsive versions (e.g., <code>.flex-sm-column</code>).
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
        <h3>Tabs on plain card</h3>
        <div className="bd-example">
          <Card className="card-plain">
            <CardHeader>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={this.state.activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={this.state.activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Updates
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={this.state.activeTab === "3" ? "active" : ""}
                    onClick={() => {
                      this.toggle("3");
                    }}
                  >
                    History
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody>
              <TabContent
                activeTab={this.state.activeTab}
                className="text-center"
              >
                <TabPane tabId="1">
                  <p>
                    I think that's a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it's supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                  </p>
                </TabPane>
                <TabPane tabId="2">
                  <p>
                    {" "}
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers. I understand
                    culture. I am the nucleus. I think that's a responsibility
                    that I have, to push possibilities, to show people, this is
                    the level that things could be at. I think that's a
                    responsibility that I have, to push possibilities, to show
                    people, this is the level that things could be at.{" "}
                  </p>
                </TabPane>
                <TabPane tabId="3">
                  <p>
                    {" "}
                    I think that's a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. I will be the leader of a company that ends up
                    being worth billions of dollars, because I got the answers.
                    I understand culture. I am the nucleus. I think that's a
                    responsibility that I have, to push possibilities, to show
                    people, this is the level that things could be at.
                  </p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Nav, NavItem, NavLink, Card, CardHeader, CardBody, TabPane, TabContent } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeTabsPlainDep}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeTabsPlain}
        </SyntaxHighlighter>
        <h3>Tabs with Icons on Card</h3>
        <div className="bd-example">
          <Card>
            <CardHeader>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={
                      this.state.activeTabIcons === "4" ? "active" : ""
                    }
                    onClick={() => {
                      this.toggleIcons("4");
                    }}
                  >
                    <i className="now-ui-icons emoticons_satisfied" /> Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={
                      this.state.activeTabIcons === "5" ? "active" : ""
                    }
                    onClick={() => {
                      this.toggleIcons("5");
                    }}
                  >
                    <i className="now-ui-icons ui-2_chat-round" /> Messages
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={
                      this.state.activeTabIcons === "6" ? "active" : ""
                    }
                    onClick={() => {
                      this.toggleIcons("6");
                    }}
                  >
                    <i className="now-ui-icons ui-1_settings-gear-63" />{" "}
                    Settings
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody>
              <TabContent
                activeTab={this.state.activeTabIcons}
                className="text-center"
              >
                <TabPane tabId="4">
                  <p>
                    I think that's a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it's supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                  </p>
                </TabPane>
                <TabPane tabId="5">
                  <p>
                    {" "}
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers. I understand
                    culture. I am the nucleus. I think that's a responsibility
                    that I have, to push possibilities, to show people, this is
                    the level that things could be at. I think that's a
                    responsibility that I have, to push possibilities, to show
                    people, this is the level that things could be at.{" "}
                  </p>
                </TabPane>
                <TabPane tabId="6">
                  <p>
                    {" "}
                    I think that's a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. I will be the leader of a company that ends up
                    being worth billions of dollars, because I got the answers.
                    I understand culture. I am the nucleus. I think that's a
                    responsibility that I have, to push possibilities, to show
                    people, this is the level that things could be at.
                  </p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </div>
        <h3>Pills</h3>
        <p>
          Take that same HTML, but use <code>pills</code> prop instead:
        </p>
        <h4>Horizontal pills</h4>
        <div className="bd-example">
          <Nav pills className="nav-pills-primary">
            <NavItem>
              <NavLink
                className={this.state.hTabs === "ht1" ? "active" : ""}
                onClick={() => this.setState({ hTabs: "ht1" })}
              >
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={this.state.hTabs === "ht2" ? "active" : ""}
                onClick={() => this.setState({ hTabs: "ht2" })}
              >
                Settings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={this.state.hTabs === "ht3" ? "active" : ""}
                onClick={() => this.setState({ hTabs: "ht3" })}
              >
                Options
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.hTabs} className="tab-space">
            <TabPane tabId="ht1">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits.
              <br />
              <br />
              Dramatically visualize customer directed convergence without
              revolutionary ROI.
            </TabPane>
            <TabPane tabId="ht2">
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              <br />
              <br />
              Dramatically maintain clicks-and-mortar solutions without
              functional solutions.
            </TabPane>
            <TabPane tabId="ht3">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas.
              <br />
              <br />
              Dynamically innovate resource-leveling customer service for state
              of the art customer service.
            </TabPane>
          </TabContent>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Nav, NavItem, NavLink, TabPane, TabContent } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePillsHorizontalDep}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePillsHorizontal}
        </SyntaxHighlighter>
        <h4>Vertical Tabs</h4>
        <div className="bd-example">
          <Row>
            <Col md={4} xs={12}>
              <Nav pills className="nav-pills-primary flex-column">
                <NavItem>
                  <NavLink
                    className={this.state.vTabs === "vt1" ? "active" : ""}
                    onClick={() => this.setState({ vTabs: "vt1" })}
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={this.state.vTabs === "vt2" ? "active" : ""}
                    onClick={() => this.setState({ vTabs: "vt2" })}
                  >
                    Settings
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={this.state.vTabs === "vt3" ? "active" : ""}
                    onClick={() => this.setState({ vTabs: "vt3" })}
                  >
                    Options
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md={8} xs={12}>
              <TabContent activeTab={this.state.vTabs}>
                <TabPane tabId="vt1">
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits.
                  <br />
                  <br />
                  Dramatically visualize customer directed convergence without
                  revolutionary ROI.
                </TabPane>
                <TabPane tabId="vt2">
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas.
                  <br />
                  <br />
                  Dramatically maintain clicks-and-mortar solutions without
                  functional solutions.
                </TabPane>
                <TabPane tabId="vt3">
                  Completely synergize resource taxing relationships via premier
                  niche markets. Professionally cultivate one-to-one customer
                  service with robust ideas.
                  <br />
                  <br />
                  Dynamically innovate resource-leveling customer service for
                  state of the art customer service.
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Row, Col, Nav, NavItem, NavLink, TabPane, TabContent } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePillsVerticalDep}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePillsVertical}
        </SyntaxHighlighter>
        <h4>With Icons</h4>
        <div className="bd-example">
          <Nav pills className="nav-pills-primary nav-pills-icons">
            <NavItem>
              <NavLink
                className={
                  this.state.pageSubcategories === "ps1" ? "active" : ""
                }
                onClick={() => this.setState({ pageSubcategories: "ps1" })}
              >
                <i className="now-ui-icons objects_umbrella-13" />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={
                  this.state.pageSubcategories === "ps2" ? "active" : ""
                }
                onClick={() => this.setState({ pageSubcategories: "ps2" })}
              >
                <i className="now-ui-icons shopping_shop" />
                Messages
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={
                  this.state.pageSubcategories === "ps3" ? "active" : ""
                }
                onClick={() => this.setState({ pageSubcategories: "ps3" })}
              >
                <i className="now-ui-icons ui-2_settings-90" />
                Settings
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent
            className="tab-space"
            activeTab={this.state.pageSubcategories}
          >
            <TabPane tabId="ps1">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits.
              <br />
              <br />
              Dramatically visualize customer directed convergence without
              revolutionary ROI.
            </TabPane>
            <TabPane tabId="ps2">
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              <br />
              <br />
              Dramatically maintain clicks-and-mortar solutions without
              functional solutions.
            </TabPane>
            <TabPane tabId="ps3">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas.
              <br />
              <br />
              Dynamically innovate resource-leveling customer service for state
              of the art customer service.
            </TabPane>
          </TabContent>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Nav, NavItem, NavLink, TabPane, TabContent } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePillsIconsDep}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePillsIcons}
        </SyntaxHighlighter>
        <h4>Pills with dropdowns</h4>
        <div className="bd-example">
          <Nav pills>
            <NavItem>
              <NavLink href="#" active>
                Active
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
        >{`import { Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePillsDropdown}
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
          </a>.
        </p>
      </div>
    );
  }
}

export default Accordion;
