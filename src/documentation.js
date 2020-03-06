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
// Getting started
import Tutorial from "layouts/Documentation/Sections/Tutorial.js";
import Colors from "layouts/Documentation/Sections/Colors.js";
import RoutingSystem from "layouts/Documentation/Sections/RoutingSystem.js";
import Variables from "layouts/Documentation/Sections/Variables.js";
// Core components
import FixedPlugin from "layouts/Documentation/Sections/FixedPlugin.js";
import Footer from "layouts/Documentation/Sections/Footer.js";
import Navbar from "layouts/Documentation/Sections/Navbar.js";
import Sidebar from "layouts/Documentation/Sections/Sidebar.js";
// Reasctrap components
import Alerts from "layouts/Documentation/Sections/Alerts.js";
import Badges from "layouts/Documentation/Sections/Badges.js";
import Breadcrumbs from "layouts/Documentation/Sections/Breadcrumbs.js";
import Buttons from "layouts/Documentation/Sections/Buttons.js";
import Cards from "layouts/Documentation/Sections/Cards.js";
import Dropdowns from "layouts/Documentation/Sections/Dropdowns.js";
import Forms from "layouts/Documentation/Sections/Forms.js";
import Modals from "layouts/Documentation/Sections/Modals.js";
import Navs from "layouts/Documentation/Sections/Navs.js";
import Navbars from "layouts/Documentation/Sections/Navbars.js";
import Tables from "layouts/Documentation/Sections/Tables.js";
import Typography from "layouts/Documentation/Sections/Typography.js";
// Plugins
import Charts from "layouts/Documentation/Sections/Charts.js";
import GoogleMaps from "layouts/Documentation/Sections/GoogleMaps.js";
import Icons from "layouts/Documentation/Sections/Icons.js";
import Notifications from "layouts/Documentation/Sections/Notifications.js";
import PerfectScrollbar from "layouts/Documentation/Sections/PerfectScrollbar.js";

var docsRoutes = [
  {
    name: "Getting started",
    path: "/documentation/tutorial",
    routes: [
      {
        path: "/documentation/tutorial",
        component: Tutorial,
        name: "Tutorial"
      },
      {
        path: "/documentation/colors",
        component: Colors,
        name: "Colors"
      },
      {
        path: "/documentation/routing-system",
        component: RoutingSystem,
        name: "Routing System"
      },
      {
        path: "/documentation/variables",
        component: Variables,
        name: "Variables"
      }
    ]
  },
  {
    name: "Core Components",
    path: "/documentation/custom-upload",
    routes: [
      {
        path: "/documentation/fixed-plugin",
        component: FixedPlugin,
        name: "Fixed Plugin"
      },
      {
        path: "/documentation/footer",
        component: Footer,
        name: "Footer"
      },
      {
        path: "/documentation/navbar",
        component: Navbar,
        name: "App Navbar"
      },
      {
        path: "/documentation/sidebar",
        component: Sidebar,
        name: "Sidebar"
      }
    ]
  },
  {
    name: "Reactstrap Components",
    path: "/documentation/alert",
    routes: [
      {
        path: "/documentation/alert",
        component: Alerts,
        name: "Alerts"
      },
      {
        path: "/documentation/badge",
        component: Badges,
        name: "Badges"
      },
      {
        path: "/documentation/breadcrumbs",
        component: Breadcrumbs,
        name: "Breadcrumbs"
      },
      {
        path: "/documentation/buttons",
        component: Buttons,
        name: "Buttons"
      },
      {
        path: "/documentation/cards",
        component: Cards,
        name: "Cards"
      },
      {
        path: "/documentation/dropdowns",
        component: Dropdowns,
        name: "Dropdowns"
      },
      {
        path: "/documentation/forms",
        component: Forms,
        name: "Forms"
      },
      {
        path: "/documentation/modal",
        component: Modals,
        name: "Modals"
      },
      {
        path: "/documentation/navbars",
        component: Navbars,
        name: "Navbars"
      },
      {
        path: "/documentation/navs",
        component: Navs,
        name: "Navs"
      },
      {
        path: "/documentation/tables",
        component: Tables,
        name: "Tables"
      },
      {
        path: "/documentation/typography",
        component: Typography,
        name: "Typography"
      }
    ]
  },
  {
    name: "Plugins",
    path: "/documentation/charts",
    routes: [
      { path: "/documentation/charts", component: Charts, name: "Charts" },
      {
        path: "/documentation/google-maps",
        component: GoogleMaps,
        name: "GoogleMaps"
      },
      {
        path: "/documentation/icons",
        component: Icons,
        name: "Nucleo Icons"
      },
      {
        path: "/documentation/notifications",
        component: Notifications,
        name: "Notifications"
      },
      {
        path: "/documentation/perfect-scrollbar",
        component: PerfectScrollbar,
        name: "PerfectScrollbar"
      }
    ]
  },
  { redirect: true, path: "/documentation", pathTo: "/documentation/tutorial" }
];

export default docsRoutes;
