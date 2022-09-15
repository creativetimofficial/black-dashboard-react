import { LABELS } from 'config/i18n/dashboard/eng_label';
import React, { useEffect, useState } from 'react'
import ReactSelect from 'react-select';

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
} from "reactstrap";
import { requestGET } from 'services/api-service';
import { CUSTOMER } from 'services/endpoints';
import { USERS_LABELS } from './i18n/gujarati';

export default function CustomerTable({ showTitle }) {
    const [customers, setCustomers] = useState(null)
    useEffect(() => {
        requestGET(CUSTOMER.GET_ALL, null, {},).then(data => {
            setCustomers(data)
        })
    }, [])
    return (
        <div>
            <Card>
                {
                    showTitle && <CardHeader>
                        <CardTitle tag="h4">{LABELS.recentOrderTable.title}</CardTitle>
                    </CardHeader>
                }
                <CardHeader>
                    <ReactSelect
                        options={customers?.map(item => ({ label: item.firstName + " " + item.lastName, value: item.id }))}
                    />
                </CardHeader>
                <CardBody>
                    <Table className="tablesorter" responsive>
                        <thead className="text-primary">
                            <tr>
                                {
                                    Object.values(USERS_LABELS.TABLE.COLUMNS).map(colName => <th className={colName === USERS_LABELS.TABLE.COLUMNS.INDEX ? "text-center" : ""}>{colName}</th>)
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers?.map(({ firstName, lastName, mobileNumber }, index) => <tr key={index}>

                                    <td className="text-center">{index}</td>
                                    <td >{firstName}</td>
                                    <td >{lastName}</td>
                                    <td>{mobileNumber}</td>
                                    <td>{mobileNumber}</td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    )
}
