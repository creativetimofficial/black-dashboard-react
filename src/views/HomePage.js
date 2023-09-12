
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

  const [monthsNeeded, setMonthsNeeded] = useState(null);


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
      const months = response.data.monthsNeeded;
      console.log(`It will take ${months} months to reach your goal.`);
      setMonthsNeeded(months);
      console.log(response.data);
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };

  // Generate table rows based on the number of months needed
  const generateTableRows = () => {
    if (monthsNeeded === null) {
      return null;
    }

    const rows = [];
    let currentSavings = parseFloat(formData.initialSaving);
    const monthlyDeposit = parseFloat(formData.monthlyDeposit);
    const monthlyProfit = parseFloat(formData.investmentProfit);

    for (let month = 1; month <= monthsNeeded; month++) {
      const monthlyGrowth = (currentSavings + monthlyDeposit) * (monthlyProfit / 100);
      currentSavings += monthlyDeposit + monthlyGrowth;

      rows.push(
        <tr key={month}>
          <td>{month}</td>
          <td>${monthlyDeposit.toFixed(2)}</td>
          <td>${monthlyGrowth.toFixed(2)}</td>
          <td className="text-center">${currentSavings.toFixed(2)}</td>
        </tr>
      );
    }

    return rows;
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
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Results</CardTitle>
                <p className="category">Total savings for monthly</p>
              </CardHeader>
              <CardBody>
              {monthsNeeded !== null && (
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Month</th>
                        <th>Monthly Deposit</th>
                        <th>Monthly Profit</th>
                        <th className="text-center">Total Saving</th>
                      </tr>
                    </thead>
                    <tbody>
                      {generateTableRows()}
                    </tbody>
                  </Table>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
