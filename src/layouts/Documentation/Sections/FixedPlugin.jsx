import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/styles/prism";

const codeFunctions = `
handleBgClick = color => {
  ...
};`;

const codeRenderExample = `... other code
import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";
... other code

class YourClass extends React.Component {
  constructor(props) {
    ... other code
    this.state = {
      backgroundColor: "black"
    };
    ... other code
  }
  ... other code
  handleBgClick = color => {
    ... other code
  };
  render() {
    ... other code
    return (
      ... other code
        <FixedPlugin
          bgColor={this.state.backgroundColor}
          handleBgClick={this.handleBgClick}
        />
      ... other code
    );
  }
}

export default YourClass;
`;

class FixedPlugin extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Fixed Plugin
        </h1>
        <p>
          Can be found inside{" "}
          <code className="highlighter-rouge">
            src/components/FixedPlugin/FixedPlugin.jsx
          </code>.
        </p>
        <p>
          This component is the right menu and its purpose is so you can easily
          customize the left menu.
        </p>
        <p>
          It is only rendered two times, once inside the{" "}
          <code className="highlighter-rouge">src/layouts/Admin/Admin.jsx</code>{" "}
          and once inside the{" "}
          <code className="highlighter-rouge">src/layouts/RTL/RTL.jsx</code>
        </p>
        <p>
          If you wish to use it, you will have to implement in your
          class/function where you render it this function:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeFunctions}
        </SyntaxHighlighter>
        <p>
          After this, you will need to pass the above function to the component
          and also you will have to send to this component a default background
          color.
        </p>
        <p>So in the end, you will render the component as follows:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeRenderExample}
        </SyntaxHighlighter>
        <p>
          The dark / light mode switch is static and only rendered in this
          component.
        </p>
        <p>
          For a better understaing please, take a look inside{" "}
          <code className="highlighter-rouge">src/layouts/Admin/Admin.jsx</code>{" "},<code className="highlighter-rouge">src/layouts/RTL/RTL.jsx</code>{" "}
          and{" "}
          <code className="highlighter-rouge">
            src/components/FixedPlugin/FixedPlugin.jsx
          </code>.
        </p>
      </>
    );
  }
}

export default FixedPlugin;
