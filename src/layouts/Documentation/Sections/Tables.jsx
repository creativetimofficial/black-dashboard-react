import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { Table } from "reactstrap";

const codeSimpleExample = `<Table responsive>
  <thead className=" text-primary">
    <th>
      Name
    </th>
    <th>
      Country
    </th>
    <th>
      City
    </th>
    <th className="text-right">
      Salary
    </th>
  </thead>
  <tbody>
    <tr>
      <td>
        Dakota Rice
      </td>
      <td>
        Niger
      </td>
      <td>
        Oud-Turnhout
      </td>
      <td className="text-right">
        $36,738
      </td>
    </tr>
    <tr>
      <td>
        Minerva Hooper
      </td>
      <td>
        Curaçao
      </td>
      <td>
        Sinaai-Waas
      </td>
      <td className="text-right">
        $23,789
      </td>
    </tr>
    <tr>
      <td>
        Sage Rodriguez
      </td>
      <td>
        Netherlands
      </td>
      <td>
        Baileux
      </td>
      <td className="text-right">
        $56,142
      </td>
    </tr>
    <tr>
      <td>
        Philip Chaney
      </td>
      <td>
        Korea, South
      </td>
      <td>
        Overland Park
      </td>
      <td className="text-right">
        $38,735
      </td>
    </tr>
    <tr>
      <td>
        Doris Greene
      </td>
      <td>
        Malawi
      </td>
      <td>
        Feldkirchen in Kärnten
      </td>
      <td className="text-right">
        $63,542
      </td>
    </tr>
    <tr>
      <td>
        Mason Porter
      </td>
      <td>
        Chile
      </td>
      <td>
        Gloucester
      </td>
      <td className="text-right">
        $78,615
      </td>
    </tr>
    <tr>
      <td>
        Jon Porter
      </td>
      <td>
        Portugal
      </td>
      <td>
        Gloucester
      </td>
      <td className="text-right">
        $98,615
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
        <h3>Simple Table</h3>
        <div className="bd-example" data-example-id="">
          <Table responsive>
            <thead className=" text-primary">
              <th>Name</th>
              <th>Country</th>
              <th>City</th>
              <th className="text-right">Salary</th>
            </thead>
            <tbody>
              <tr>
                <td>Dakota Rice</td>
                <td>Niger</td>
                <td>Oud-Turnhout</td>
                <td className="text-right">$36,738</td>
              </tr>
              <tr>
                <td>Minerva Hooper</td>
                <td>Curaçao</td>
                <td>Sinaai-Waas</td>
                <td className="text-right">$23,789</td>
              </tr>
              <tr>
                <td>Sage Rodriguez</td>
                <td>Netherlands</td>
                <td>Baileux</td>
                <td className="text-right">$56,142</td>
              </tr>
              <tr>
                <td>Philip Chaney</td>
                <td>Korea, South</td>
                <td>Overland Park</td>
                <td className="text-right">$38,735</td>
              </tr>
              <tr>
                <td>Doris Greene</td>
                <td>Malawi</td>
                <td>Feldkirchen in Kärnten</td>
                <td className="text-right">$63,542</td>
              </tr>
              <tr>
                <td>Mason Porter</td>
                <td>Chile</td>
                <td>Gloucester</td>
                <td className="text-right">$78,615</td>
              </tr>
              <tr>
                <td>Jon Porter</td>
                <td>Portugal</td>
                <td>Gloucester</td>
                <td className="text-right">$98,615</td>
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
          </a>.
        </p>
      </div>
    );
  }
}

export default Tables;
