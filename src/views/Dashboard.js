import React from "react";


// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components


function Dashboard(props) {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h1">Core P2P</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Advertisers</th>
                      <th>Price</th>
                      <th>Payment</th>
                      <th>Limits</th>
                      <th>Available</th>
                      <th>Blockchain</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>5 min faciles</td>
                      <td>0.95 EUR</td>
                      <td>Revolut</td>
                      <td>EUR $100</td>
                      <td>100 USDT</td>
                      <td>Polygon</td>
                      <Button>Buy/sell</Button>
                    </tr>
                    <tr>
                      <td>Jose</td>
                      <td>750 ARS</td>
                      <td>Transferencia</td>
                      <td>ARS $700.000</td>
                      <td>1000 USDT</td>
                      <td>BSC</td>
                      <Button>Buy/sell</Button>
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

export default Dashboard;
