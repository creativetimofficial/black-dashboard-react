import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/styles/prism";

class Variables extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Variables
        </h1>
        <p>
          To make our demo pages (pages found in{" "}
          <code className="highlighter-rouge">src/views/*</code>) a bit more
          easy to understand and to have less code, we've created some special
          files with variables, variables which we import where we need them.
        </p>
        <p>
          You will find all the variables regarding the charts in{" "}
          <code className="highlighter-rouge">src/variables/charts.jsx</code>.
        </p>
        <p>
          At the end of this file, you will find the exports with comments for
          you to know where each variables is used.
        </p>
        <p>To use any of these variables you need to import them like so:</p>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { variableName } from 'variables/charts.jsx';`}</SyntaxHighlighter>
      </div>
    );
  }
}

export default Variables;
