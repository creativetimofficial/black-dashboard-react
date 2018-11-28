import React from "react";
import ReactDOM from "react-dom";
import { createHashHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.jsx";
import RTLLayout from "layouts/RTL/RTL.jsx";
import Documentation from "layouts/Documentation/Documentation.jsx";

import "layouts/Documentation/assets-for-demo/docs.scss";
import "layouts/Documentation/assets-for-demo/react-docs.scss";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

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
