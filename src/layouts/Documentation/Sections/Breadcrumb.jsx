import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const codeExamplesImport = `import { Breadcrumb, BreadcrumbItem } from 'reactstrap';`;
const codeExamples = `<Breadcrumb>
    <BreadcrumbItem active>Home</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb>
    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
    <BreadcrumbItem active>Library</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb>
    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
    <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
    <BreadcrumbItem active>Data</BreadcrumbItem>
</Breadcrumb>`;

class Breadcrumbs extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Breadcrumbs
        </h1>
        <p className="bd-lead">
          Indicate the current page's location within a navigational hierarchy
          that automatically adds separators via CSS.
        </p>
        <h2>Overview</h2>
        <p>
          Separators are automatically added in CSS through
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before">
            <code className="highlighter-rouge">::before</code>
          </a>
          and
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content">
            <code className="highlighter-rouge">content</code>
          </a>.
        </p>
        <div className="bd-example">
          <Breadcrumb>
            <BreadcrumbItem active>Home</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="#/" onClick={e => e.preventDefault()}>
                Home
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Library</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="#/" onClick={e => e.preventDefault()}>
                Home
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="#/" onClick={e => e.preventDefault()}>
                Library
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Data</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamplesImport}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamples}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/breadcrumbs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap breadcrumbs documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default Breadcrumbs;
