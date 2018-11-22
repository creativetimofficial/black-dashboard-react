import React from "react";

const Colors = () => {
  return (
    <>
      <h1 class="bd-title" id="content">
        Colors
      </h1>
      <p class="bd-lead">
        You can change the default colors via variables from SCSS
      </p>
      <p>
        You can find the colors in{" "}
        <code class="highlighter-rouge">
          assets/scss/paper-dashboard/_variables.scss
        </code>{" "}
        starting with line 51 where is the primary color set:{" "}
        <code class="highlighter-rouge">$primary-color: #51cbce !default</code>.
      </p>
    </>
  );
};

export default Colors;
