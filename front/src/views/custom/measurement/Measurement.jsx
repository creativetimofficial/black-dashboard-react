import { LABELS } from "config/i18n/measurements/eng_label";
import React, { useEffect, useState } from "react";
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
  Col
} from "reactstrap";
import Select from 'react-select';
import { CUSTOMER } from "services/endpoints";
import { requestGET } from "services/api-service";

function Measurement({ language }) {
  const [user, setUser] = useState({ id: -1, first_name: "", last_name: "", mobile_number: "" })
  const [customers, setCustomers] = useState([]);
  // const [LABELS, setLabels] = useState(null);
  // useEffect(() => {
  //   if (language === 'gujarati') {
  //     import('../../../config/i18n/guj_label').then(data => {
  //       setLabels(data.LABELS)
  //     })
  //   }
  //   else {
  //     console.log("eng");
  //     import('../../../config/i18n/eng_label').then(data => {
  //       console.log(data.LABELS);
  //       setLabels(data.LABELS)
  //     })
  //   }
  // }, [])
  const onSelectCustomer = ({ label, value }) => {
    const user = customers.find(user => user._id === value);
    const userObj = {
      id: user.id,
      first_name: user.firstName,
      last_name: user.lastName,
      mobile_number: user.mobileNumber,
    }
    setUser(userObj)
  }
  useEffect(() => {
    requestGET(CUSTOMER.GET_ALL, null, {},).then(data => {
      setCustomers(data)
    })
  }, [])
  return (
    <>
      {LABELS && <div className="content">
        <Row>
          <Card>
            <CardHeader>
              <h3 className="title">Measurement</h3>
            </CardHeader>
            <CardBody>
              <Form>
                {/* Top Attributes */}
                <FormGroup>
                <Select
                  options={customers?.map(item => ({ label: item.firstName + " " + item.lastName, value: item._id }))}
                  onChange={onSelectCustomer}
                />
                </FormGroup>
                <Row>
                  <Col className="pr-md-1" md="3">
                    <FormGroup>
                      <label style={{ fontSize: '1rem' }}>{LABELS['first_name']}</label>
                      <Input
                        style={{ fontSize: '1rem' }}
                        name="first_name"
                        placeholder={LABELS['first_name']}
                        type="text"
                        value={user.first_name}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <label style={{ fontSize: '1rem' }}>{LABELS['last_name']}</label>
                      <Input
                        style={{ fontSize: '1rem' }}
                        name="last_name"
                        placeholder={LABELS['last_name']}
                        type="text"
                        value={user.last_name}
                      />
                    </FormGroup>
                  </Col>

                  <Col className="pr-md-1" md="5">
                    <FormGroup>
                      <label style={{ fontSize: '1rem' }}>{LABELS['mobile_number']}</label>
                      <Input
                        style={{ fontSize: '1rem' }}
                        name="mobile_number"
                        placeholder={LABELS['mobile_number']}
                        type="tel"
                        value={user.mobile_number}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <CardText>
                  <h3 className="title">Top</h3>
                  <Row>
                    <Col>
                      <FormGroup style={{ paddingLeft: '5px' }}>
                        <Input
                          defaultValue="1"
                          type="select"
                        >
                          <option value={"1"}>  SHIRT </option>
                          <option value={"2"}>  OPTION 2 </option>
                          <option value={"3"}>  OPTION 3 </option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col>
                      <Input
                        name="length"
                        placeholder={LABELS['total']}
                        type='number'
                      />
                    </Col>
                  </Row>

                </CardText>
                <Row style={{ margin: 0, padding: 0 }}>
                  {
                    Object.keys(LABELS['top_inputs']).map(key => <Col style={{ width: "10%", padding: 0 }}>
                      <FormGroup style={{ paddingLeft: '5px' }}>
                        <label style={{ fontSize: '1rem' }}>{LABELS['top_inputs'][key]}</label>
                        <Input
                          style={{ fontSize: '1rem' }}
                          name="length"
                          placeholder={LABELS['top_inputs'][key]}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    )
                  }
                </Row>
                <Row>
                  {
                    Object.keys(LABELS['top_checkboxes']).map(key => <Col md="2">
                      <FormGroup style={{ paddingLeft: '30px' }}>
                        <Input
                          type="checkbox"
                        />
                        <label style={{ fontSize: '1rem' }}>{LABELS['top_checkboxes'][key]}</label>
                      </FormGroup>
                    </Col>
                    )
                  }
                </Row>
                {/* Bottom Attributes */}
                <CardText>
                  <h3 className="title">Bottom</h3>
                  <Row>
                    <Col>
                      <FormGroup style={{ paddingLeft: '5px' }}>
                        <Input
                          defaultValue="1"
                          type="select"
                        >

                          <option value={"1"}>  PANT </option>
                          <option value={"2"}>  OPTION 2 </option>
                          <option value={"3"}>  OPTION 3 </option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col>
                      <Input
                        name="length"
                        placeholder={LABELS['total']}
                        type='number'
                      />
                    </Col>
                  </Row>
                </CardText>
                <Row style={{ margin: 0, padding: 0 }}>
                  {
                    Object.keys(LABELS['bottom_inputs']).map(key => <Col style={{ width: "10%", padding: 0 }}>
                      <FormGroup style={{ paddingLeft: '5px' }}>
                        <label style={{ fontSize: '1rem' }}>{LABELS['bottom_inputs'][key]}</label>
                        <Input
                          style={{ fontSize: '1rem' }}
                          name="length"
                          placeholder={LABELS['bottom_inputs'][key]}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    )
                  }
                </Row>
                <Row>
                  {
                    Object.keys(LABELS['top_checkboxes']).map(key => <Col md="4">
                      <FormGroup style={{ paddingLeft: '30px' }}>
                        <Input
                          type="checkbox"
                        />
                        <label style={{ fontSize: '1rem' }}>{LABELS['top_checkboxes'][key]}</label>
                      </FormGroup>
                    </Col>
                    )
                  }
                </Row>

              </Form>
            </CardBody>
            <CardFooter>
              <Button className="btn-fill" color="primary" type="submit">
                Save
              </Button>
            </CardFooter>
          </Card>
        </Row>
      </div>
      }
    </>
  );
}

export default Measurement;
