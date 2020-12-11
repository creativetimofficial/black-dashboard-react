/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

const codeFunctions = `
handleBgClick = color => {
  ...
};`;

const codeRenderExample = `... other code
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
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
            src/components/FixedPlugin/FixedPlugin.js
          </code>
          .
        </p>
        <p>
          This component is the right menu and its purpose is so you can easily
          customize the left menu.
        </p>
        <p>
          It is only rendered two times, once inside the{" "}
          <code className="highlighter-rouge">src/layouts/Admin/Admin.js</code>{" "}
          and once inside the{" "}
          <code className="highlighter-rouge">src/layouts/RTL/RTL.js</code>
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
          <code className="highlighter-rouge">src/layouts/Admin/Admin.js</code>{" "}
          ,<code className="highlighter-rouge">src/layouts/RTL/RTL.js</code> and{" "}
          <code className="highlighter-rouge">
            src/components/FixedPlugin/FixedPlugin.js
          </code>
          .
        </p>
      </>
    );
  }
}

export default FixedPlugin;
