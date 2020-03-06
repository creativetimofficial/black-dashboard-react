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
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/styles/prism";
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
  Marker,
} from "react-google-maps"`;

const codeExample = `const MapWrapper = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
        defaultOptions={{
            scrollwheel: false,
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}] }}
    >
        <Marker
            position={{ lat: 40.748817, lng: -73.985428 }}
        />
    </GoogleMap>
));`;

const codeExampleRender = `<div id="map" style={{position: "relative", overflow: "hidden"}}>
    <MapWrapper
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
        loadingElement={<div style={{ height: \`100%\` }} />}
        containerElement={<div style={{ height: \`100%\` }} />}
        mapElement={<div style={{ height: \`100%\` }} />}
    />
</div>`;

const MapWrapper = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }, { lightness: 17 }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 18 }]
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 16 }]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#dedede" }, { lightness: 21 }]
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              { visibility: "on" },
              { color: "#ffffff" },
              { lightness: 16 }
            ]
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              { saturation: 36 },
              { color: "#333333" },
              { lightness: 40 }
            ]
          },
          { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#f2f2f2" }, { lightness: 19 }]
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#fefefe" }, { lightness: 20 }]
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }]
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
          <code className="highlighter-rouge">views/Maps/GoogleMaps.js</code>{" "}
          and{" "}
          <code className="highlighter-rouge">
            views/Maps/FullScreenMap.js
          </code>{" "}
          and replace the{" "}
          <code className="highlighter-rouge">YOUR_KEY_HERE</code> with the
          given API KEY.
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
          <div id="map" style={{ position: "relative", overflow: "hidden" }}>
            <MapWrapper
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBd3PjUqq81lIOfBPYXrQGWwK5T4ystZjA"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
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
