import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/styles/prism";

const code = `// for RTL
import PerfectScrollbar from 'perfect-scrollbar';

var ps;

class RTL extends React.Component{
    componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.mainPanel);
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
        }
    }
    ...
}

// for Dashboard
import PerfectScrollbar from 'perfect-scrollbar';

var ps;

class Dashboard extends React.Component{
    ...
    componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.mainPanel);
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
        }
    }
    ...
}

// for Sidebar
import PerfectScrollbar from 'perfect-scrollbar';

var ps;

class Sidebar extends React.Component{
    ...
    componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.sidebar);
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
        }
    }
    ...
}`;

class PerfectScrollbar extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Perfect Scrollbar v1.4.0
        </h1>
        <p className="bd-lead" />
        <p>“Minimalistic but perfect custom scrollbar plugin.”</p>
        <p>
          !IMPORTANT Perfect Scrollbar is applied on the{" "}
          <code class="highlighter-rouge">.main-panel</code> ,{" "}
          <code class="highlighter-rouge">.sidebar .sidebar-wrapper</code> and{" "}
          <code class="highlighter-rouge">.table-responsive</code> so we will
          have a nice scrollbar that is visible only when you actually scroll.
          Since it is changing the overflows of the CSS it is also affecting the
          child elements which have a scroll so please make sure that you add
          the class <code class="highlighter-rouge">.ps-child</code> to any
          element that should have scroll.
        </p>
        <p>
          For more information please check{" "}
          <strong>
            <a
              href="https://www.npmjs.com/package/perfect-scrollbar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full Documentation
            </a>
          </strong>.
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {code}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default PerfectScrollbar;
