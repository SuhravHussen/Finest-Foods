import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { userContext } from '../../App';

const Orders = () => {
    const [userInfo] = useContext(userContext)
    const [orders, setOrders] = useState([])
    useEffect(()=>{
     fetch('https://lychee-custard-92763.herokuapp.com/orders?email='+userInfo.email)
     .then(res=>res.json())
     .then(data=>setOrders(data))

    },[])
    

    

    return (
        <div>
            <h1>Your Orders</h1>
            <div>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Product Name</th>
      <th> Price</th>
      <th>Weight</th>
      <th>email</th>
      <th>Placed Time</th>
    </tr>
  </thead>
  <tbody>
   {
       orders.map((order)=>{
        return  (  <tr>
            <td>{order.name}</td>
            <td>{order.price}</td>
            <td>{order.weight}</td>
            <td>{order.email}</td>
            <td>{order.date}</td>
          </tr>)
       })
   }
    </tbody>
</Table>
            </div>
        </div>
    );
};

export default Orders;