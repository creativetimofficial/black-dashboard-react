import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { Table, Alert } from "reactstrap";

import FormInput from "components/FormInputs/FormInputs.jsx";

const codeImport = `import FormInputs from 'components/FormInputs/FormInputs.jsx';`;

const codeExample = `<FormInputs
    ncols = {["col-md-5 pr-1" , "col-md-3 px-1" , "col-md-4 pl-1"]}
    proprieties = {[
        {
            label : "Company (disabled)",
            inputProps : {
                type : "text",
                disabled: true,
                defaultValue: "Creative Code Inc."
            }
        },
        {
            label : "Username",
            inputProps : {
                type : "text",
                defaultValue: "michael23"
            }
        },
        {
            label : "Email address",
            inputProps : {
                type : "email",
                placeholder: "Email"
            }
        }
    ]}
/>`;

const codeBrackets = `{}`;

class FormInputs extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Form Inputs
        </h1>
        <p className="bd-lead">
          For a better way to render form inputs we've created a special
          component <code>FormInputs</code>. We use this component to create a
          whole row of inputs.
        </p>
        <p>To use this component you need to import it:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImport}
        </SyntaxHighlighter>
        <h2>Example code</h2>
        <div className="bd-example">
          <FormInput
            ncols={["col-md-5 pr-1", "col-md-3 px-1", "col-md-4 pl-1"]}
            proprieties={[
              {
                label: "Company (disabled)",
                inputProps: {
                  type: "text",
                  disabled: true,
                  defaultValue: "Creative Code Inc."
                }
              },
              {
                label: "Username",
                inputProps: {
                  type: "text",
                  defaultValue: "michael23"
                }
              },
              {
                label: "Email address",
                inputProps: {
                  type: "email",
                  placeholder: "Email"
                }
              }
            ]}
          />
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <p>
          In this example we've created 3 inputs occupying a 5 medium column, a
          3 medium column and a 4 medium column, each having it's own set of
          proprieties.
        </p>
        <h3>Props</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>ncols</code>
              </td>
              <td>Array of string</td>
              <td>null</td>
              <td>
                Use this flag to set how much each input will occupy in a row by
                using Bootstrap column classes. If this is not set, then nothing
                will be rendered.
              </td>
            </tr>
            <tr>
              <td>
                <code>proprieties</code>
              </td>
              <td>Array of object</td>
              <td>null</td>
              <td>Use this flag to set each input's properties.</td>
            </tr>
          </tbody>
        </Table>
        <h3>
          Full description of <code>proprieties</code> props
        </h3>
        <p>
          You can pass the following props in the <code>proprieties</code> prop.
          For a full set of properties that can be passed please refer to
          <a
            href="https://reactstrap.github.io/components/form/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            reactstrap documentation
          </a>.
        </p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>label : </code>
              </td>
              <td>string / node</td>
              <td>null</td>
              <td>Use this to add a label and a text to it.</td>
            </tr>
            <tr>
              <td>
                <code>addonLeft : </code>
              </td>
              <td>string / node</td>
              <td>null</td>
              <td>Use this to add an left addon to the input.</td>
            </tr>
            <tr>
              <td>
                <code>addonRight : </code>
              </td>
              <td>string / node</td>
              <td>null</td>
              <td>Use this to add an right addon to the input.</td>
            </tr>
            <tr>
              <td>
                <code>formGroupProps : {codeBrackets}</code>
              </td>
              <td>array of objects</td>
              <td>null</td>
              <td>
                Use this to add props to the <code>FormGroup</code> component.
              </td>
            </tr>
            <tr>
              <td>
                <code>labelProps : {codeBrackets}</code>
              </td>
              <td>array of objects</td>
              <td>null</td>
              <td>
                Use this to add props to the <code>Label</code> component.
              </td>
            </tr>
            <tr>
              <td>
                <code>inputProps : {codeBrackets}</code>
              </td>
              <td>array of objects</td>
              <td>null</td>
              <td>
                Use this to add props to the <code>Input</code> component.
              </td>
            </tr>
            <tr>
              <td>
                <code>inputGroupProps : {codeBrackets}</code>
              </td>
              <td>array of objects</td>
              <td>null</td>
              <td>
                Use this to add props to the <code>InputGroup</code> component.
              </td>
            </tr>
            <tr>
              <td>
                <code>inputGroupAddonProps : {codeBrackets}</code>
              </td>
              <td>array of objects</td>
              <td>null</td>
              <td>
                Use this to add props to the <code>InputGroupAddon</code>{" "}
                component.
              </td>
            </tr>
          </tbody>
        </Table>
        <Alert color="warning">
          <strong>Warning!</strong> The number of elements in{" "}
          <code>proprieties</code> has to be equal to the number of elements in{" "}
          <code>ncols</code> for this component to work properly.
        </Alert>
        <p>
          You can also use normal reactstrap elements for creating inputs. For
          this please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/form/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default FormInputs;
