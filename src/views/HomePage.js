
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  CardTitle,
  Table,
} from "reactstrap";

// function UserProfile() {
//   return (
//     <>
//       <div className="content">
//         <Row>
//           <Col md="8">
//             <Card>
//               <CardHeader>
//                 <h5 className="title">Calculate</h5>
//               </CardHeader>
//               <CardBody>
//                 <Form>
//                   <Row>
//                     <Col className="pr-md-1" md="5">
//                       <FormGroup>
//                         <label>Initial Savings</label>
//                         <Input
//                           defaultValue="0"
//                           placeholder="Initial Savings"
//                           type="number"
//                         />
//                       </FormGroup>
//                     </Col>
//                     <Col className="px-md-1" md="3">
//                       <FormGroup>
//                         <label>Do you invest?</label>
//                         <Input
//                           defaultValue="michael23"
//                           placeholder="Yes or No"
//                           type="select"
//                         />
//                       </FormGroup>
//                     </Col>
//                     <Col className="pl-md-1" md="4">
//                       <FormGroup>
//                         <label htmlFor="exampleInputEmail1">
//                           Email address
//                         </label>
//                         <Input placeholder="mike@email.com" type="email" />
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className="pr-md-1" md="6">
//                       <FormGroup>
//                         <label>First Name</label>
//                         <Input
//                           defaultValue="Mike"
//                           placeholder="Company"
//                           type="text"
//                         />
//                       </FormGroup>
//                     </Col>
//                     <Col className="pl-md-1" md="6">
//                       <FormGroup>
//                         <label>Last Name</label>
//                         <Input
//                           defaultValue="Andrew"
//                           placeholder="Last Name"
//                           type="text"
//                         />
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="12">
//                       <FormGroup>
//                         <label>Address</label>
//                         <Input
//                           defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
//                           placeholder="Home Address"
//                           type="text"
//                         />
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className="pr-md-1" md="4">
//                       <FormGroup>
//                         <label>City</label>
//                         <Input
//                           defaultValue="Mike"
//                           placeholder="City"
//                           type="text"
//                         />
//                       </FormGroup>
//                     </Col>
//                     <Col className="px-md-1" md="4">
//                       <FormGroup>
//                         <label>Country</label>
//                         <Input
//                           defaultValue="Andrew"
//                           placeholder="Country"
//                           type="text"
//                         />
//                       </FormGroup>
//                     </Col>
//                     <Col className="pl-md-1" md="4">
//                       <FormGroup>
//                         <label>Postal Code</label>
//                         <Input placeholder="ZIP Code" type="number" />
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="8">
//                       <FormGroup>
//                         <label>About Me</label>
//                         <Input
//                           cols="80"
//                           defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
//                             that two seat Lambo."
//                           placeholder="Here can be your description"
//                           rows="4"
//                           type="textarea"
//                         />
//                       </FormGroup>
//                     </Col>
//                   </Row>
//                 </Form>
//               </CardBody>
//               <CardFooter>
//                 <Button className="btn-fill" color="primary" type="submit">
//                   Save
//                 </Button>
//               </CardFooter>
//             </Card>
//           </Col>
//           <Col md="4">
//             <Card className="card-user">
//               <CardBody>
//                 <CardText />
//                 <div className="author">
//                   <div className="block block-one" />
//                   <div className="block block-two" />
//                   <div className="block block-three" />
//                   <div className="block block-four" />
//                   <a href="#pablo" onClick={(e) => e.preventDefault()}>
//                     <img
//                       alt="..."
//                       className="avatar"
//                       src={require("assets/img/buffett.png")}
//                     />
//                     <h5 className="title">Warren Buffett</h5>
//                   </a>
//                   <p className="description">Investor</p>
//                 </div>
//                 <div className="card-description">
//                 "Never depend on a single income. Make an investment to create a second source."
//                 </div>
//               </CardBody>
//               <CardFooter>
//                 <div className="button-container">
//                   <Button className="btn-icon btn-round" color="facebook">
//                     <i className="fab fa-facebook" />
//                   </Button>
//                   <Button className="btn-icon btn-round" color="twitter">
//                     <i className="fab fa-twitter" />
//                   </Button>
//                   <Button className="btn-icon btn-round" color="google">
//                     <i className="fab fa-google-plus" />
//                   </Button>
//                 </div>
//               </CardFooter>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// }
function Tables() {
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
                  <Table className="tablesorter" responsive>
                    {/* <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-center">Salary</th>
                      </tr>
                    </thead> */}
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
                        />
                      </FormGroup>
                    </Col></td>
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
                          placeholder="Enter the target amount"
                          type="number"
                        />
                      </FormGroup>
                    </Col></td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Calculate
                </Button>
              </CardFooter>
              </Card>
            </Col>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Table on Plain Background</CardTitle>
                  <p className="category">Here is a subtitle for this table</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-center">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-center">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td className="text-center">$56,142</td>
                      </tr>
                      <tr>
                        <td>Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td className="text-center">$38,735</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-center">$78,615</td>
                      </tr>
                      <tr>
                        <td>Jon Porter</td>
                        <td>Portugal</td>
                        <td>Gloucester</td>
                        <td className="text-center">$98,615</td>
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
export default Tables;
