import Icons from "views/Icons.js";
import Dashboard from "views/Dashboard.js";
import FuelLog from "views/FuelLog.js";

var routes = {
  public: [
    {
      path: "/signIn",
      name: "Log Fuel",
      rtlName: "ملف تعريفي للمستخدم",
      icon: "tim-icons icon-single-02",
      component: <FuelLog />,
      layout: "/public",
    },
  ],
  admin: [
    {
      path: "/dashboard",
      name: "Dashboard",
      // rtlName: "لوحة القيادة",
      icon: "tim-icons icon-chart-pie-36",
      component: <Dashboard />,
      layout: "/admin",
    },
  ],

  user: [
    {
      path: "/icons",
      name: "Icons",
      // rtlName: "الرموز",
      icon: "tim-icons icon-atom",
      component: <Icons />,
      layout: "/user",
    },
  ],
};

export default routes;
