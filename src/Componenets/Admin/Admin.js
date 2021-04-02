import React from "react";
import "./admin.css";

import AddProduct from "../AddProduct/AddProduct";
import EditProduct from "../EditProduct/EditProduct";
import Header from "../Header/Header";

import Sidebar from "../SideBar/Sidebar";
import Switch from "react-bootstrap/esm/Switch";


const Admin = () => {

  return (
   <div className="manage-container">
   <AddProduct></AddProduct>
   </div>
  );
};

export default Admin;
