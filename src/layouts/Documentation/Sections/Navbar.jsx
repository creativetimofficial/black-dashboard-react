import React from "react";
import { Link } from "react-router-dom";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/styles/prism";

const codeAdminNavbar = `... other code

import AdminNavbar from "components/Navbars/AdminNavbar.jsx";

... other code

class YourClass extends React.Component {
  ... other code
  handleMiniClick = () => {
    ... other code
  };
  render() {
    ... other code
    return (
      ... other code
      <AdminNavbar {...this.props} handleMiniClick={this.handleMiniClick} />
      ... other code
    );
  }
}

export default YourClass;
`;

const codeAuthNavbar = `... other code

import AuthNavbar from "components/Navbars/AuthNavbar.jsx";

... other code

class YourClass extends React.Component {
  ... other code
  render() {
    ... other code
    return (
      ... other code
      <AuthNavbar />
      ... other code
    );
  }
}

export default YourClass;`;

class Navbar extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Demo navbars
        </h1>
        <p>
          In our template product, we have two navbars that can be found inside{" "}
          <code className="highlighter-rouge">
            src/components/Navbars/AdminNavbar.jsx
          </code>{" "}
          and{" "}
          <code className="highlighter-rouge">
            src/components/Navbars/AuthNavbar.jsx
          </code>
        </p>
        <h2>
          <code className="highlighter-rouge">
            src/components/Navbars/AdminNavbar.jsx
          </code>
        </h2>
        <p>
          It is used to create the navbar / header that appears on the{" "}
          <code className="highlighter-rouge">src/layouts/Admin/Admin.jsx</code>{" "}
          and it has a very nice feature, it has a button that toggles the{" "}
          <Link to="/documentation/sidebar">
            src/components/Sidebar/Sidebar.jsx
          </Link>{" "}
          from minfied to normal.
        </p>
        <p>
          So if you want to use it, be sure to send the function for minifing
          the{" "}
          <code className="highlighter-rouge">
            src/components/Sidebar/Sidebar.jsx
          </code>{" "}
          to it.
        </p>
        <p>
          This is how it should look like in your render function of your
          class/function:
        </p>
        <SyntaxHighlighter language="jsx" style={style}>
          {codeAdminNavbar}
        </SyntaxHighlighter>
        <p>
          Everything in this component is static, and none of the componnets
          used in it have any sort of functionality - this is something you
          should add based on the project you are working on, so you will need
          to manually change things if you want, so feel free to change this
          component as you wish.
        </p>
        <h2>
          <code className="highlighter-rouge">
            src/components/Navbars/AuthNavbar.jsx
          </code>
        </h2>
        <p>
          It is used to create the navbar / header that appears on the{" "}
          <code className="highlighter-rouge">src/layouts/Auth/Auth.jsx</code>.
        </p>
        <p>
          This is how it should look like in your render function of your
          class/function:
        </p>
        <SyntaxHighlighter language="jsx" style={style}>
          {codeAuthNavbar}
        </SyntaxHighlighter>
        <p>
          Everything in this component is static, but the links in it have the
          functionality of navigating through 5 different pages, so you will
          need to manually change things if you want, so feel free to change
          this component as you wish.
        </p>
      </>
    );
  }
}

export default Navbar;
