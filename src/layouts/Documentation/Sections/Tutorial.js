/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/styles/prism";
import { applescript } from "react-syntax-highlighter/styles/hljs";

const fileStructure = `black-dashboard-react
.
├── package.json
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── Documentation
│   └── documentation.html
├── github-assets
│   └── react.svg
├── public
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo-white.svg
    ├── logo.svg
    ├── routes.js
    ├── assets
    │   ├── css
    │   ├── demo
    │   ├── fonts
    │   ├── img
    │   └── scss
    │       ├── black-dashboard-react
    │       │   ├── bootstrap
    │       │   │   ├── mixins
    │       │   │   └── utilities
    │       │   ├── custom
    │       │   │   ├── cards
    │       │   │   ├── mixins
    │       │   │   ├── utilities
    │       │   │   └── vendor
    │       └── black-dashboard-react.scss
    ├── components
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Navbars
    │   │   ├── AdminNavbar.js
    │   │   └── RTLNavbar.js
    │   └── Sidebar
    │       └── Sidebar.js
    ├── layouts
    │   ├── Admin
    │   │   └── Admin.js
    │   └── RTL
    │       └── RTL.js
    ├── variables
    │   └── charts.js
    └── views
        ├── Dashboard.js
        ├── Icons.js
        ├── Map.js
        ├── Notifications.js
        ├── Rtl.js
        ├── TableList.js
        ├── Typography.js
        └── UserProfile.js`;

class Tutorial extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Tutorial
        </h1>
        <br />
        <br />
        <h2>Short Description and Usage</h2>
        <p>
          <b>Black Dashboard React</b> is a beautiful resource built over{" "}
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootstrap 4
          </a>
          ,{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          (
          <a
            href="https://github.com/facebook/create-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            create-react-app
          </a>
          ) and{" "}
          <a
            href="https://reactstrap.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap
          </a>{" "}
          to allow you to create powerful and beautiful dashboards. We have
          redesigned all the usual components in Bootstrap to make it look flat,
          minimalist and easy to use.
        </p>
        <p>
          Using the dashboard is very simple, but it does require you to
          understand basic JavaScript functions, react and reactstrap. To get
          the desired effect you will need to integrate react components and JS
          plugins that take a little bit more effort. Down below we list all the
          files you need to include inside the application to get going.
        </p>
        <br />
        <br />
        <h2>License</h2>
        <p>
          <b>MIT LICENSE</b>
          <br />
          Copyright (c) {1900 + new Date().getYear()}{" "}
          <a href="https://creative-tim.com/" target="_blank">
            Creative Tim
          </a>
          .
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
            href="https://www.creative-tim.com/license/?ref=black-dashboard-react"
            target="_blank"
          >
            creative-tim license
          </a>
          .
        </p>
        <br />
        <br />
        <h2>Getting Started</h2>
        <p>
          The Black Dashboard React is built on top of{" "}
          <a
            href="https://reactstrap.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap
          </a>{" "}
          (Bootstrap 4), so you can safely use it on your existing or new
          Reactstrap project. No line of code from Bootstrap 4 was changed, so
          you don't have to worry about undesired effects in your work.
        </p>
        <p>
          We provide all the necessary CSS resources. So, to immediately change
          or get started with our design, include the{" "}
          <code className="highlighter-rouge">
            src/assets/scss/black-dashboard-react.css
          </code>{" "}
          in your template. Your project will get the new look.
        </p>
        <br />
        <br />
        <h2>Local Development</h2>
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
            Go to the{" "}
            <a
              href="https://www.creative-tim.com/product/black-dashboard-react"
              target="_blank"
            >
              product page
            </a>{" "}
            (be sure to be logged into your account)
          </li>
          <li>
            Press the download button near <b>Black Dashboard React</b> product
            (this will download onto your computer a zip file)
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
            Or you can simply run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm run install:clean`}</SyntaxHighlighter>{" "}
            which will install{" "}
            <code className="highlighter-rouge">node_modules</code> and also
            will start your project.
          </li>
          <li>
            If you have an error something containing
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`Module not found`}</SyntaxHighlighter>
            you need to do the following
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install --g cross-env`}</SyntaxHighlighter>
            then change the script, for example the start script from
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`"start": "react-scripts start",`}</SyntaxHighlighter>
            to
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`"start": "NODE_PATH=./src react-scripts start",`}</SyntaxHighlighter>
            <b>
              The same should be done with any other script that has the above
              error.
            </b>
          </li>
          <li>
            If you have an error containing{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`props.history of undefined`}</SyntaxHighlighter>{" "}
            (this can happen when you integrate our project with another one)
            then you need to make the changes found{" "}
            <a
              href="https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/70"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              here
            </a>
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
                Navigate to{" "}
                <code className="highlighter-rouge">your-app-name</code>
              </li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm start`}</SyntaxHighlighter>
              </li>
              <li>
                And after this, you can copy and paste anything that you want
                from our product (the most important is the{" "}
                <code className="highlighter-rouge">src/assets</code> which has
                all of our style, fonts and images).
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
        <br />
        <br />
        <h2>Live Production</h2>
        <ul>
          <li>
            <a
              href="https://blog.heroku.com/deploying-react-with-zero-configuration"
              target="_blank"
              rel="noopener noreferrer"
            >
              tutorial for deploying on heroku
            </a>
          </li>
          <li>
            <a
              href="https://medium.freecodecamp.org/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089"
              target="_blank"
              rel="noopener noreferrer"
            >
              tutorial for deploying on github pages and surge
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af"
              target="_blank"
              rel="noopener noreferrer"
            >
              tutorial for deploying on S3 and CloudFront
            </a>
          </li>
        </ul>
        <br />
        <br />
        <h2>CSS</h2>
        <p>
          To get our look, if you've started a new app, you will need to import
          our styles inside your app like so:
        </p>
        <SyntaxHighlighter language="javascript" style={prism}>
          {`import "assets/scss/black-dashboard-react.scss";
import "assets/css/nucleo-icons.css";`}
        </SyntaxHighlighter>
        <br />
        <br />
        <h2>Fonts and Icons</h2>
        <p>
          If you've started a new project and are copying our product there, be
          sure to add the following lines of code inside your{" "}
          <code className="highlighter-rouge">.html</code> file:
        </p>
        <SyntaxHighlighter
          language="html"
          style={applescript}
        >{`<!--     Fonts and icons     -->
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />`}</SyntaxHighlighter>
        <br />
        <br />
        <h2>File structure</h2>
        <SyntaxHighlighter language="bash" style={prism}>
          {fileStructure}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default Tutorial;
