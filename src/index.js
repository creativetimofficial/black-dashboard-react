import React from "react";
import ReactDOM from "react-dom/client";



import "assets/scss/black-dashboard-react.scss";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "views/Dashboard";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Dashboard />
  </>
    
);
