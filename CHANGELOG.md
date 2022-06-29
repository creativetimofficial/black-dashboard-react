# CHANGELOG

## [1.2.1] 2022-06-29

- Update dependencies
- Migrate from node-sass to sass

## [1.2.0] 2020-12-11

### Bug fixing

- Added hooks support
- https://github.com/creativetimofficial/black-dashboard-react/issues/19
- https://github.com/creativetimofficial/black-dashboard-react/issues/17

### Major style changes

- All Bootstrap imports from `src/assets/scss/black-dashboard-react/bootstrap` have been changed with imports from `node_modules` from `Bootstrap`

### Deleted components

### Added components

### Deleted dependencies

- history (instead of using `history`, we'll be using `BrowserRouter` from `react-router-dom`)
- @types/googlemaps
- @types/react
- @types/markerclustererplus
- react-google-maps (Instead of it, we're going to use simple plain JS Google maps)

### Added dependencies

- node-sass-package-importer@5.3.2 (for importing `Bootstrap` from `node_modules`)
- bootstrap@4.5.3 (instead of using downloaded zip of `Bootstrap`, we'll use it from `node_modules`)
- jquery@3.5.1 (to stop `Bootstrap` warning on a clean install)

### Updated dependencies

```
@fortawesome/fontawesome-free    5.13.0   →   5.15.1
chart.js                          2.9.3   →    2.9.4
node-sass                        4.13.1   →   4.14.1
react                           16.13.1   →   17.0.1
react-chartjs-2                   2.9.0   →   2.11.1
react-dom                       16.13.1   →   17.0.1
react-notification-alert         0.0.12   →   0.0.13
react-router-dom                  5.1.2   →    5.2.0
react-scripts                     3.4.1   →    4.0.1
reactstrap                        8.4.1   →    8.7.1
eslint-plugin-flowtype           3.13.0   →    5.2.0
typescript                        3.8.3   →    4.1.2
```

### Important Notes

**The jQuery and TypeScript dependencies are installed only to stop console warnings on install. They are not actually used in our product. So the product is not based on jQuery, and it is not based on TypeScript!**

### Warning

_Some warnings may appear when running the installation command, but they do not affect the UI or the functionality of the product._
_The following warnings will appear when running the installation command, but they do not affect the UI or the functionality of the product (they will be solved in our next update - they come from the plugins that we are using, and they haven't yet upgraded to the latest React version):_

```
npm WARN react-popper@1.3.7 requires a peer of react@0.14.x || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN create-react-context@0.3.0 requires a peer of react@^0.14.0 || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
```

Happy Hacking!

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
  - eslint-plugin-flowtype@3.13.0
  - @types/markerclustererplus@2.1.33
  - @types/googlemaps@3.39.3
  - typescript@3.8.3
- For Creative Tim copyrights
  - gulp@4.0.2
  - gulp-append-prepend@1.0.8

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
