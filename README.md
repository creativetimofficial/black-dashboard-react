# [Black Dashboard React](https://demos.creative-tim.com/black-dashboard-react/#/dashboard) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fblack-dashboard-react%2F%23%2Fdashboard&text=Black%20Dashboard%20React%20by%20Creative%20Tim%20%7C%20Free%20React%20Admin%20Template&original_referer=https%3A%2F%2Fdemos.creative-tim.com%2Fblack-dashboard-react%2F&via=creativetim&hashtags=react%2Ccreativetim%2Cblack%2Cdashboard%2Cbootstrap%2Creactstrap%2Creactjs)



![version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/black-dashboard-react.svg?maxAge=2592000)]() [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/black-dashboard-react.svg?maxAge=2592000)]()  [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Product Gif](./github-assets/black-dashboard-react.gif)

If you are a react developer or a react website owner that needs to work within a dashboard and want to have a pretty sight while doing so, Black Dashboard React is for you. Black Dashboard React is a Bootstrap Admin Panel which combines soft colours with beautiful typography and spacious cards and graphics. It is a powerful tool, but it is light and easy to use. It has enough features to allow you to get the job done, but it is not crowded to the point where you can't find the files for a specific plugin.

We like consistency and design that blends into its purpose. Black Dashboard React is a perfect example of our most thoughtful work. It combines over a dozen components and plugins, while looking like everything fits together. For an easy start or inspiration for you project, we have also create a set of example pages, like the user settings or usage graphics.

Black Dashboard React is built using the same design language as [Black Dashboard 2](https://www.creative-tim.com/product/black-dashboard).

**Bootstrap 4 Support** Black Dashboard React is built on top of the much awaited Bootstrap 4 and uses the most used react framework that implements the Bootstrap 4 components on react, reactstrap. This makes starting a new project very simple. It also provides benefits if you are already working on a Bootstrap 4 and/or reactstrap project; you can just import the Black Dashboard React style over it. Most of the elements have been redesigned; but if you are using an element we have not touched, it will fall back to the Bootstrap default.

**Example Pages** We wanted to fully display the power of this dashboard, so the kit comes packed with examples showing you how to use the components.

## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Versions

[<img src="https://s3.amazonaws.com/creativetim_bucket/github/html.png" width="60" height="60" />](https://www.creative-tim.com/product/black-dashboard)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/react.svg" width="60" height="60" />](https://www.creative-tim.com/product/black-dashboard-react)


| HTML | React |
| --- | --- |
| [![Black Dashboard HTML](https://s3.amazonaws.com/creativetim_bucket/products/86/thumb/opt_pd2_thumbnail.jpg)](https://www.creative-tim.com/product/black-dashboard) | [![Black Dashboard React](https://s3.amazonaws.com/creativetim_bucket/products/98/thumb/opt_pd_react_thumbnail.jpg)](https://www.creative-tim.com/product/black-dashboard-react) |

## Demo

| Dashboard | User Profile | Tables | Maps | Notification |
| --- | --- | --- | --- | --- |
| [![Start page](./github-assets/black-dashboard-react-dashboard-page.png)](https://demos.creative-tim.com/black-dashboard-react/#/dashboard) | [![User profile page](./github-assets/black-dashboard-react-user-page.png)](https://demos.creative-tim.com/black-dashboard-react/#/user-page) | [![Tables page ](./github-assets/black-dashboard-react-table-page.png)](https://demos.creative-tim.com/black-dashboard-react/#/table-list) | [![Maps Page](./github-assets/black-dashboard-react-maps-page.png)](https://demos.creative-tim.com/black-dashboard-react/#/maps) | [![Notification page](./github-assets/black-dashboard-react-notifications-page.png)](https://demos.creative-tim.com/black-dashboard-react/#/notifications)

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
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo-white.svg
    ├── logo.svg
    ├── assets
    │   ├── demo
    │   ├── fonts
    │   ├── github
    │   ├── img
    │   │   └── faces
    │   └── scss
    │       ├── black-dashboard
    │       │   ├── cards
    │       │   ├── mixins
    │       │   └── plugins
    │       └── black-dashboard.scss
    ├── components
    │   ├── CardElements
    │   │   ├── CardAuthor.jsx
    │   │   ├── CardCategory.jsx
    │   │   └── CardSocials.jsx
    │   ├── CustomButton
    │   │   └── CustomButton.jsx
    │   ├── CustomCheckbox
    │   │   └── SimpleCheckbox.jsx
    │   ├── CustomRadio
    │   │   └── CustomRadio.jsx
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── FormInputs
    │   │   └── FormInputs.jsx
    │   ├── Header
    │   │   └── Header.jsx
    │   ├── Sidebar
    │   │   └── Sidebar.jsx
    │   ├── Stats
    │   │   └── Stats.jsx
    │   ├── Tasks
    │   │   └── Tasks.jsx
    │   └── index.js
    ├── layouts
    │   └── Dashboard
    │       └── Dashboard.jsx
    ├── routes
    │   ├── dashboard.jsx
    │   └── index.jsx
    ├── variables
    │   ├── charts.jsx
    │   ├── general.jsx
    │   └── icons.jsx
    └── views
        ├── Dashboard
        │   └── Dashboard.jsx
        ├── Icons
        │   └── Icons.jsx
        ├── Maps
        │   └── Maps.jsx
        ├── Notifications
        │   └── Notifications.jsx
        ├── TableList
        │   └── TableList.jsx
        ├── Typography
        │   └── Typography.jsx
        └── UserPage
            └── UserPage.jsx
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

- Copyright 2018 Creative Tim (https://www.creative-tim.com)
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
