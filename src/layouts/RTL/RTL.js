/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import RTLNavbar from "components/Navbars/RTLNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import logo from "assets/img/react-logo.png";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";

var ps;

function RTL(props) {
  const location = useLocation();
  const mainPanelRef = React.useRef(null);
  const [sidebarOpened, setsidebarOpened] = React.useState(
    document.documentElement.className.indexOf("nav-open") !== -1
  );
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(mainPanelRef.current, {
        suppressScrollX: true
      });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    // on this page, we need on the body tag the classes .rtl and .menu-on-right
    document.body.classList.add("rtl", "menu-on-right");
    // we also need the rtl bootstrap
    // so we add it dynamically to the head
    let head = document.head;
    let link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.id = "rtl-id";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rtl/3.4.0/css/bootstrap-rtl.css";
    head.appendChild(link);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.classList.add("perfect-scrollbar-off");
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      // when we exit this page, we need to delete the classes .rtl and .menu-on-right
      // from the body tag
      document.body.classList.remove("rtl", "menu-on-right");
      // we also need to delete the rtl bootstrap, so it does not break the other pages
      // that do not make use of rtl
      document.getElementById("rtl-id").remove();
    };
  });
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainPanelRef.current) {
      mainPanelRef.current.scrollTop = 0;
    }
  }, [location]);
  // this function opens and closes the sidebar on small devices
  const toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    setsidebarOpened(!sidebarOpened);
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/rtl") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    <>
      <BackgroundColorContext.Consumer>
        {({ color, changeColor }) => (
          <React.Fragment>
            <div className="wrapper">
              <Sidebar
                routes={routes}
                rtlActive
                logo={{
                  outterLink: "https://www.creative-tim.com/",
                  text: "الإبداعية تيم",
                  imgSrc: logo
                }}
                toggleSidebar={toggleSidebar}
              />
              <div className="main-panel" ref={mainPanelRef} data={color}>
                <RTLNavbar
                  brandText={getBrandText(location.pathname)}
                  toggleSidebar={toggleSidebar}
                  sidebarOpened={sidebarOpened}
                />
                <Switch>{getRoutes(routes)}</Switch>
                {
                  // we don't want the Footer to be rendered on map page
                  location.pathname === "/admin/maps" ? null : <Footer fluid />
                }
              </div>
            </div>
            <FixedPlugin bgColor={color} handleBgClick={changeColor} />
          </React.Fragment>
        )}
      </BackgroundColorContext.Consumer>
    </>
  );
}

export default RTL;
