import React from "react";

// reactstrap components
import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class Notifications extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Notifications Style</CardTitle>
                </CardHeader>
                <CardBody>
                  <Alert color="info">
                    <span>This is a plain notification</span>
                  </Alert>
                  <Alert color="info">
                    <span>This is a notification with close button.</span>
                  </Alert>
                  <Alert className="alert-with-icon" color="info">
                    <span className="tim-icons icon-bell-55" />
                    <span>
                      This is a notification with close button and icon.
                    </span>
                  </Alert>
                  <Alert className="alert-with-icon" color="info">
                    <span className="tim-icons icon-bell-55" />
                    <span>
                      This is a notification with close button and icon and have
                      many lines. You can see that the icon and the close button
                      are always vertically aligned. This is a beautiful
                      notification. So you don't have to worry about the style.
                    </span>
                  </Alert>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Notification states</CardTitle>
                </CardHeader>
                <CardBody>
                  <Alert color="primary">
                    <span>
                      <b>Primary -</b>
                      This is a regular notification made with ".alert-primary"
                    </span>
                  </Alert>
                  <Alert color="info">
                    <span>
                      <b>Info -</b>
                      This is a regular notification made with ".alert-info"
                    </span>
                  </Alert>
                  <Alert color="success">
                    <span>
                      <b>Success -</b>
                      This is a regular notification made with ".alert-success"
                    </span>
                  </Alert>
                  <Alert color="warning">
                    <span>
                      <b>Warning -</b>
                      This is a regular notification made with ".alert-warning"
                    </span>
                  </Alert>
                  <Alert color="danger">
                    <span>
                      <b>Danger -</b>
                      This is a regular notification made with ".alert-danger"
                    </span>
                  </Alert>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="6">
                        <CardTitle tag="h4">Notifications Places</CardTitle>
                        <p className="category">Click to view notifications</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="8">
                        <Row>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick="demo.showNotification('top','left')"
                            >
                              Top Left
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick="demo.showNotification('top','center')"
                            >
                              Top Center
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick="demo.showNotification('top','right')"
                            >
                              Top Right
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="8">
                        <Row>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick="demo.showNotification('bottom','left')"
                            >
                              Bottom Left
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick="demo.showNotification('bottom','center')"
                            >
                              Bottom Center
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick="demo.showNotification('bottom','right')"
                            >
                              Bottom Right
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Notifications;
