/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

function Rtl() {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-right" sm="6">
                    <h5 className="card-category">مجموع الشحنات</h5>
                    <CardTitle tag="h2">أداء</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-left"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          حسابات
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          المشتريات
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          جلسات
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-right" lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">شحنات كاملة</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-primary" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="text-right" lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">المبيعات اليومية</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-info" />{" "}
                  3,500€
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="text-right" lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">المهام المكتملة</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 12,100K
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" lg="6" sm="6">
            <Card className="card-tasks text-left">
              <CardHeader className="text-right">
                <h6 className="title d-inline">تتبع</h6>{" "}
                <p className="card-category d-inline">اليوم</p>
                <UncontrolledDropdown className="float-left">
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    caret
                    color="link"
                    data-toggle="dropdown"
                    id="dropdownMenuLink"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink">
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      عمل
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      عمل آخر
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      شيء آخر هنا
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">مركز معالجة موقع محور</p>
                          <p className="text-muted">نص آخر هناالوثائق</p>
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip591536518"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip591536518"
                            placement="right"
                          >
                            مهمة تحرير
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">لامتثال GDPR</p>
                          <p className="text-muted">
                            الناتج المحلي الإجمالي هو نظام يتطلب من الشركات
                            حماية البيانات الشخصية والخصوصية لمواطني أوروبا
                            بالنسبة للمعاملات التي تتم داخل الدول الأعضاء في
                            الاتحاد الأوروبي.
                          </p>
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip36890049"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip36890049"
                            placement="right"
                          >
                            مهمة تحرير
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">القضاياالقضايا</p>
                          <p className="text-muted">
                            سيكونونقال 50٪ من جميع المستجيبين أنهم سيكونون أكثر
                            عرضة للتسوق في شركة
                          </p>
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip5456779"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip5456779"
                            placement="right"
                          >
                            مهمة تحرير
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">
                            تصدير الملفات التي تمت معالجتها
                          </p>
                          <p className="text-muted">
                            كما يبين التقرير أن المستهلكين لن يغفروا شركة بسهولة
                            بمجرد حدوث خرق يعرض بياناتهم الشخصية.
                          </p>
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip989428493"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip989428493"
                            placement="right"
                          >
                            مهمة تحرير
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">الوصول إلى عملية التصدير</p>
                          <p className="text-muted">
                            سياسة السيء إنطلاق في قبل, مساعدة والمانيا أخذ قد.
                            بل أما أمام ماشاء الشتاء،, تكاليف الإقتصادي بـ حين.
                            ٣٠ يتعلّق للإتحاد ولم, وتم هناك مدينة بتحدّي إذ, كان
                            بل عمل
                          </p>
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip169784793"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip169784793"
                            placement="right"
                          >
                            مهمة تحرير
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">الافراج عن v2.0.0</p>
                          <p className="text-muted">
                            عن رئيس طوكيو البولندي لمّ, مايو مرجع وباءت قبل هو,
                            تسمّى الطريق الإقتصادي ذات أن. لغات الإطلاق الفرنسية
                            دار ان, بين بتخصيص الساحة اقتصادية أم. و الآخ
                          </p>
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip554497871"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip554497871"
                            placement="right"
                          >
                            مهمة تحرير
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" sm="6">
            <Card>
              <CardHeader className="text-right">
                <CardTitle tag="h4">جدول بسيط</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>اسم</th>
                      <th>بلد</th>
                      <th>مدينة</th>
                      <th className="text-center">راتب</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>رايس داكوتا</td>
                      <td>النيجر</td>
                      <td>العود-تورنهاوت</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                    <tr>
                      <td>مينيرفا هوبر</td>
                      <td>كوراساو</td>
                      <td>Sinaai-واس</td>
                      <td className="text-center">$23,789</td>
                    </tr>
                    <tr>
                      <td>سيج رودريجيز</td>
                      <td>هولندا</td>
                      <td>بايلي</td>
                      <td className="text-center">$56,142</td>
                    </tr>
                    <tr>
                      <td>فيليب شانيه</td>
                      <td>كوريا، جنوب</td>
                      <td>اوفرلاند بارك</td>
                      <td className="text-center">$38,735</td>
                    </tr>
                    <tr>
                      <td>دوريس غرين</td>
                      <td>مالاوي</td>
                      <td>المنع</td>
                      <td className="text-center">$63,542</td>
                    </tr>
                    <tr>
                      <td>ميسون بورتر</td>
                      <td>تشيلي</td>
                      <td>غلوستر</td>
                      <td className="text-center">$78,615</td>
                    </tr>
                    <tr>
                      <td>جون بورتر</td>
                      <td>البرتغال</td>
                      <td>غلوستر</td>
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

export default Rtl;
