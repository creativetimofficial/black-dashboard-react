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
// ##############################
// // // Chart variables
// #############################
import { ScriptableContext } from "chart.js";
// chartExample1 and chartExample2 options
const chart1_2_options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#f5f5f5",
      titleColor: "#333",
      bodyColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
  },

  scales: {
    y: {
      barPercentage: 1.6,
      grid: {
        drawBorder: false,
        color: "rgba(29,140,248,0.0)",
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#9e9e9e",
      },
    },
    x: {
      barPercentage: 1.6,
      grid: {
        drawBorder: false,
        color: "rgba(29,140,248,0.1)",
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9e9e9e",
      },
    },
  },
  responsive: true,
};

const chart3_options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#f5f5f5",
      titleColor: "#333",
      bodyColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
  },
  responsive: true,
  scales: {
    y: {
      grid: {
        drawBorder: false,
        color: "rgba(225,78,202,0.1)",
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 120,
        padding: 20,
        fontColor: "#9e9e9e",
      },
    },
    x: {
      grid: {
        drawBorder: false,
        color: "rgba(225,78,202,0.1)",
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9e9e9e",
      },
    },
  },
};

const chart4_options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#f5f5f5",
      titleColor: "#333",
      bodyColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
  },
  responsive: true,
  scales: {
    y: {
      barPercentage: 1.6,
      grid: {
        drawBorder: false,
        color: "rgba(29,140,248,0.0)",
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#9e9e9e",
      },
    },
    x: {
      barPercentage: 1.6,
      grid: {
        drawBorder: false,
        color: "rgba(0,242,195,0.1)",
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9e9e9e",
      },
    },
  },
};
const blueGradientColor = (context: ScriptableContext<"line">) => {
  const ctx = context.chart.ctx;
  const gradient = ctx.createLinearGradient(0, 230, 0, 50);
  gradient.addColorStop(1, "rgba(29,140,248,0.2)");
  gradient.addColorStop(0.4, "rgba(29,140,248,0.0)");
  gradient.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  return gradient;
};

const purpleGradientColor = (context: ScriptableContext<"bar">) => {
  const ctx = context.chart.ctx;
  const gradient = ctx.createLinearGradient(0, 230, 0, 50);
  gradient.addColorStop(1, "rgba(72,72,176,0.1)");
  gradient.addColorStop(0.4, "rgba(72,72,176,0.0)");
  gradient.addColorStop(0, "rgba(119,52,169,0)"); //blue colors
  return gradient;
};

const greenGradientColor = (context: ScriptableContext<"line">) => {
  const ctx = context.chart.ctx;
  const gradient = ctx.createLinearGradient(0, 230, 0, 50);
  gradient.addColorStop(1, "rgba(66,134,121,0.15)");
  gradient.addColorStop(0.4, "rgba(66,134,121,0.0)");
  gradient.addColorStop(0, "rgba(66,134,121,0)"); //blue colors
  return gradient;
};
// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample1 = {
  data1: () => {
    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: blueGradientColor,
          borderColor: "#1f8ef1",
          lineTension: 0.4,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
        },
      ],
    };
  },
  data2: () => {
    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: blueGradientColor,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
        },
      ],
    };
  },
  data3: () => {
    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: blueGradientColor,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130],
        },
      ],
    };
  },
  options: chart1_2_options,
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample2 = {
  data: () => {
    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "First dataset",
          fill: "start",
          lineTension: 0.4,
          data: [80, 100, 70, 80, 120, 80],
          backgroundColor: blueGradientColor,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
        },
      ],
    };
  },
  options: chart1_2_options,
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample3 = {
  data: () => {
    return {
      labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
      datasets: [
        {
          label: "Countries",
          fill: true,
          backgroundColor: purpleGradientColor,
          hoverBackgroundColor: purpleGradientColor,
          borderColor: "#d048b6",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [53, 20, 10, 80, 100, 45],
        },
      ],
    };
  },
  options: chart3_options,
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample4 = {
  data: () => {
    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          lineTension: 0.4,
          backgroundColor: greenGradientColor,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [90, 27, 60, 12, 80],
        },
      ],
    };
  },
  options: chart4_options,
};

module.exports = {
  chartExample1, // in src/views/Dashboard.js
  chartExample2, // in src/views/Dashboard.js
  chartExample3, // in src/views/Dashboard.js
  chartExample4, // in src/views/Dashboard.js
};
