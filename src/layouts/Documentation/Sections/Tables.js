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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import { Button, Table } from "reactstrap";

const codeSimpleExample = `<Table responsive>
    <thead>
        <tr>
            <th className="text-center">#</th>
            <th>Name</th>
            <th>Job Position</th>
            <th className="text-center">Since</th>
            <th className="text-right">Salary</th>
            <th className="text-right">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-center">1</td>
            <td>Andrew Mike</td>
            <td>Develop</td>
            <td className="text-center">2013</td>
            <td className="text-right">€ 99,225</td>
            <td className="text-right">
                <Button className="btn-icon" color="info" size="sm">
                    <i className="fa fa-user"></i>
                </Button>{\` \`}
                <Button className="btn-icon" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{\` \`}
                <Button className="btn-icon" color="danger" size="sm">
                    <i className="fa fa-times" />
                </Button>
            </td>
        </tr>
        <tr>
            <td className="text-center">2</td>
            <td>Manuel Rico</td>
            <td>Manager</td>
            <td className="text-center">2012</td>
            <td className="text-right">€ 99,201</td>
            <td className="text-right">
                <Button className="btn-icon btn-round" color="info" size="sm">
                    <i className="fa fa-user"></i>
                </Button>{\` \`}
                <Button className="btn-icon btn-round" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{\` \`}
                <Button className="btn-icon btn-round" color="danger" size="sm">
                    <i className="fa fa-times" />
                </Button>{\` \`}
            </td>
        </tr>
        <tr>
            <td className="text-center">3</td>
            <td>Alex Mike</td>
            <td>Designer</td>
            <td className="text-center">2012</td>
            <td className="text-right">€ 99,201</td>
            <td className="text-right">
                <Button className="btn-icon btn-simple" color="info" size="sm">
                    <i className="fa fa-user"></i>
                </Button>{\` \`}
                <Button className="btn-icon btn-simple" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{\` \`}
                <Button className="btn-icon btn-simple" color="danger" size="sm">
                    <i className="fa fa-times" />
                </Button>{\` \`}
            </td>
        </tr>
    </tbody>
</Table>`;

class Tables extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Tables
        </h1>
        <p className="bd-lead">
          All Boostrap classes for tables are supported and improved.
        </p>
        <h2>Examples</h2>
        <h3>Simple Table with Actions</h3>
        <div className="bd-example" data-example-id="">
          <Table responsive>
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th>Name</th>
                <th>Job Position</th>
                <th className="text-center">Since</th>
                <th className="text-right">Salary</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td>Andrew Mike</td>
                <td>Develop</td>
                <td className="text-center">2013</td>
                <td className="text-right">€ 99,225</td>
                <td className="text-right">
                  <Button className="btn-icon" color="info" size="sm">
                    <i className="fa fa-user" />
                  </Button>
                  {` `}
                  <Button className="btn-icon" color="success" size="sm">
                    <i className="fa fa-edit" />
                  </Button>
                  {` `}
                  <Button className="btn-icon" color="danger" size="sm">
                    <i className="fa fa-times" />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="text-center">6</td>
                <td>Manuel Rico</td>
                <td>Manager</td>
                <td className="text-center">2012</td>
                <td className="text-right">€ 99,201</td>
                <td className="text-right">
                  <Button className="btn-icon btn-round" color="info" size="sm">
                    <i className="fa fa-user" />
                  </Button>
                  {` `}
                  <Button
                    className="btn-icon btn-round"
                    color="success"
                    size="sm"
                  >
                    <i className="fa fa-edit" />
                  </Button>
                  {` `}
                  <Button
                    className="btn-icon btn-round"
                    color="danger"
                    size="sm"
                  >
                    <i className="fa fa-times" />
                  </Button>
                  {` `}
                </td>
              </tr>
              <tr>
                <td className="text-center">3</td>
                <td>Alex Mike</td>
                <td>Designer</td>
                <td className="text-center">2012</td>
                <td className="text-right">€ 99,201</td>
                <td className="text-right">
                  <Button
                    className="btn-icon btn-simple"
                    color="info"
                    size="sm"
                  >
                    <i className="fa fa-user" />
                  </Button>
                  {` `}
                  <Button
                    className="btn-icon btn-simple"
                    color="success"
                    size="sm"
                  >
                    <i className="fa fa-edit" />
                  </Button>
                  {` `}
                  <Button
                    className="btn-icon btn-simple"
                    color="danger"
                    size="sm"
                  >
                    <i className="fa fa-times" />
                  </Button>
                  {` `}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSimpleExample}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          For tables we have used mostly HTML, there is the Table reactstrap
          tag, to write less. You can find out more about this component{" "}
          <a
            href="https://reactstrap.github.io/components/tables/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>Beside these tables, there are normal tables as well.</p>
      </div>
    );
  }
}

export default Tables;
