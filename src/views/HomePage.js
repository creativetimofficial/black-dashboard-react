
import React, { useState } from "react";
import axios from 'axios';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  CardTitle,
  Table,
} from "reactstrap";

function Tables() {
  const [formData, setFormData] = useState({
    initialSaving: '',
    monthlyDeposit: '',
    invest: 'No',
    investmentProfit: '',
    targetAmount: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(formData);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => { 
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3005/calculate', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Calculate</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Table className="tablesorter" responsive>
                    <tbody>
                      <tr>
                        <td>
                          <Col className="pl-md-1" md="3">
                            <FormGroup>
                              <label>Initial Saving ($)</label>
                              <Input
                                id="initialSaving"
                                name="initialSaving"
                                placeholder="Enter the current savings"
                                type="number"
                                value={formData.initialSaving}
                                onChange={handleInputChange}
                              />
                            </FormGroup>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                      <td>
                    <Col className="pl-md-1" md="3">
                      <FormGroup>
                        <label>Monthly Deposit ($)</label>
                        <Input
                          id="monthlyDeposit"
                          name="monthlyDeposit"
                          placeholder="Enter the monthly deposit"
                          type="number"
                          onChange={handleInputChange}
                          value={formData.monthlyDeposit}
                        />
                      </FormGroup>
                    </Col></td>
                      </tr>
                      <tr>
                        <td>
                     <Col className="px-md-1" md="3">
                       <FormGroup>
                         <label>Do you invest?</label>
                         <Input
                           id="invest"
                           name="invest"
                           placeholder="Yes or No"
                           type="select"
                           onChange={handleInputChange}
                           value={formData.invest}
                         >
                        <option>Yes</option>
                        <option>No</option>
                     </Input>
                       </FormGroup>
                     </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <Col className="pl-md-1" md="3">
                      <FormGroup>
                        <label>Expected Monthly Investment Profit (%)</label>
                        <Input
                          id="investmentProfit"
                          name="investmentProfit"
                          value={formData.investmentProfit}
                          onChange={handleInputChange}
                          placeholder="Enter the expected monthly profit"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                        </td>
                      </tr>
                      <tr>
                      <td>
                    <Col className="pl-md-1" md="3">
                      <FormGroup>
                        <label>Target Amount ($)</label>
                        <Input
                          id="targetAmount"
                          name="targetAmount"
                          onChange={handleInputChange}
                          placeholder="Enter the target amount"
                          value={formData.targetAmount}
                          type="number"
                        />
                      </FormGroup>
                    </Col></td>
                      </tr>
                    </tbody>
                  </Table>
                  <CardFooter>
                    <Button className="btn-fill" color="primary" type="submit">
                      Calculate
                    </Button>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
