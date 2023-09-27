/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import HomePage from "views/HomePage.js";
import Crypto from "views/Cryptos.js";

var routes = [
  {
    path: "/home-page",
    name: "Home Page",
    rtlName: "Ana Sayfa",
    icon: "tim-icons icon-bank",
    component: <HomePage />,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Grafikler",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/cryptos",
    name: "Crypto Currencies",
    rtlName: "Kripto Paralar",
    icon: "tim-icons icon-chart-pie-36",
    component: <Crypto />,
    layout: "/admin",
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "Kullanıcı Profili",
  //   icon: "tim-icons icon-single-02",
  //   component: <UserProfile />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support",
  //   name: "Türkçe",
  //   rtlName: "Türkçe",
  //   icon: "tim-icons icon-world",
  //   component: <Rtl />,
  //   layout: "/rtl",
  // },

];
export default routes;
