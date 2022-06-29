# [Black Dashboard React](https://demos.creative-tim.com/black-dashboard-react/#/dashboard) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fblack-dashboard-react%2F%23%2Fadmin%2Fdashboard&text=Black%20Dashboard%20React%20by%20Creative%20Tim%20%7C%20Free%20React%20Admin%20Template&original_referer=https%3A%2F%2Fdemos.creative-tim.com%2Fblack-dashboard-react%2F&via=creativetim&hashtags=react%2Ccreativetim%2Cdark%2Cdashboard%2Cbootstrap%2Creactstrap%2Creactjs)

![version](https://img.shields.io/badge/version-1.2.1-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/black-dashboard-react.svg?maxAge=2592000)]() [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/black-dashboard-react.svg?maxAge=2592000)]() [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Product Gif](./github-assets/black-dashboard-react.gif)

Black Dashboard React is a beautiful [Bootstrap 4](http://getbootstrap.com/), [Reacstrap](https://reactstrap.github.io/) and [React](https://reactjs.org/) ([create-react-app](https://github.com/facebook/create-react-app)) Admin Dashboard with a huge number of components built to fit together and look amazing. If you are looking for a tool to manage and visualize data about your business, this dashboard is the thing for you. It combines colors that are easy on the eye, spacious cards, beautiful typography, and graphics.
Black Dashboard React comes packed with all plugins that you might need inside a project and documentation on how to get started. It is light and easy to use, and also very powerful.

Black Dashboard React features over 16 individual components, giving you the freedom of choosing and combining. This means that there are thousands of possible combinations. All components can take variations in color, that you can easily modify using SASS files. You will save a lot of time going from prototyping to full-functional code because all elements are implemented.
We thought about everything, so this dashboard comes with 2 versions, Dark Mode and Light Mode.

Special thanks go for the owners of these plugins:

- [Perfect Scrollbar](http://utatti.github.io/perfect-scrollbar/) for the nice scrollbars for windows.
- [React Chartjs](http://jerairrest.github.io/react-chartjs-2/) for the wonderful wrapper for charts.
- [Chartjs](https://www.chartjs.org/) for the wonderful charts.

We are very excited to share this dashboard with you and we look forward to hearing your feedback!

**Example Pages** We wanted to fully display the power of this dashboard, so the kit comes packed with examples showing you how to use the components.

## Table of Contents

- [Versions](#versions)
- [Demo](#demo)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Resources](#resources)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions)
- [Licensing](#licensing)
- [Useful Links](#useful-links)

## Versions

[<img src="./github-assets/html.png" width="60" height="60" />](https://www.creative-tim.com/product/black-dashboard)
[<img src="./github-assets/react.svg" width="60" height="60" />](https://www.creative-tim.com/product/black-dashboard-react)[<img src="./github-assets/vuejs.png" width="60" height="60" />](https://www.creative-tim.com/product/vue-black-dashboard)

| HTML                                                                                                                                                                | React                                                                                                                                                                   | Vue                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Black Dashboard HTML](https://s3.amazonaws.com/creativetim_bucket/products/93/thumb/opt_bd_thumbnail.jpg)](https://www.creative-tim.com/product/black-dashboard) | [![Black Dashboard React](https://s3.amazonaws.com/creativetim_bucket/products/136/thumb/opt_bd_react.jpg)](https://www.creative-tim.com/product/black-dashboard-react) | [![Vue Black Dashboard](https://s3.amazonaws.com/creativetim_bucket/products/99/thumb/opt_bd_vue_thumbnail.jpg)](https://www.creative-tim.com/product/vue-black-dashboard) |

## Demo

| Dashboard                                                                                                             | User Profile                                                                                                            | Tables                                                                                                               | Maps                                                                                                       | Notification                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [![Start page](./github-assets/dashboard-page.png)](https://demos.creative-tim.com/black-dashboard-react/#/dashboard) | [![User profile page](./github-assets/user-page.png)](https://demos.creative-tim.com/black-dashboard-react/#/user-page) | [![Tables page ](./github-assets/table-page.png)](https://demos.creative-tim.com/black-dashboard-react/#/table-list) | [![Maps Page](./github-assets/maps-page.png)](https://demos.creative-tim.com/black-dashboard-react/#/maps) | [![Notification page](./github-assets/notifications-page.png)](https://demos.creative-tim.com/black-dashboard-react/#/notifications) |

[View More](https://demos.creative-tim.com/black-dashboard-react/#/dashboard).

## Quick start

Quick start options:

- Clone the repo: `git clone https://github.com/creativetimofficial/black-dashboard-react.git`.
- [Download from Github](https://github.com/creativetimofficial/black-dashboard-react/archive/master.zip).
- [Download from Creative Tim](https://www.creative-tim.com/product/black-dashboard-react).

## Documentation

The documentation for the Black Dashboard React is hosted at our [website](https://demos.creative-tim.com/black-dashboard-react/#/documentation/tutorial).

## File Structure

Within the download you'll find the following directories and files:

```
black-dashboard-react
.
├── package.json
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── Documentation
│   └── documentation.html
├── github-assets
│   └── react.svg
├── public
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo-white.svg
    ├── logo.svg
    ├── routes.js
    ├── assets
    │   ├── css
    │   ├── demo
    │   ├── fonts
    │   ├── img
    │   └── scss
    │       ├── black-dashboard
    │       │   ├── bootstrap
    │       │   │   ├── mixins
    │       │   │   └── utilities
    │       │   ├── custom
    │       │   │   ├── cards
    │       │   │   ├── mixins
    │       │   │   ├── utilities
    │       │   │   └── vendor
    │       └── black-dashboard.scss
    ├── components
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Navbars
    │   │   ├── AdminNavbar.js
    │   │   └── RTLNavbar.js
    │   └── Sidebar
    │       └── Sidebar.js
    ├── layouts
    │   ├── Admin
    │   │   └── Admin.js
    │   └── RTL
    │       └── RTL.js
    ├── variables
    │   └── charts.js
    └── views
        ├── Dashboard.js
        ├── Icons.js
        ├── Map.js
        ├── Notifications.js
        ├── Rtl.js
        ├── TableList.js
        ├── Typography.js
        └── UserProfile.js
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Resources

- Demo: https://demos.creative-tim.com/black-dashboard-react/#/dashboard
- Download Page: https://www.creative-tim.com/product/black-dashboard-react
- Documentation: https://demos.creative-tim.com/black-dashboard-react/#/documentation/tutorial
- License Agreement: https://www.creative-tim.com/license
- Support: https://www.creative-tim.com/contact-us
- Issues: [Github Issues Page](https://github.com/creativetimofficial/black-dashboard-react/issues)

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Black Dashboard React. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Black Dashboard React. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us) instead of opening an issue.

## Licensing

- Copyright 2022 Creative Tim (https://www.creative-tim.com)
- Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

## Useful Links

More products from Creative Tim: <https://www.creative-tim.com/products>

Tutorials: <https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w>

Freebies: <https://www.creative-tim.com/products>

Affiliate Program (earn money): <https://www.creative-tim.com/affiliates/new>

Social Media:

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://instagram.com/creativetimofficial>
