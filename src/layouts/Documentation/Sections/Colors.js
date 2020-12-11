/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

class Colors extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title">Colors</h1>
        <p className="bd-lead">
          You can change the default colors via variables from SCSS
        </p>
        <ol>
          <li>Download the project’s zip</li>
          <li>Make sure you have node.js (https://nodejs.org/en/) installed</li>
          <li>
            Type <code class="highlighter-rouge">npm install</code> in
            terminal/console in the source folder where{" "}
            <code class="highlighter-rouge">package.json</code> is located
          </li>
          <li>
            You can find the colors in{" "}
            <code class="highlighter-rouge">
              src/assets/scss/black-dashboard-react/_variables.scss
            </code>
            .
          </li>
          <li>
            Run in terminal{" "}
            <code class="highlighter-rouge">npm run compile-sass</code> to
            compile all the <code class="highlighter-rouge">scss</code> files.
          </li>
        </ol>
      </>
    );
  }
}

export default Colors;
