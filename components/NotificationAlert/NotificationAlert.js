import React from "react";
import PropTypes from "prop-types";
import { Alert, Col } from "reactstrap";

class NotificationAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifyTL: [],
      notifyTC: [],
      notifyTR: [],
      notifyBL: [],
      notifyBC: [],
      notifyBR: [],
      notifyID: [],
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.notificationAlert = this.notificationAlert.bind(this);
    this.refNotification = React.createRef();
  }
  // to stop the warning of calling setState of unmounted component
  componentWillUnmount() {
    for (let i = 0; i < this.state.notifyID.length; i++) {
      window.clearTimeout(this.state.notifyID[i]);
    }
  }
  onDismiss(nNumber, place, noAnimate) {
    var notify = [];
    var sNotify = this.state["notify" + place.toUpperCase()];
    var dNotify;
    for (var i = 0; i < sNotify.length; i++) {
      if (sNotify[i].key !== nNumber + "") {
        if (sNotify[i].props.className.indexOf("fadeOutUp") !== -1) {
          dNotify = React.cloneElement(sNotify[i]);
        } else {
          if (noAnimate === undefined) {
            var animation;
            if (place.indexOf("b") !== -1) {
              animation =
                sNotify[i].key > nNumber + "" ? " animated moveDown" : "";
            } else {
              animation =
                sNotify[i].key > nNumber + "" ? " animated moveUp" : "";
            }
            dNotify = React.cloneElement(sNotify[i], {
              className: "alert-with-icon" + animation,
            });
          } else {
            dNotify = React.cloneElement(sNotify[i], {
              className: "alert-with-icon",
            });
          }
        }
        notify.push(dNotify);
      } else {
        if (noAnimate === undefined) {
          dNotify = React.cloneElement(sNotify[i], {
            className: "alert-with-icon animated fadeOutUp",
          });
          notify.push(dNotify);
        }
      }
    }
    if (noAnimate === undefined) {
      let id = setTimeout(
        function () {
          this.onDismiss(nNumber, place, "noAnimate");
        }.bind(this),
        800
      );
      this.setState({
        notifyID: [id].concat(this.state.notifyID),
      });
    }
    sNotify = {};
    sNotify["notify" + place.toUpperCase()] = notify;
    this.setState(sNotify);
  }
  notificationAlert(options) {
    var notify = this.state["notify" + options.place.toUpperCase()];
    var nNumber = notify.length;
    if (notify.length > 0) {
      if (options.place.indexOf("b") !== -1) {
        nNumber = parseInt(notify[0].key, 10) + 1;
      } else {
        nNumber = parseInt(notify[notify.length - 1].key, 10) + 1;
      }
    }
    let toggle;
    if (options.closeButton !== false) {
      toggle = () => this.onDismiss(nNumber, options.place);
    }
    var notification = (
      <Alert
        color={options.type}
        className="alert-with-icon animated fadeInDown"
        toggle={toggle}
        key={nNumber}
        onClick={this.props.onClick}
      >
        {options.icon !== undefined && (
          <span data-notify="icon" className={options.icon}></span>
        )}
        <span data-notify="message">{options.message}</span>
      </Alert>
    );
    if (options.place.indexOf("b") !== -1) {
      notify.unshift(notification);
    } else {
      notify.push(notification);
    }
    var sNotify = {};
    sNotify["notify" + options.place.toUpperCase()] = notify;
    // aici pui notify[notify.length-1].key
    if (options.autoDismiss > 0) {
      let id = setTimeout(
        function () {
          this.onDismiss(nNumber, options.place);
        }.bind(this),
        options.autoDismiss * 1000 + (notify.length - 1) * 1000
      );
      this.setState({
        notifyID: [id].concat(this.state.notifyID),
      });
    }
    this.setState(sNotify);
  }
  showAllNotifications(place) {
    if (this.state["notify" + place.toUpperCase()].length > 0) {
      var style = {
        display: "inline-block",
        margin: "0px auto",
        position: "fixed",
        transition: "all 0.5s ease-in-out",
        zIndex: this.props.zIndex,
      };
      if (place.indexOf("t") !== -1) {
        style["top"] = "20px";
        switch (place) {
          case "tl":
            style["left"] = "20px";
            break;
          case "tc":
            style["left"] = "0px";
            style["right"] = "0px";
            break;
          case "tr":
            style["right"] = "20px";
            break;
          default:
            break;
        }
      } else {
        style["bottom"] = "20px";
        switch (place) {
          case "bl":
            style["left"] = "20px";
            break;
          case "bc":
            style["left"] = "0px";
            style["right"] = "0px";
            break;
          case "br":
            style["right"] = "20px";
            break;
          default:
            break;
        }
      }
      return (
        <>
          <Col xs="11" sm="4" style={style}>
            {this.state["notify" + place.toUpperCase()].map((prop, key) => {
              return prop;
            })}
          </Col>
        </>
      );
    }
  }
  render() {
    return (
      <>
        <div ref={this.refNotification}>
          {this.showAllNotifications("tl")}
          {this.showAllNotifications("tc")}
          {this.showAllNotifications("tr")}
          {this.showAllNotifications("bl")}
          {this.showAllNotifications("bc")}
          {this.showAllNotifications("br")}
        </div>
      </>
    );
  }
}

NotificationAlert.defaultProps = {
  zIndex: 9999,
  onClick: () => {},
};

NotificationAlert.propTypes = {
  zIndex: PropTypes.number,
  onClick: PropTypes.func,
};

export default NotificationAlert;
