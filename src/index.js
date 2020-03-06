/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createHashHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";

import AdminLayout from "layouts/Admin/Admin.jsx";
import RTLLayout from "layouts/RTL/RTL.jsx";
import Documentation from "layouts/Documentation/Documentation.jsx";

import "layouts/Documentation/assets-for-demo/docs.scss";
import "layouts/Documentation/assets-for-demo/react-docs.scss";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

ReactPixel.init("111649226022273");
ReactPixel.pageView();
ReactPixel.fbq("track", "PageView");

const hist = createHashHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/rtl" render={props => <RTLLayout {...props} />} />
      <Route
        path="/documentation"
        render={props => <Documentation {...props} />}
      />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
