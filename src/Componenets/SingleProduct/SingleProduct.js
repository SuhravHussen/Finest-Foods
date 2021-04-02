import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './singleProduct.css'
const SingleProduct = ({data}) => {
   const {name , price , imageUrl, _id}=data;
   
   const history = useHistory()
   const handleCheckout=()=>{
     history.push('/checkout/'+_id)
   } 
    return (
        <div className="single-product">
          <Card style={{ width: '19rem' }}>
  <Card.Img variant="top" className="pd-image" src={imageUrl} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <h5>Price: {price}</h5>
    <Button onClick={handleCheckout} variant="success">Check Out</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default SingleProduct;