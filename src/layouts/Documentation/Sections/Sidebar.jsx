import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/styles/prism";

const exampleCode = `... other code

import Sidebar from "components/Sidebar/Sidebar.jsx";

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
        activeColor={this.state.activeColor}
      />
      ... other code
    );
  }
}

export default YourClass;
`;

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
            src/components/Sidebar/Sidebar.jsx
          </code>.
        </p>
        <p>
          This is the left menu which is present on the{" "}
          <code className="highlighter-rouge">src/layouts/Admin/Admin.jsx</code>.
        </p>
        <p>
          It contains the company title, a photo of the logged in user with
          options inside a dropdown, and a list of all the pages. Every element
          in the list of pages can have a sublist of pages.
        </p>
        <p>To use it, you need to import it:</p>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Sidebar } from 'components';`}</SyntaxHighlighter>
        <p>
          It comes in 3 different colors (<code className="highlighter-rouge">
            black
          </code>, <code className="highlighter-rouge">brown</code>,{" "}
          <code className="highlighter-rouge">white</code>) and 5 different
          colors for the active link (<code className="highlighter-rouge">
            primary
          </code>,<code className="highlighter-rouge">info</code>,<code className="highlighter-rouge">
            success
          </code>,<code className="highlighter-rouge">warning</code>,<code class="highlighter-rouge">
            danger
          </code>).
        </p>
        <p>
          The logo image (react-logo) and logo text (Creative Tim), and the User
          Collapse (Chet Faker) with its inner links, are static componnets so
          you will need to manually change these if you want, feel free to
          change them as you wish. The only dynamic things in this component are
          the active link color, the background color and the links unders the
          User Collapse. These links are contained in an array which has been
          showed to you at the{" "}
          <Link to="/documentation/routing-system">Routing System</Link> of this
          documentation. Since these links are dynamic, you will have to pass to
          this component where you render it the routes of your app.
        </p>
        <p>
          This is how it should look like in your render function of your
          class/function:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {exampleCode}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Sidebar;
