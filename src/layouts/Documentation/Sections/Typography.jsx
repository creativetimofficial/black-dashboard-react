import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/styles/prism";

const codeHeadings = `<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>`;

const codeClases = `<p className="h1">h1. Bootstrap heading</p>
<p className="h2">h2. Bootstrap heading</p>
<p className="h3">h3. Bootstrap heading</p>
<p className="h4">h4. Bootstrap heading</p>
<p className="h5">h5. Bootstrap heading</p>
<p className="h6">h6. Bootstrap heading</p>`;

const codeTitle = `<h1 className="title">h1. Bootstrap heading</h1>
<h2 className="title">h2. Bootstrap heading</h2>
<h3 className="title">h3. Bootstrap heading</h3>
<h4 className="title">h4. Bootstrap heading</h4>
<h5 className="title">h5. Bootstrap heading</h5>
<h6 className="title">h6. Bootstrap heading</h6>`;

const codeSmall = `<h3>
    Fancy display heading
    <small className="text-muted">With faded secondary text</small>
</h3>`;

const codeBlockquote = `<blockquote className="blockquote">
    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>`;

const codeSource = `<blockquote className="blockquote">
  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>`;

const codeAlignment1 = `<blockquote className="blockquote text-center">
    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>`;

const codeAlignment2 = `<blockquote className="blockquote text-right">
    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>`;

class TypographySection extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Typography
        </h1>
        <p className="bd-lead">
          Documentation and examples for Bootstrap typography, including global
          settings, headings, body text, lists, and more.
        </p>
        <h2>Headings</h2>
        <div className="bd-example">
          <table>
            <thead>
              <tr>
                <td>Heading</td>
                <td>Example</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code className="highlighter-rouge">{`<h1></h1>`}</code>
                </td>
                <td>
                  <h1>h1. Bootstrap heading</h1>
                </td>
              </tr>
              <tr>
                <td>
                  <code className="highlighter-rouge">{`<h2></h2>`}</code>
                </td>
                <td>
                  <h2>h2. Bootstrap heading</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <code className="highlighter-rouge">{`<h3></h3>`}</code>
                </td>
                <td>
                  <h3>h3. Bootstrap heading</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <code className="highlighter-rouge">{`<h4></h4>`}</code>
                </td>
                <td>
                  <h4>h4. Bootstrap heading</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <code className="highlighter-rouge">{`<h5></h5>`}</code>
                </td>
                <td>
                  <h5>h5. Bootstrap heading</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <code className="highlighter-rouge">{`<h6></h6>`}</code>
                </td>
                <td>
                  <h6>h6. Bootstrap heading</h6>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeHeadings}
        </SyntaxHighlighter>
        <p>
          <code className="highlighter-rouge">.h1</code> through{" "}
          <code className="highlighter-rouge">.h6</code> classes are also
          available, for when you want to match the font styling of a heading
          but cannot use the associated HTML element.
        </p>
        <div className="bd-example">
          <p className="h1">h1. Bootstrap heading</p>
          <p className="h2">h2. Bootstrap heading</p>
          <p className="h3">h3. Bootstrap heading</p>
          <p className="h4">h4. Bootstrap heading</p>
          <p className="h5">h5. Bootstrap heading</p>
          <p className="h6">h6. Bootstrap heading</p>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeClases}
        </SyntaxHighlighter>
        <p>
          <code className="highlighter-rouge">.title</code>, for when you want
          some bolder titles with a different font family.
        </p>
        <div className="bd-example">
          <h1 className="title">h1. Bootstrap heading</h1>
          <h2 className="title">h2. Bootstrap heading</h2>
          <h3 className="title">h3. Bootstrap heading</h3>
          <h4 className="title">h4. Bootstrap heading</h4>
          <h5 className="title">h5. Bootstrap heading</h5>
          <h6 className="title">h6. Bootstrap heading</h6>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeTitle}
        </SyntaxHighlighter>
        <h3>Customizing headings</h3>
        <p>
          Use the included utility classes to recreate the small secondary
          heading text from Bootstrap 3.
        </p>
        <div className="bd-example">
          <h3>
            Fancy display heading
            <small className="text-muted">With faded secondary text</small>
          </h3>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSmall}
        </SyntaxHighlighter>
        <h2>Blockquotes</h2>
        <p>
          For quoting blocks of content from another source within your
          document. Wrap{" "}
          <code className="highlighter-rouge">
            &lt;blockquote className="blockquote"&gt;
          </code>{" "}
          around any <abbr title="HyperText Markup Language">HTML</abbr> as the
          quote.
        </p>
        <div className="bd-example">
          <blockquote className="blockquote">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
          </blockquote>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeBlockquote}
        </SyntaxHighlighter>
        <h3>Naming a source</h3>
        <div className="bd-example">
          <blockquote className="blockquote">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSource}
        </SyntaxHighlighter>
        <h3>Alignment</h3>
        <div className="bd-example">
          <blockquote className="blockquote text-center">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAlignment1}
        </SyntaxHighlighter>
        <div className="bd-example">
          <blockquote className="blockquote text-right">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAlignment2}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default TypographySection;
