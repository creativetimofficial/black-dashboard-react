import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Upgrade extends React.Component {
  render() {
    return (
      <>
        <div className=" content">
          <Row>
            <Col className=" ml-auto mr-auto" md="8">
              <Card className=" card-upgrade">
                <CardHeader className=" text-center">
                  <CardTitle tag="h4">Black Dashboard PRO</CardTitle>
                  <p className=" card-category">
                    Are you looking for more components? Please check our
                    Premium Version of Black Dashboard PRO.
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <th />
                      <th className=" text-center">Free</th>
                      <th className=" text-center">PRO</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Components</td>
                        <td className=" text-center">16</td>
                        <td className=" text-center">160</td>
                      </tr>
                      <tr>
                        <td>Plugins</td>
                        <td className=" text-center">4</td>
                        <td className=" text-center">14</td>
                      </tr>
                      <tr>
                        <td>Example Pages</td>
                        <td className=" text-center">7</td>
                        <td className=" text-center">28</td>
                      </tr>
                      <tr>
                        <td>Login, Register, Pricing, Lock Pages</td>
                        <td className=" text-center">
                          <i className=" tim-icons icon-simple-remove text-danger" />
                        </td>
                        <td className=" text-center">
                          <i className=" tim-icons icon-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          DataTables, VectorMap, SweetAlert, Wizard,
                          jQueryValidation, FullCalendar etc...
                        </td>
                        <td className=" text-center">
                          <i className=" tim-icons icon-simple-remove text-danger" />
                        </td>
                        <td className=" text-center">
                          <i className=" tim-icons icon-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Mini Sidebar</td>
                        <td className=" text-center">
                          <i className=" tim-icons icon-simple-remove text-danger" />
                        </td>
                        <td className=" text-center">
                          <i className=" tim-icons icon-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Premium Support</td>
                        <td className=" text-center">
                          <i className=" tim-icons icon-simple-remove text-danger" />
                        </td>
                        <td className=" text-center">
                          <i className=" tim-icons icon-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td className=" text-center">Free</td>
                        <td className=" text-center">Just $49</td>
                      </tr>
                      <tr>
                        <td className=" text-center" />
                        <td className=" text-center">
                          <Button
                            className=" btn-round disabled"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Current Version
                          </Button>
                        </td>
                        <td className=" text-center">
                          <Button
                            className=" btn-round"
                            color="primary"
                            href="https://themes.getbootstrap.com/product/black-dashboard-pro-premium-bootstrap-4-admin/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Upgrade to PRO
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Upgrade;
