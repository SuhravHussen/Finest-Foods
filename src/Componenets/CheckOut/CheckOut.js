import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router";
import { userContext } from "../../App";
import './checkout.css'
const CheckOut = () => {
  const [orderInfo, setOrderInfo] = useState({});
  const [userInfo] = useContext(userContext)
  const { id } = useParams();
  
  useEffect(()=>{
    fetch(`https://lychee-custard-92763.herokuapp.com/singleProduct/${id}`)
    .then((res) => res.json())
    .then((data) =>
      setOrderInfo({
        name: data.name,
        price: data.price,
        weight: data.weight,
      })
    );
  },[])
  
 const placeOrder = ()=>{
    const orderData = {
        name: orderInfo.name,
        price: orderInfo.price,
        weight: orderInfo.weight,
        email: userInfo.email,
        date: new Date().toString(),
      }
     const url = `https://lychee-custard-92763.herokuapp.com/addOrder`
     fetch(url,{
       method:'POST',
       headers:{
         'content-type':'application/json'
       },
       body:JSON.stringify(orderData)
     }) 
     .then(res=>alert('order placed successfully'));
 }

  return (
    <div>
      <h1>Check Out Your Order </h1>
      <div className="checkout-table">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>weight</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{orderInfo.name}</td>
              <td>1</td>
              <td>{orderInfo.weight}</td>
              <td>{orderInfo.price}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <button onClick={placeOrder} className="checkOut-btn">Check Out</button>
    </div>
  );
};

export default CheckOut;
