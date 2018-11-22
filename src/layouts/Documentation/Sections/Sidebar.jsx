import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Sidebar
        </h1>
        <p className="bd-lead">
          We have created a component for the main navigation of this dashboard,{" "}
          <code>Sidebar</code>, which is located in{" "}
          <code>src/components/Sidebar/Sidebar.jsx</code>. It contains the
          company title, a photo of the logged in user with options inside a
          dropdown, and a list of all the pages. Every element in the list of
          pages can have a sublist of pages.
        </p>
        <p>To use it, you need to import it:</p>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import Sidebar from 'components/Sidebar/Sidebar.jsx';`}</SyntaxHighlighter>
        <p>
          It comes in 6 different colors (<code>black</code>, <code>blue</code>,{" "}
          <code>green</code>, <code>orange</code>, <code>red</code>,{" "}
          <code>yellow</code>).
        </p>
        <p>
          To set the color of this component go to{" "}
          <code>src/components/Sidebar/Sidebar</code> and change the{" "}
          <code>data-color</code> attribute to one of the above colors.
        </p>
        <p>
          When using this component (unless you make changes to our code) you
          will have to pass a prop named <code>routes</code> to it. This prop
          has to be the routes of your app and all the links in the Sidebar
          componnet will be made dynamically.
        </p>
        <p>
          Our <code>routes</code> for this dashboard can be found in{" "}
          <code>src/routes</code>.
        </p>
      </div>
    );
  }
}

export default Sidebar;
