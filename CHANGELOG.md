## [1.1.0] 2020-03-13
### Bug fixing
- Github issues:
  - https://github.com/creativetimofficial/black-dashboard-react/issues/8
  - https://github.com/creativetimofficial/black-dashboard-react/issues/7
  - https://github.com/creativetimofficial/black-dashboard-react/issues/6 (not really an issue, but was old and needed to close it)
  - https://github.com/creativetimofficial/black-dashboard-react/issues/4
### Major style changes
### Deleted components
### Added components
### Deleted dependencies
- bootstrap (styles are already added inside the scss folder)
### Added dependencies
- To stop consolde warnings on installation:
  + eslint-plugin-flowtype@3.13.0
  + @types/markerclustererplus@2.1.33
  + @types/googlemaps@3.39.3
  + typescript@3.8.3
- For Creative Tim copyrights
  + gulp@4.0.2
  + gulp-append-prepend@1.0.8
### Updated dependencies
```
@types/react               16.4.16   →   16.9.23
chart.js                    ^2.7.2   →     2.9.3
history                      4.7.2   →    4.10.1
node-sass                    4.9.3   →    4.13.1
perfect-scrollbar            1.4.0   →     1.5.0
prop-types                 ^15.6.2   →    15.7.2
react                       16.5.2   →   16.13.0
react-chartjs-2             ^2.7.4   →     2.9.0
react-dom                   16.5.2   →   16.13.0
react-notification-alert     0.0.8   →    0.0.12
react-router-dom             4.3.1   →     5.1.2
react-scripts                2.0.4   →     3.4.0
reactstrap                   6.5.0   →     8.4.1
```
### Warning
**There are some errors that come from the react-google-maps components, since they are using old React v16 syntax, this, at the moment does not affect the UI or the functionality of the product. If the issue will perssit in React v17, we will drop the usage of these components and replace them with other maps components. The following warnings on installation could not be solved, due to some of our dependencies, however, they do not affect the functionality or the UI of the product:**
```
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
npm WARN deprecated popper.js@1.16.1: Popper changed home, find its new releases at @popperjs/core
```
**Also, the above, are only present in development, and not in production.**


## [1.0.0] 2018-11-29
### Original Release
- Added Reactstrap as base framework
- Added design from PRODUCT NAME by Creative Tim
