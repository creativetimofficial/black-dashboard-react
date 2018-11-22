import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

const codeImport = `import icons from 'variables/icons';`;

const codeExample = `<i className="nc-icon nc-single-02"></i>`;

class Icons extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Icons
        </h1>
        <p className="bd-lead">
          For this dashboard we've used 100 awesome nucleo icons handcrafted by
          our friends from{" "}
          <a href="https://nucleoapp.com/?ref=1712" target="_blank">
            NucleoApp
          </a>.
        </p>
        <p>
          You will find all these icons in <code>src/variables/icons.jsx</code>.
        </p>
        <p>You can import all of them like so:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImport}
        </SyntaxHighlighter>
        <h3>Examples</h3>
        <div className="bd-example">
          <i className="nc-icon nc-single-02"></i>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Icons;
