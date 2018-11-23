// Getting started
import Tutorial from "layouts/Documentation/Sections/Tutorial.jsx";
import Colors from "layouts/Documentation/Sections/Colors.jsx";
import RoutingSystem from "layouts/Documentation/Sections/RoutingSystem.jsx";
import Variables from "layouts/Documentation/Sections/Variables.jsx";
// Core components
import FixedPlugin from "layouts/Documentation/Sections/FixedPlugin.jsx";
import Footer from "layouts/Documentation/Sections/Footer.jsx";
import Navbar from "layouts/Documentation/Sections/Navbar.jsx";
import Sidebar from "layouts/Documentation/Sections/Sidebar.jsx";
// Reasctrap components
import Alerts from "layouts/Documentation/Sections/Alerts.jsx";
import Badges from "layouts/Documentation/Sections/Badges.jsx";
import Breadcrumbs from "layouts/Documentation/Sections/Breadcrumbs.jsx";
import Buttons from "layouts/Documentation/Sections/Buttons.jsx";
import Cards from "layouts/Documentation/Sections/Cards.jsx";
import Dropdowns from "layouts/Documentation/Sections/Dropdowns.jsx";
import Forms from "layouts/Documentation/Sections/Forms.jsx";
import Modals from "layouts/Documentation/Sections/Modals.jsx";
import Navs from "layouts/Documentation/Sections/Navs.jsx";
import Navbars from "layouts/Documentation/Sections/Navbars.jsx";
import Tables from "layouts/Documentation/Sections/Tables.jsx";
import Typography from "layouts/Documentation/Sections/Typography.jsx";
// Plugins
import Charts from "layouts/Documentation/Sections/Charts.jsx";
import GoogleMaps from "layouts/Documentation/Sections/GoogleMaps.jsx";
import Icons from "layouts/Documentation/Sections/Icons.jsx";
import Notifications from "layouts/Documentation/Sections/Notifications.jsx";
import PerfectScrollbar from "layouts/Documentation/Sections/PerfectScrollbar.jsx";

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
