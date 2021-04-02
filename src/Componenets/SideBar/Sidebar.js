import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
const Sidebar = () => {
    return (
        <div>
                <div className="side-bar" >
<ProSidebar toggled='true' width="200px" onToggle={()=>!false}  >
  <Menu iconShape="square">
    <MenuItem >Dashboard</MenuItem>
      <MenuItem><Link to="/addProduct"> Add Products</Link></MenuItem>
      <MenuItem><Link to="/editProduct">Edit Products</Link></MenuItem>
  </Menu>
</ProSidebar>;
    </div>
        </div>
    );
};

export default Sidebar;  