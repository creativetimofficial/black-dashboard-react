import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

const fileStructure = `paper-dashboard-react
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo-white.svg
    ├── logo.svg
    ├── assets
    │   ├── demo
    │   ├── fonts
    │   ├── github
    │   ├── img
    │   │   └── faces
    │   └── scss
    │       ├── paper-dashboard
    │       │   ├── cards
    │       │   ├── mixins
    │       │   └── plugins
    │       └── paper-dashboard.scss
    ├── components
    │   ├── CardElements
    │   │   ├── CardAuthor.jsx
    │   │   ├── CardCategory.jsx
    │   │   └── CardSocials.jsx
    │   ├── CustomButton
    │   │   └── CustomButton.jsx
    │   ├── CustomCheckbox
    │   │   └── SimpleCheckbox.jsx
    │   ├── CustomRadio
    │   │   └── CustomRadio.jsx
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── FormInputs
    │   │   └── FormInputs.jsx
    │   ├── Header
    │   │   └── Header.jsx
    │   ├── Sidebar
    │   │   └── Sidebar.jsx
    │   ├── Stats
    │   │   └── Stats.jsx
    │   ├── Tasks
    │   │   └── Tasks.jsx
    │   └── index.js
    ├── layouts
    │   └── Dashboard
    │       └── Dashboard.jsx
    ├── routes
    │   ├── dashboard.jsx
    │   └── index.jsx
    ├── variables
    │   ├── charts.jsx
    │   ├── general.jsx
    │   └── icons.jsx
    └── views
        ├── Dashboard
        │   └── Dashboard.jsx
        ├── Icons
        │   └── Icons.jsx
        ├── Maps
        │   └── Maps.jsx
        ├── Notifications
        │   └── Notifications.jsx
        ├── TableList
        │   └── TableList.jsx
        ├── Typography
        │   └── Typography.jsx
        └── UserPage
            └── UserPage.jsx`;

class Tutorial extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Short Description and Usage
        </h1>
        <p className="bd-lead">
          Paper Dashboard React is a beautiful{" "}
          <a
            href="https://reactstrap.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap - Bootstrap 4
          </a>{" "}
          (<a
            href="https://github.com/facebook/create-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            create-react-app
          </a>) Admin Template.
        </p>
        <h2>License</h2>
        <p>
          <b>MIT LICENSE</b>
          <br />Copyright (c) {1900 + new Date().getYear()}{" "}
          <a href="https://creative-tim.com/" target="_blank">
            Creative Tim
          </a>.
        </p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
        <p>
          Read more about licenses here:{" "}
          <a
            href="https://www.creative-tim.com/license/?ref=paper-dashboard-react"
            target="_blank"
          >
            creative-tim license
          </a>.
        </p>
        <h2>Getting Started</h2>
        <p>
          The Paper Dashboard React is built on top of{" "}
          <a
            href="https://reactstrap.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap
          </a>{" "}
          (Bootstrap 4), so you can safely use it on your existing or new
          Reactstrap project. No line of code from Bootstrap 4 or reactstrap was
          changed, so you don't have to worry about undesired effects in your
          work.
        </p>
        <p>
          We provide all the necessary CSS resources. So, to immediately change
          or get started with our design, include the{" "}
          <code>src/assets/scss/paper-dashboard.css</code> in your template.
          Your project will get the new look.
        </p>
        <ul>
          <li>
            Install NodeJs from{" "}
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NodeJs Official Page
            </a>
          </li>
          <li>
            Go to{" "}
            <a href="https://www.creative-tim.com/" target="_blank">
              creative tim website
            </a>{" "}
            and login into your account
          </li>
          <li>
            Go to{" "}
            <a
              href="https://www.creative-tim.com/paper-dashboard-react"
              target="_blank"
            >
              Paper dashboard react
            </a>{" "}
            page on creative tim website (be sure to be logged into your
            account)
          </li>
          <li>
            Press the <b>FREE DOWNLOAD</b> button (this will download onto your
            computer a zip file)
          </li>
          <li>Unzip the downloaded file to a folder in your computer</li>
          <li>Open Terminal</li>
          <li>Go to your file project (where you've unzipped the product)</li>
          <li>
            Run in terminal{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install`}</SyntaxHighlighter>
          </li>
          <li>
            Then run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm start`}</SyntaxHighlighter>
          </li>
          <li>
            Alternatively you can run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm run install:clean`}</SyntaxHighlighter>{" "}
            which will delete <code>node_modules</code>,{" "}
            <code>package-lock.json</code>, automatically run{" "}
            <code>install</code> script and <code>start</code> script
          </li>
          <li>
            <div>
              If you have an error something containing
              <SyntaxHighlighter
                language="jsx"
                style={prism}
              >{`Module not found`}</SyntaxHighlighter>
              You should check if in your root project folder you have a file
              named <code>.env</code>.
              <br />
              If you do not have it, then create it and add this line in it:{" "}
              <code>NODE_PATH=./src</code>
              <br />
              If that does not work, you need to do the following
              <SyntaxHighlighter
                language="jsx"
                style={prism}
              >{`npm install --g cross-env`}</SyntaxHighlighter>
              then change the <code>script</code> inside{" "}
              <code>package.json</code> by adding <code>NODE_PATH=./src</code>{" "}
              inside it. For example, the start script would be changed from
              <SyntaxHighlighter
                language="jsx"
                style={prism}
              >{`"start": "react-scripts start",`}</SyntaxHighlighter>
              to
              <SyntaxHighlighter
                language="jsx"
                style={prism}
              >{`"start": "NODE_PATH=./src react-scripts start",`}</SyntaxHighlighter>
            </div>
          </li>
          <li>
            <div>
              <p>
                If you have an error about{" "}
                <code>props.history is undefined</code>, than you're probably
                not sending inside the <code>Header</code> component the props
                that come from the routes (everywhere <code>Header</code> is
                rendered - we pass the <code>{`{...rest}`}</code> to it).
              </p>
              <p>
                You can also read more about{" "}
                <a
                  href="https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this issue here
                </a>.
              </p>
            </div>
          </li>
          <li>
            (Optional) You can create a new react application like this
            <ul>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm install -g create-react-app`}</SyntaxHighlighter>
              </li>
              <li>Go to the folder where you want to create your app</li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`create-react-app your-app-name`}</SyntaxHighlighter>
              </li>
              <li>
                Navigate to <code>your-app-name</code>
              </li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm start`}</SyntaxHighlighter>
              </li>
              <li>
                More information →{" "}
                <a
                  href="https://github.com/facebookincubator/create-react-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  create-react-app
                </a>
              </li>
            </ul>
          </li>
          <li>
            Navigate to{" "}
            <a
              href="https://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://localhost:3000
            </a>
          </li>
          <li>
            More information →{" "}
            <a
              href="https://reactjs.org/docs/installation.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              react
            </a>
          </li>
        </ul>
        <h2>File structure</h2>
        <SyntaxHighlighter language="bash" style={prism}>
          {fileStructure}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Tutorial;
