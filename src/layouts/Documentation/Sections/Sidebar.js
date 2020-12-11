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

const exampleCode = `... other code

import Sidebar from "components/Sidebar/Sidebar.js";

... other code

import routes from "routes.js";

... other code

class YourClass extends React.Component {
  ... other code
  render() {
    ... other code
    return (
      ... other code
      <Sidebar
        // this is necessary so we can check for the active link
        {...this.props}
        routes={routes}
        bgColor={this.state.backgroundColor}
        logo={{
          innerLink: "https://www.creative-tim.com/",
          text: "Creative Tim",
          imgSrc: logo
        }}
        // this is necessary so we can close the menu, when a users goes to another page
        toggleSidebar={this.toggleSidebar}
      />
      ... other code
    );
  }
}

export default YourClass;
`;

const exampleProps = `Sidebar.defaultProps = {
  rtlActive: false,
  bgColor: "primary",
  routes: [{}]
};

Sidebar.propTypes = {
  // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
  // insde the links of this component
  rtlActive: PropTypes.bool,
  bgColor: PropTypes.oneOf(["primary", "blue", "green"]),
  routes: PropTypes.arrayOf(PropTypes.object),
  toggleSidebar: PropTypes.func,
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the text of the logo
    text: PropTypes.node,
    // the image src of the logo
    imgSrc: PropTypes.string
  })
};`;

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Sidebar
        </h1>
        <p>
          Can be found in{" "}
          <code className="highlighter-rouge">
            src/components/Sidebar/Sidebar.js
          </code>
          .
        </p>
        <p>
          This is the left menu which is present on the{" "}
          <code className="highlighter-rouge">src/layouts/Admin/Admin.js</code>{" "}
          and <code className="highlighter-rouge">src/layouts/RTL/RTL.js</code>.
        </p>
        <p>
          It contains the company logo and title and the links to your whole
          app.
        </p>
        <p>To use it, you need to import it:</p>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Sidebar } from 'components';`}</SyntaxHighlighter>
        <p>
          This is how it should look like in your render function of your
          class/function:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {exampleCode}
        </SyntaxHighlighter>
        <p>
          To understand better how to use it, please take a look inside{" "}
          <code className="highlighter-rouge">src/layouts/Admin/Admin.js</code>,{" "}
          <code className="highlighter-rouge">src/layouts/RTL/RTL.js</code> and{" "}
          <code className="highlighter-rouge">
            src/components/Sidebar/Sidebar.js
          </code>
          .
        </p>
        <h2>Props</h2>
        <SyntaxHighlighter language="jsx" style={prism}>
          {exampleProps}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Sidebar;
