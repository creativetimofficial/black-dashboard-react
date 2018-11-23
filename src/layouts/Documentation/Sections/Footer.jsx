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
