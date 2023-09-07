import React, { useEffect, useState } from "react";
import axios from "axios";


// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components


function Dashboard(props) {

  let urlBuy = 'https://api.paydece.io/PayDeceAPI/api/buyOrder/filter';
  let urlSell = 'https://api.paydece.io/PayDeceAPI/api/sellOrder/filter';
  let data = {search:"",propertyToSortBy:"fiatPrice",sortOrder:1,pageNumber:1,pageSize:999,cryptoId:null,cryptoGroupId:null,fiatCoinId:null,statuses:[1],blockchainId:null,communityId:null}
  let urlBuyer = 'https://app.paydece.io/createBuy/'
  let urlSeller = 'https://app.paydece.io/create/'

  const [buyOrders, setBuyOrders] = useState([]);
  const [sellOrders, setSellOrders] = useState([]);


  useEffect(() => {
    axios.post(urlBuy, data).then((res) => {
      setBuyOrders(res.data.data.items);
    })

    axios.post(urlSell, data).then((res) => {
      setSellOrders(res.data.data.items);
    })
  });

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h1">Core P2P</CardTitle>
              </CardHeader>
              <CardBody>
                <h2 style={{color:"red"}}>Sell orders</h2>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Advertisers</th>
                      <th>Price</th>
                      <th>Payment</th>
                      <th>Limits</th>
                      <th>Available</th>
                      <th>Blockchain</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buyOrders.map(item=> 
                      <tr>
                        <td>{item.buyer.wallet}</td>
                        <td>{item.fiatPrice} {item.fiatCoin.symbol}</td>
                        <td>{item.paymentMethods}</td>
                        <td>{item.fromAmountRange.toFixed()} {item.fiatCoin.symbol} - {item.toAmountRange.toFixed()} {item.fiatCoin.symbol}</td>
                        <td>{item.amount.toFixed()} {item.crypto.symbol}</td>
                        <td>{item.crypto.blockchain.description}</td>
                        <td><a target="_blank" rel="noreferrer" href={urlBuyer + item.hash}><Button color="danger">Sell</Button></a></td>
                      </tr>
                    )}  
                  </tbody>
                </Table>
              </CardBody>
              <CardBody>
                <h2 style={{color:"Green"}}>Sell orders</h2>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Advertisers</th>
                      <th>Price</th>
                      <th>Payment</th>
                      <th>Limits</th>
                      <th>Available</th>
                      <th>Blockchain</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sellOrders.map(item=> 
                      <tr>
                        <td>{item.seller.wallet}</td>
                        <td>{item.fiatPrice} {item.fiatCoin.symbol}</td>
                        <td>{item.paymentMethods}</td>
                        <td>{item.fromAmountRange.toFixed()} {item.fiatCoin.symbol} - {item.toAmountRange.toFixed()} {item.fiatCoin.symbol}</td>
                        <td>{item.amount.toFixed()} {item.crypto.symbol}</td>
                        <td>{item.crypto.blockchain.description}</td>
                        <td><a target="_blank" rel="noreferrer" href={urlSeller + item.hash}><Button color="success">Buy</Button></a></td>
                      </tr>
                    )}  
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

export default Dashboard;
