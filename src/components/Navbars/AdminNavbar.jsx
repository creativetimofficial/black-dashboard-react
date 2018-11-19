import React from "react";
import classnames from "classnames";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Modal,
  UncontrolledCollapse
} from "reactstrap";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  componentDidUpdate(e) {
    if (
      window.outerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        color: "bg-white"
      });
    } else {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
  };
  // this function opens and closes the collapse on small devices
  // it also adds navbar-transparent class to the navbar when closed
  // ad bg-white when opened
  toggleCollapse = () => {
    let newState = {
      collapseOpen: !this.state.collapseOpen
    };
    if (!this.state.collapseOpen) {
      newState["color"] = "bg-white";
    } else {
      newState["color"] = "navbar-transparent";
    }
    this.setState(newState);
  };
  render() {
    return (
      <>
        <Navbar className=" navbar-absolute navbar-transparent" expand="lg">
          <Container fluid>
            <div className=" navbar-wrapper">
              <div className=" navbar-toggle d-inline">
                <button className=" navbar-toggler" type="button">
                  <span className=" navbar-toggler-bar bar1" />
                  <span className=" navbar-toggler-bar bar2" />
                  <span className=" navbar-toggler-bar bar3" />
                </button>
              </div>
              <NavbarBrand>Dynamic Brand should be in place here</NavbarBrand>
            </div>
            <button
              aria-expanded={false}
              aria-label="Toggle navigation"
              className=" navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              id="navigation"
              type="button"
            >
              <span className=" navbar-toggler-bar navbar-kebab" />
              <span className=" navbar-toggler-bar navbar-kebab" />
              <span className=" navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse id="navigation" navbar toggler="#navigation">
              <Nav className=" ml-auto" navbar>
                <InputGroup className=" search-bar">
                  <Button
                    color="link"
                    data-target="#searchModal"
                    data-toggle="modal"
                    id="search-button"
                  >
                    <i className=" tim-icons icon-zoom-split" />
                    <span className=" d-lg-none d-md-block">Search</span>
                  </Button>
                </InputGroup>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                  >
                    <div className=" notification d-none d-lg-block d-xl-block" />
                    <i className=" tim-icons icon-sound-wave" />
                    <p className=" d-lg-none">Notifications</p>
                  </DropdownToggle>
                  <DropdownMenu className=" dropdown-navbar" right>
                    <NavLink>
                      <DropdownItem
                        className=" nav-item"
                        onClick={e => e.preventDefault()}
                      >
                        Mike John responded to your email
                      </DropdownItem>
                    </NavLink>
                    <NavLink>
                      <DropdownItem
                        className=" nav-item"
                      >
                        You have 5 more tasks
                      </DropdownItem>
                    </NavLink>
                    <NavLink>
                      <DropdownItem
                        className=" nav-item"
                      >
                        Your friend Michael is in town
                      </DropdownItem>
                    </NavLink>
                    <NavLink>
                      <DropdownItem
                        className=" nav-item"
                      >
                        Another notification
                      </DropdownItem>
                    </NavLink>
                    <NavLink>
                      <DropdownItem
                        className=" nav-item"
                      >
                        Another one
                      </DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                    onClick={e => e.preventDefault()}
                  >
                    <div className=" photo">
                      <img alt="..." src={require("assets/img/anime3.png")} />
                    </div>
                    <b className=" caret d-none d-lg-block d-xl-block" />
                    <p className=" d-lg-none">Log out</p>
                  </DropdownToggle>
                  <DropdownMenu className=" dropdown-navbar">
                    <NavLink>
                      <DropdownItem
                        className=" nav-item"
                      >
                        Profile
                      </DropdownItem>
                    </NavLink>
                    <NavLink>
                      <DropdownItem
                        className=" nav-item"
                      >
                        Settings
                      </DropdownItem>
                    </NavLink>
                    <DropdownItem divider />
                    <NavLink>
                      <DropdownItem
                        className=" nav-item"
                      >
                        Log out
                      </DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <li className=" separator d-lg-none" />
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Modal modalClassName=" modal-search">
          <div className=" modal-header">
            <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text" />
            <button
              aria-label="Close"
              className=" close"
              data-dismiss="modal"
              type="button"
            >
              <i className=" tim-icons icon-simple-remove" />
            </button>
          </div>
        </Modal>
      </>
    );
  }
}

export default AdminNavbar;
