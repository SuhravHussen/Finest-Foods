import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Header from '../Header/Header';
import SingleProduct from '../SingleProduct/SingleProduct';
import'./home.css'

const Home = () => {
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        fetch("https://lychee-custard-92763.herokuapp.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[products])


    return (
        <div>
           { 
    products.length===0 &&  <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>


            }
            <div className="products-container">
            {
                products.map(pd=><SingleProduct data={pd}></SingleProduct>)
            }
            </div>
        </div>
    );
};

export default Home;