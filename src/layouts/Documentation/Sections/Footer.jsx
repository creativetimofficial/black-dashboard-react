/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Footer
        </h1>
        <p>
          Can be found inside{" "}
          <code className="highlighter-rouge">
            src/components/Footer/Footer.jsx
          </code>.
        </p>
        <p>This is the demo bottom navigation.</p>
        <p>
          On the left, it has some links that redirect to our platform, and on
          the right, it has a small copyright.
        </p>
        <p>It was designed to be as simple as it may.</p>
        <p>
          Everything in this component is static, so you will need to manually
          change things if you want, so feel free to change this component as
          you wish.
        </p>
      </>
    );
  }
}

export default Footer;
