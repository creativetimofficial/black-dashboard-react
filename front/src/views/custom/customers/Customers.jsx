import React from "react";
// reactstrap components
import {
    Card,
    CardHeader,
    Row,
} from "reactstrap";
import CustomerTable from "./CustomerTable";
function Customers(props) {
    return (
        <div className="content">
        <Row>
            <Card>
                <CardHeader>
                    <h3 className="title">Customers</h3>
                </CardHeader>
                <CustomerTable showTitle={false}/>
            </Card>
        </Row>
        </div>
    );
}

export default Customers;
