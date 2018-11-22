import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

import {Row,Col,Card,CardHeader, CardBody} from "reactstrap";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const codeImport = `import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";`;

const codeExample = `const MapWrapper = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [
          {
            featureType: "water",
            stylers: [
              {
                saturation: 43
              },
              {
                lightness: -11
              },
              {
                hue: "#0088ff"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              {
                hue: "#ff0000"
              },
              {
                saturation: -100
              },
              {
                lightness: 99
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#808080"
              },
              {
                lightness: 54
              }
            ]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ece2d9"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ccdca1"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#767676"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "poi",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [
              {
                visibility: "on"
              },
              {
                color: "#b8cb93"
              }
            ]
          },
          {
            featureType: "poi.park",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "poi.sports_complex",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "poi.medical",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "poi.business",
            stylers: [
              {
                visibility: "simplified"
              }
            ]
          }
        ]
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);`;

const codeExampleRender = `<Card>
  <CardHeader>Google Maps</CardHeader>
  <CardBody>
    <div
      id="map"
      className="map"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <MapWrapper
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
        loadingElement={<div style={{ height: \`100%\` }} />}
        containerElement={<div style={{ height: \`100%\` }} />}
        mapElement={<div style={{ height: \`100%\` }} />}
      />
    </div>
  </CardBody>
</Card>`;

const MapWrapper = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [
          {
            featureType: "water",
            stylers: [
              {
                saturation: 43
              },
              {
                lightness: -11
              },
              {
                hue: "#0088ff"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              {
                hue: "#ff0000"
              },
              {
                saturation: -100
              },
              {
                lightness: 99
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#808080"
              },
              {
                lightness: 54
              }
            ]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ece2d9"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ccdca1"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#767676"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "poi",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [
              {
                visibility: "on"
              },
              {
                color: "#b8cb93"
              }
            ]
          },
          {
            featureType: "poi.park",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "poi.sports_complex",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "poi.medical",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "poi.business",
            stylers: [
              {
                visibility: "simplified"
              }
            ]
          }
        ]
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

class GoogleMaps extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          React Google Maps v9.4.5
        </h1>
        <p className="bd-lead">
          For maps we've used some components from a react library{" "}
          <a
            href="https://github.com/tomchentw/react-google-maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-google-maps
          </a>.
        </p>
        <h2>Google API KEY</h2>
        <p>For this component to work, you will need a google maps API key</p>
        <p>Follow these steps to get an API key:</p>
        <ol>
          <li>
            Go to the{" "}
            <a
              href="https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google API Console
            </a>.
          </li>
          <li>Create or select a project.</li>
          <li>Click Continue to enable the API and any related services.</li>
          <li>On the Credentials page, get an API key.</li>
          <li>
            Note: If you have an existing unrestricted API key, or a key with
            browser restrictions, you may use that key.
          </li>
          <li>
            From the dialog displaying the API key, select Restrict key to set a
            browser restriction on the API key.
          </li>
          <li>
            In the Key restriction section, select HTTP referrers (web sites),
            then follow the on-screen instructions to set referrers.
          </li>
          <li>
            (Optional) Enable billing. See{" "}
            <a
              href="https://developers.google.com/maps/documentation/javascript/usage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Usage Limits
            </a>{" "}
            for more information.
          </li>
        </ol>
        <p>
          After these steps navigate in your project to{" "}
          <code>views/Maps/Maps.jsx</code> and replace the{" "}
          <code>YOUR_KEY_HERE</code> with the given API KEY.
        </p>
        <h2>Example</h2>
        <p>First of all, you will need the following imports:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImport}
        </SyntaxHighlighter>
        <p>You will have to create a variable for the map:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <p>After that, in your render method you will have to add:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleRender}
        </SyntaxHighlighter>
        <div className="bd-example">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>Google Maps</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    <MapWrapper
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `100%` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <h2>Props</h2>
        <p>
          Please refer to{" "}
          <a
            href="https://github.com/tomchentw/react-google-maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-google-maps documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default GoogleMaps;
