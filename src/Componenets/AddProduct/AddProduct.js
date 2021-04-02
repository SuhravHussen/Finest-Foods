import React, { useState } from 'react';
import Sidebar from '../SideBar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './addProduct.css'

const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl , setImageUrl] = useState(null)

    const onSubmit = data =>{
     const eventData = {
       name: data.name,
       imageUrl: imageUrl,
       price: data.price,
       weight: data.weight
     }
    const url = `https://lychee-custard-92763.herokuapp.com/addProduct`
    fetch(url,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(eventData)
    }) 
    .then(res=>console.log(res));
  
    };


    const handleImageUpload =(e)=>{
    const imageData = new FormData()
    imageData.set('key' , '3538107b1badcdc616bc92b313cfff36')
    imageData.append('image',e.target.files[0])
    
    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
       setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
    }



    return (
        <div className="admin-container">
         <Sidebar></Sidebar>
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
   
      <input name="name" defaultValue="" placeholder="name" ref={register} />
      <input name="price" defaultValue="" placeholder="price" ref={register} />
      <input name="weight" defaultValue="" ref={register} placeholder="wight" />
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
      
      <input type="submit" />
    </form>
        </div>
        </div>
    );
};

export default AddProduct;