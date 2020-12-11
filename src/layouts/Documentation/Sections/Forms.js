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
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Col,
  Button,
  Card,
  CardBody,
} from "reactstrap";

const overviewExample = `import React from "react";

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Card,
  CardBody
} from "reactstrap";

const Forms = () => {
  return (
    <Card>
      <CardBody>
        <form>
          <FormGroup>
            <Label for="exampleEmail">Email address</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter email"
            />
            <FormText color="muted">
              We'll never share your email with anyone else.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Check me out
              <span className="form-check-sign">
                <span className="check"></span>
            </span>
            </Label>
          </FormGroup>
          <Button color="primary" type="submit">
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default Forms;
`;

const formControlsExample = `import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody
} from "reactstrap";

const Forms = () => {
  return (
    <Card>
      <CardBody>
        <form>
          <FormGroup>
            <Label for="exampleEmail1">Email address</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmai1l"
              placeholder="name@example.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect1">Example select</Label>
            <Input type="select" name="select" id="exampleSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelectMulti1">Example multiple select</Label>
            <Input
              type="select"
              name="selectMulti"
              id="exampleSelectMulti1"
              multiple
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Example textarea</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
        </form>
      </CardBody>
    </Card>
  );
};

export default Forms;
`;

const successExample = `import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody
} from "reactstrap";

const Forms = () => {
  return (
    <>
      <Card>
        <CardBody>
          <FormGroup className="has-success">
            <Label for="success" className="control-label">Success input</Label>
            <Input type="text" name="success" id="success" defaultValue="Success" />
          </FormGroup>
        </CardBody>
      </Card>
    </>
  );
};

export default Forms;
`;

const dangerExample = `import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody
} from "reactstrap";

const Forms = () => {
  return (
    <>
      <Card>
        <CardBody>
          <FormGroup className="has-danger">
            <Label for="error" className="control-label">Error input</Label>
            <Input type="text" name="error" id="error" defaultValue="Error input" />
          </FormGroup>
        </CardBody>
      </Card>
    </>
  );
};

export default Forms;
`;

const nucleoIconsExample = `import React from "react";

import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Card,
  CardBody
} from "reactstrap";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: ""
    };
  }
  onFocus = () => {
    this.setState({
      focused: "input-group-focus"
    });
  };
  onBlur = () => {
    this.setState({
      focused: ""
    });
  };
  render() {
    return (
      <>
        <Card>
          <CardBody>
            <InputGroup className={this.state.focused}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-single-02" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                type="text"
                placeholder="With Nucleo Icons"
                onFocus={this.onFocus}
                onBlur={this.onBlur}
              />
            </InputGroup>
          </CardBody>
        </Card>
      </>
    );
  }
};

export default Forms;
`;

const faIconsExample = `import React from "react";

import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Card,
  CardBody
} from "reactstrap";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: ""
    };
  }
  onFocus = () => {
    this.setState({
      focused: "input-group-focus"
    });
  };
  onBlur = () => {
    this.setState({
      focused: ""
    });
  };
  render() {
    return (
      <>
        <Card>
          <CardBody>
            <InputGroup className={this.state.focused}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText><i className="fab fa-dribbble"></i></InputGroupText>
              </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="With Font Awesome Icons"
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                />
            </InputGroup>
          </CardBody>
        </Card>
      </>
    );
  }
};

export default Forms;`;

const defaultChecksExample = `import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody
} from "reactstrap";

const Forms = () => {
  return (
    <>
      <Card>
        <CardBody>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Option one is this and that—be sure to include why it's great
              <span className="form-check-sign">
                <span className="check"></span>
            </span>
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="checkbox" disabled/>{' '}
              Option two is disabled
              <span className="form-check-sign">
                <span className="check"></span>
            </span>
            </Label>
          </FormGroup>
        </CardBody>
      </Card>
    </>
  );
};

export default Forms;
`;

const defaultRadiosExample = `import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody
} from "reactstrap";

const Forms = () => {
  return (
    <>
      <Card>
        <CardBody>
          <div className="form-check-radio">
            <Label className="form-check-label">
                <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                Radio is off
                <span className="form-check-sign"></span>
            </Label>
          </div>
          <div className="form-check-radio">
            <Label className="form-check-label">
              <Input type="radio" name="exampleRadios" id="exampleRadios2" value="option2" defaultChecked/>
              Radio is on
              <span className="form-check-sign"></span>
            </Label>
          </div>
          <div className="form-check-radio" disabled>
            <Label className="form-check-label">
              <Input type="radio" name="exampleRadios" id="exampleRadios3" value="option1" disabled />
              Disabled radio is off
              <span className="form-check-sign"></span>
            </Label>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Forms;
`;

const inlineChecksExample = `import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody
} from "reactstrap";

const Forms = () => {
  return (
    <>
      Card>
        <CardBody>
          <FormGroup check inline>
            <Label check>
              <Input type="checkbox" /> 1
              <span className="form-check-sign">
                <span className="check" />
              </span>
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
              <Input type="checkbox" /> 2
              <span className="form-check-sign">
                <span className="check" />
              </span>
            </Label>
          </FormGroup>
          <FormGroup check disabled inline>
            <Label check>
              <Input type="checkbox" disabled /> 3
              <span className="form-check-sign">
                <span className="check" />
              </span>
            </Label>
          </FormGroup>
        </CardBody>
      </Card>
    </>
  );
};

export default Forms;
`;

const inlineRadiosExample = `import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody
} from "reactstrap";

const Forms = () => {
  return (
    <>
      <Card>
        <CardBody>
          <FormGroup check inline className="form-check-radio">
            <Label className="form-check-label">
                <Input type="radio" name="exampleRadios1" id="exampleRadios11" value="option1" />
                1
                <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
          <FormGroup check inline className="form-check-radio">
            <Label className="form-check-label">
              <Input type="radio" name="exampleRadios1" id="exampleRadios12" value="option2" defaultChecked/>
              2
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
          <FormGroup check inline className="form-check-radio disabled">
            <Label className="form-check-label">
              <Input type="radio" name="exampleRadios1" id="exampleRadios13" value="option1" disabled />
              3
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
        </CardBody>
      </Card>
    </>
  );
};

export default Forms;
`;

const formGridExample = `import React from "react";

import {
  Row,
  Col,
  Input,
  Card,
  CardBody
} from "reactstrap";

const Forms = () => {
  return (
    <>
      <Card>
        <CardBody>
          <form>
            <Row>
              <Col>
                <Input type="text" placeholder="First name" />
              </Col>
              <Col>
                <Input type="text" placeholder="Last name" />
              </Col>
            </Row>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default Forms;
`;

const formGrid2Example = `import React from "react";

import {
  Row,
  Col,
  Input,
  Card,
  CardBody
} from "reactstrap";

const Forms = () => {
  return (
    <>
      <Card>
        <CardBody>
          <form>
            <div className="form-row">
              <Col>
                <Input type="text" placeholder="First name" />
              </Col>
              <Col>
                <Input type="text" placeholder="Last name" />
              </Col>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default Forms;
`;

const formGrid3Example = `import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody
} from "reactstrap";

const Forms = () => {
  return (
    <>
      <Card>
        <CardBody>
          <form>
            <div className="form-row">
              <FormGroup className="col-md-6">
                <Label for="inputEmail4">Email</Label>
                <Input type="email"  id="inputEmail4" placeholder="Email"/>
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label for="inputPassword4">Password</Label>
                <Input type="password"  id="inputPassword4" placeholder="Password" autoComplete="off"/>
              </FormGroup>
            </div>
            <FormGroup>
              <Label for="inputAddress">Address</Label>
              <Input type="text"  id="inputAddress" placeholder="1234 Main St"/>
            </FormGroup>
            <FormGroup>
              <Label for="inputAddress2">Address 2</Label>
              <Input type="text"  id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </FormGroup>
            <div className="form-row">
              <FormGroup className="col-md-6">
                <Label for="inputCity">City</Label>
                <Input type="text"  id="inputCity"/>
              </FormGroup>
              <FormGroup className="col-md-4">
                <Label for="inputState">State</Label>
                <Input type="select" name="select" id="inputState" >
                  <option>Choose...</option>
                  <option>...</option>
                </Input>
              </FormGroup>
              <FormGroup className="col-md-2">
                <Label for="inputZip">Zip</Label>
                <Input type="text"  id="inputZip"/>
              </FormGroup>
            </div>
            <FormGroup check>
              <Label className="form-check-label">
                  <Input className="form-check-input" type="checkbox" value=""/>
                  Check me out
                  <span className="form-check-sign">
                    <span className="check"></span>
                  </span>
              </Label>
            </FormGroup>
            <Button type="submit" color="primary">Sign in</Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default Forms;
`;

const disabledExample = `import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody
} from "reactstrap";

const Forms = () => {
  return (
    <>
      <Card>
        <CardBody>
          <form>
            <fieldset disabled>
              <FormGroup>
                <Label for="disabled">Disabled input</Label>
                <Input type="text" id="disabled" placeholder="Disabled input" />
              </FormGroup>
              <FormGroup>
                <Label for="disabled1">Disabled select menu</Label>
                <Input type="select" id="disabled1">
                  <option>Disabled select menu</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup check>
                <Label className="form-check-label">
                    <Input className="form-check-input" type="checkbox" value=""/>
                    Can't check me out
                    <span className="form-check-sign">
                      <span className="check"></span>
                    </span>
                </Label>
              </FormGroup>
              <Button type="submit" color="primary">Submit</Button>
            </fieldset>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default Forms;
`;

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused1: "",
      focused2: "",
    };
  }
  onFocus = (inputName) => {
    this.setState({
      [inputName]: "input-group-focus",
    });
  };
  onBlur = (inputName) => {
    this.setState({
      [inputName]: "",
    });
  };
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Forms
        </h1>
        <p className="bd-lead">
          Examples and usage guidelines for form control styles, layout options,
          and custom components for creating a wide variety of forms.
        </p>
        <h3>Overview</h3>
        <p>
          Here’s a quick example to demonstrate Bootstrap’s form styles. Keep
          reading for documentation on required classes, form layout, and more.
        </p>
        <div className="bd-example">
          <Card>
            <CardBody>
              <form>
                <FormGroup>
                  <Label for="exampleEmail">Email address</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Enter email"
                  />
                  <FormText color="muted">
                    We'll never share your email with anyone else.
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                    autoComplete="off"
                  />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> Check me out
                    <span className="form-check-sign">
                      <span className="check" />
                    </span>
                  </Label>
                </FormGroup>
                <Button color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {overviewExample}
        </SyntaxHighlighter>
        <h3>Form controls</h3>
        <p>
          Textual form controls—like {`<Input>`}s are styled through the{" "}
          <code className="highlighter-rouge">.form-control</code> class.
          Included are styles for general appearance, focus state, sizing, and
          more.
        </p>
        <div className="bd-example">
          <Card>
            <CardBody>
              <form>
                <FormGroup>
                  <Label for="exampleEmail1">Email address</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmai1l"
                    placeholder="name@example.com"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect1">Example select</Label>
                  <Input type="select" name="select" id="exampleSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelectMulti1">
                    Example multiple select
                  </Label>
                  <Input
                    type="select"
                    name="selectMulti"
                    id="exampleSelectMulti1"
                    multiple
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Example textarea</Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
              </form>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {formControlsExample}
        </SyntaxHighlighter>
        <h3>Examples</h3>
        <div className="bd-example">
          <Card>
            <CardBody>
              <FormGroup className="has-success">
                <Label for="success" className="control-label">
                  Success input
                </Label>
                <Input
                  type="text"
                  name="success"
                  id="success"
                  defaultValue="Success"
                />
              </FormGroup>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {successExample}
        </SyntaxHighlighter>
        <div className="bd-example">
          <Card>
            <CardBody>
              <FormGroup className="has-danger">
                <Label for="error" className="control-label">
                  Error input
                </Label>
                <Input
                  type="text"
                  name="error"
                  id="error"
                  defaultValue="Error input"
                />
              </FormGroup>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {dangerExample}
        </SyntaxHighlighter>
        <div className="bd-example">
          <Card>
            <CardBody>
              <InputGroup className={this.state.focused1}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-single-02" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="With Nucleo Icons"
                  onFocus={() => this.onFocus("focused1")}
                  onBlur={() => this.onBlur("focused1")}
                />
              </InputGroup>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {nucleoIconsExample}
        </SyntaxHighlighter>
        <div className="bd-example">
          <Card>
            <CardBody>
              <InputGroup className={this.state.focused2}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fab fa-dribbble" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="With Font Awesome Icons"
                  onFocus={() => this.onFocus("focused2")}
                  onBlur={() => this.onBlur("focused2")}
                />
              </InputGroup>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {faIconsExample}
        </SyntaxHighlighter>
        <h2>Checkboxes and radios</h2>
        <p>
          Default checkboxes and radios are improved upon with the help of{" "}
          <code className="highlighter-rouge">check</code>,{" "}
          <b>
            a single class for both input types that improves the layout and
            behavior of their HTML elements
          </b>
          . Checkboxes are for selecting one or several options in a list, while
          radios are for selecting one option from many.
        </p>
        <p>
          Disabled checkboxes and radios are supported, but to provide a{" "}
          <code className="highlighter-rouge">not-allowed</code> cursor on hover
          of the parent <code className="highlighter-rouge">&lt;Label&gt;</code>
          , you’ll need to add the{" "}
          <code className="highlighter-rouge">.disabled</code> className to the
          parent <code className="highlighter-rouge">check</code>. The disabled
          className will also lighten the text color to help indicate the
          input’s state.
        </p>
        <h3>Default (stacked)</h3>
        <p>
          By default, any number of checkboxes and radios that are immediate
          sibling will be vertically stacked and appropriately spaced with{" "}
          <code className="highlighter-rouge">check</code>.
        </p>
        <div className="bd-example">
          <Card>
            <CardBody>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> Option one is this and that—be sure
                  to include why it's great
                  <span className="form-check-sign">
                    <span className="check" />
                  </span>
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="checkbox" disabled /> Option two is disabled
                  <span className="form-check-sign">
                    <span className="check" />
                  </span>
                </Label>
              </FormGroup>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {defaultChecksExample}
        </SyntaxHighlighter>
        <div className="bd-example">
          <Card>
            <CardBody>
              <FormGroup check className="form-check-radio">
                <Label className="form-check-label">
                  <Input
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                  />
                  Radio is off
                  <span className="form-check-sign" />
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label className="form-check-label">
                  <Input
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                    defaultChecked
                  />
                  Radio is on
                  <span className="form-check-sign" />
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio" disabled>
                <Label className="form-check-label">
                  <Input
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option1"
                    disabled
                  />
                  Disabled radio is off
                  <span className="form-check-sign" />
                </Label>
              </FormGroup>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {defaultRadiosExample}
        </SyntaxHighlighter>
        <h3>Inline</h3>
        <p>
          Group checkboxes or radios on the same horizontal row by adding{" "}
          <code className="highlighter-rouge">inline</code> prop to the{" "}
          <code className="highlighter-rouge">FormGroup</code>.
        </p>
        <div className="bd-example">
          <Card>
            <CardBody>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> 1
                  <span className="form-check-sign">
                    <span className="check" />
                  </span>
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> 2
                  <span className="form-check-sign">
                    <span className="check" />
                  </span>
                </Label>
              </FormGroup>
              <FormGroup check disabled inline>
                <Label check>
                  <Input type="checkbox" disabled /> 3
                  <span className="form-check-sign">
                    <span className="check" />
                  </span>
                </Label>
              </FormGroup>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {inlineChecksExample}
        </SyntaxHighlighter>
        <div className="bd-example">
          <Card>
            <CardBody>
              <FormGroup check inline className="form-check-radio">
                <Label className="form-check-label">
                  <Input
                    type="radio"
                    name="exampleRadios1"
                    id="exampleRadios11"
                    value="option1"
                  />
                  1
                  <span className="form-check-sign" />
                </Label>
              </FormGroup>
              <FormGroup check inline className="form-check-radio">
                <Label className="form-check-label">
                  <Input
                    type="radio"
                    name="exampleRadios1"
                    id="exampleRadios12"
                    value="option2"
                    defaultChecked
                  />
                  2
                  <span className="form-check-sign" />
                </Label>
              </FormGroup>
              <FormGroup check inline className="form-check-radio disabled">
                <Label className="form-check-label">
                  <Input
                    type="radio"
                    name="exampleRadios1"
                    id="exampleRadios13"
                    value="option1"
                    disabled
                  />
                  3
                  <span className="form-check-sign" />
                </Label>
              </FormGroup>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {inlineRadiosExample}
        </SyntaxHighlighter>
        <h2>Layout</h2>
        <p>
          Since Bootstrap applies{" "}
          <code className="highlighter-rouge">display: block</code> and{" "}
          <code className="highlighter-rouge">width: 100%</code> to almost all
          our form controls, forms will by default stack vertically. Additional
          classes can be used to vary this layout on a per-form basis.
        </p>
        <h3>Form grid</h3>
        <p>
          More complex forms can be built using our grid classes. Use these for
          form layouts that require multiple columns, varied widths, and
          additional alignment options.
        </p>
        <div className="bd-example">
          <Card>
            <CardBody>
              <form>
                <Row>
                  <Col>
                    <Input type="text" placeholder="First name" />
                  </Col>
                  <Col>
                    <Input type="text" placeholder="Last name" />
                  </Col>
                </Row>
              </form>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {formGridExample}
        </SyntaxHighlighter>
        <h3>Form row</h3>
        <div className="bd-example">
          <Card>
            <CardBody>
              <form>
                <div className="form-row">
                  <Col>
                    <Input type="text" placeholder="First name" />
                  </Col>
                  <Col>
                    <Input type="text" placeholder="Last name" />
                  </Col>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {formGrid2Example}
        </SyntaxHighlighter>
        <p>More complex layouts can also be created with the grid system.</p>
        <div className="bd-example">
          <Card>
            <CardBody>
              <form>
                <div className="form-row">
                  <FormGroup className="col-md-6">
                    <Label for="inputEmail4">Email</Label>
                    <Input type="email" id="inputEmail4" placeholder="Email" />
                  </FormGroup>
                  <FormGroup className="col-md-6">
                    <Label for="inputPassword4">Password</Label>
                    <Input
                      type="password"
                      id="inputPassword4"
                      placeholder="Password"
                      autoComplete="off"
                    />
                  </FormGroup>
                </div>
                <FormGroup>
                  <Label for="inputAddress">Address</Label>
                  <Input
                    type="text"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="inputAddress2">Address 2</Label>
                  <Input
                    type="text"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </FormGroup>
                <div className="form-row">
                  <FormGroup className="col-md-6">
                    <Label for="inputCity">City</Label>
                    <Input type="text" id="inputCity" />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Label for="inputState">State</Label>
                    <Input type="select" name="select" id="inputState">
                      <option>Choose...</option>
                      <option>...</option>
                    </Input>
                  </FormGroup>
                  <FormGroup className="col-md-2">
                    <Label for="inputZip">Zip</Label>
                    <Input type="text" id="inputZip" />
                  </FormGroup>
                </div>
                <FormGroup check>
                  <Label className="form-check-label">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    Check me out
                    <span className="form-check-sign">
                      <span className="check" />
                    </span>
                  </Label>
                </FormGroup>
                <Button type="submit" color="primary">
                  Sign in
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {formGrid3Example}
        </SyntaxHighlighter>
        <h2>Disabled forms</h2>
        <p>
          Add the <code className="highlighter-rouge">disabled</code> boolean
          attribute on an input to prevent user interactions and make it appear
          lighter.
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`<Input id="disabledInput" type="text" placeholder="Disabled input here..." disabled/>`}
        </SyntaxHighlighter>
        <p>
          Add the <code className="highlighter-rouge">disabled</code> attribute
          to a <code className="highlighter-rouge">&lt;fieldset&gt;</code> to
          disable all the controls within.
        </p>
        <div className="bd-example">
          <Card>
            <CardBody>
              <form>
                <fieldset disabled>
                  <FormGroup>
                    <Label for="disabled">Disabled input</Label>
                    <Input
                      type="text"
                      id="disabled"
                      placeholder="Disabled input"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="disabled1">Disabled select menu</Label>
                    <Input type="select" id="disabled1">
                      <option>Disabled select menu</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                  <FormGroup check>
                    <Label className="form-check-label">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      Can't check me out
                      <span className="form-check-sign">
                        <span className="check" />
                      </span>
                    </Label>
                  </FormGroup>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </fieldset>
              </form>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {disabledExample}
        </SyntaxHighlighter>
        <div className="bd-callout bd-callout-warning">
          <h4 id="caveat-with-anchors">Caveat with anchors</h4>
          <p>
            By default, browsers will treat all native form controls (
            <code className="highlighter-rouge">&lt;input&gt;</code>,
            <code className="highlighter-rouge">&lt;select&gt;</code> and
            <code className="highlighter-rouge">&lt;button&gt;</code> elements)
            inside a
            <code className="highlighter-rouge">&lt;fieldset disabled&gt;</code>{" "}
            as disabled, preventing both keyboard and mouse interactions on
            them. However, if your form also includes
            <code className="highlighter-rouge">
              &lt;a ... className="btn btn-*"&gt;
            </code>{" "}
            elements, these will only be given a style of
            <code className="highlighter-rouge">pointer-events: none</code>.
            This CSS property is not yet standardized and isn’t fully supported
            in Opera 18 and below, or in Internet Explorer 10, and won’t prevent
            keyboard users from being able to focus or activate these links. So
            to be safe, use custom JavaScript to disable such links.
          </p>
        </div>
        <div className="bd-callout bd-callout-danger">
          <h4 id="cross-browser-compatibility">Cross-browser compatibility</h4>
          <p>
            While Bootstrap will apply these styles in all browsers, Internet
            Explorer 11 and below don’t fully support the
            <code className="highlighter-rouge">disabled</code> attribute on a
            <code className="highlighter-rouge">&lt;fieldset&gt;</code>. Use
            custom JavaScript to disable the fieldset in these browsers.
          </p>
        </div>
        <p>
          If you want to see more examples and properties please check the
          official{" "}
          <a
            href="https://reactstrap.github.io/components/form/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Forms;
