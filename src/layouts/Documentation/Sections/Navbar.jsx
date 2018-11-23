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
      <AdminNavbar
        {...this.props}
        brandText={this.getBrandText(this.props.location.pathname)}
        toggleSidebar={this.toggleSidebar}
        sidebarOpened={this.state.sidebarOpened}
      />
      ... other code
    );
  }
}

export default YourClass;
`;

const codeRTLNavbar = `... other code

import RTLNavbar from "components/Navbars/RTLNavbar.jsx";

... other code

class YourClass extends React.Component {
  ... other code
  render() {
    ... other code
    return (
      ... other code
        <RTLNavbar
          {...this.props}
          brandText={this.getBrandText(this.props.location.pathname)}
          toggleSidebar={this.toggleSidebar}
          sidebarOpened={this.state.sidebarOpened}
        />
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
            src/components/Navbars/RTLNavbar.jsx
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
          from closed to open on small devices. It also has a dynamic brand and
          a prop called <code class="highlighter-rouge">sidebarOpened</code> to
          let it know when the{" "}
          <Link to="/documentation/sidebar">
            src/components/Sidebar/Sidebar.jsx
          </Link>{" "}
          is opened or not.
        </p>
        <p>
          So if you want to use it, be sure to send all the above props to it.
        </p>
        <p>
          This is how it should look like in your render function of your
          class/function:
        </p>
        <SyntaxHighlighter language="jsx" style={style}>
          {codeAdminNavbar}
        </SyntaxHighlighter>
        <p>
          Beside the brand text which comes as a props, everything else in this
          component is static, and none of the componnets used in it have any
          sort of functionality - this is something you should add based on the
          project you are working on, so you will need to manually change things
          if you want, so feel free to change this component as you wish.
        </p>
        <h2>
          <code className="highlighter-rouge">
            src/components/Navbars/RTLNavbar.jsx
          </code>
        </h2>
        <p>
          It is used to create the navbar / header that appears on the{" "}
          <code className="highlighter-rouge">src/layouts/RTl/RTl.jsx</code> and
          it has a very nice feature, it has a button that toggles the{" "}
          <Link to="/documentation/sidebar">
            src/components/Sidebar/Sidebar.jsx
          </Link>{" "}
          from closed to open on small devices. It also has a dynamic brand and
          a prop called <code class="highlighter-rouge">sidebarOpened</code> to
          let it know when the{" "}
          <Link to="/documentation/sidebar">
            src/components/Sidebar/Sidebar.jsx
          </Link>{" "}
          is opened or not.
        </p>
        <p>
          So if you want to use it, be sure to send all the above props to it.
        </p>
        <p>
          This is how it should look like in your render function of your
          class/function:
        </p>
        <SyntaxHighlighter language="jsx" style={style}>
          {codeRTLNavbar}
        </SyntaxHighlighter>
        <p>
          Beside the brand text which comes as a props, everything else in this
          component is static, and none of the componnets used in it have any
          sort of functionality - this is something you should add based on the
          project you are working on, so you will need to manually change things
          if you want, so feel free to change this component as you wish.
        </p>
      </>
    );
  }
}

export default Navbar;
