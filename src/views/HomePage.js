import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import axios from 'axios';
import {Notifications} from "./Notifications.js"
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
  Alert
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
  const [formError, setFormError] = useState(false);

  

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

        // Check if any of the required fields are empty
        if (!formData.initialSaving || !formData.monthlyDeposit || !formData.targetAmount) {
          setFormError(true);
          return;
        }

        if (
          parseFloat(formData.initialSaving) < 0 ||
          parseFloat(formData.monthlyDeposit) < 0 ||
          parseFloat(formData.targetAmount) < 0
        ) {
          setFormError(true);
          return;
        }

    try {
      const response = await axios.post('http://localhost:3005/calculate', formData);
      const months = response.data.monthsNeeded;
      console.log(`It will take ${months} months to reach your goal.`);
      setMonthsNeeded(months);
      setFormError(false); // Reset form error

      toast.success(`Success! It will take ${months} months to reach your goal. Scroll down to see details.`);

      console.log(response.data);
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };
  const renderInvestmentProfitField = () => {
    if (formData.invest === 'No') {
      return null; // Return nothing if "No" is selected
    }

    return (
      <tr>
        <td>
          <Col className="pl-md-1" md="3">
            <FormGroup>
              <label><b>Expected Monthly Investment Profit (%)</b></label>
              <Input
                id="investmentProfit"
                name="investmentProfit"
                value={formData.investmentProfit}
                onChange={handleInputChange}
                placeholder="Enter the expected monthly profit"
                type="number"
                min="0"
                
              />
            </FormGroup>
          </Col>
        </td>
      </tr>
    );
  };

    // Conditionally render the "Monthly Profit" column
    const renderMonthlyProfitColumn = () => {
      if (formData.invest === 'No') {
        return null; // Return nothing if "No" is selected
      }
  
      return (
        <th>Monthly Profit</th>
      );
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


      if (formData.invest === 'Yes') {
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
      } else {
        currentSavings += monthlyDeposit;
        rows.push(
          <tr key={month}>
            <td>{month}</td>
            <td>${monthlyDeposit.toFixed(2)}</td>
            <td className="text-center">${currentSavings.toFixed(2)}</td>
          </tr>
        );
      }
    }

    return rows;
  };


  return (
    <>
      <div className="content">
      <ToastContainer />
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h2"><b>Calculate</b></CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Table className="tablesorter" responsive>
                    <tbody>
                      <tr>
                        <td>
                          <Col className="pl-md-1" md="3">
                            <FormGroup>
                              <label><b>Initial Saving ($)</b></label>
                              <Input
                                id="initialSaving"
                                name="initialSaving"
                                placeholder="Enter the current savings"
                                type="number"
                                value={formData.initialSaving}
                                onChange={handleInputChange}
                                min="0"
                                required
                              />
                            </FormGroup>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                      <td>
                    <Col className="pl-md-1" md="3">
                      <FormGroup>
                        <label><b>Monthly Deposit ($)</b></label>
                        <Input
                          id="monthlyDeposit"
                          name="monthlyDeposit"
                          placeholder="Enter the monthly deposit"
                          type="number"
                          onChange={handleInputChange}
                          value={formData.monthlyDeposit}
                          min="0"
                          required
                        />
                      </FormGroup>
                    </Col></td>
                      </tr>
                      <tr>
                        <td>
                     <Col className="px-md-1" md="3">
                       <FormGroup>
                         <label><b>Do you invest?</b></label>
                         <Input
                           id="invest"
                           name="invest"
                           placeholder="Yes or No"
                           type="select"
                           onChange={handleInputChange}
                           value={formData.invest}
                           min="0"
                           
                         >
                        <option>Yes</option>
                        <option>No</option>
                     </Input>
                       </FormGroup>
                     </Col>
                        </td>
                      </tr>
                      {renderInvestmentProfitField()}
                      <tr>
                      <td>
                    <Col className="pl-md-1" md="3">
                      <FormGroup>
                        <label><b>Target Amount ($)</b></label>
                        <Input
                          id="targetAmount"
                          name="targetAmount"
                          onChange={handleInputChange}
                          placeholder="Enter the target amount"
                          value={formData.targetAmount}
                          type="number"
                          min="0"
                          required
                        />
                      </FormGroup>
                    </Col></td>
                      </tr>
                    </tbody>
                  </Table>
                  {formError && (
                    <Alert color="warning">
                      Please fill in all required fields.
                    </Alert>
                  )}
                  <CardFooter>
                    <Button className="btn-fill" type="submit">
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
                <CardTitle tag="h2"><b>Results</b></CardTitle>
                <p className="category">Total savings for monthly</p>
              </CardHeader>
              <CardBody>
              {monthsNeeded !== null && (
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Month</th>
                        <th>Monthly Deposit</th>
                        {renderMonthlyProfitColumn()}
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
