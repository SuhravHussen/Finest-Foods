import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../SideBar/Sidebar';
import img from '../../images/Group 33150.png'
import './editproduct.css'
const EditProduct = () => {

    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        fetch("https://lychee-custard-92763.herokuapp.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    const handleDelete =(id)=>{
      
      fetch(`https://lychee-custard-92763.herokuapp.com/delete/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json()) 
      .then(res => console.log('success'))
        
    }


    return (
     
          <div className="admin-container">
         <Sidebar></Sidebar>
         <div className="table">
         <Table striped bordered hover>
  <thead>
    <tr>
      <th>Product  Name</th>
      <th>weight</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
     
     {
         products.map((data)=>{
            

       return  (  <tr>
            <td>{data.name}</td>
            <td>{data.weight}</td>
            <td>{data.price}</td>
            <td><img className="delete" onClick={()=>handleDelete(data._id)} src={img} alt=""/></td>
          </tr>)

        
           
         })
     }
    
  </tbody>
</Table>
         </div>
        </div>
    );
};

export default EditProduct;<h1>Edit </h1>