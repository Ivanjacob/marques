import React from 'react';

//import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Sidebar, Menu, MenuItem} from  'react-pro-sidebar';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

import { Link } from 'react-router-dom';

function Sidebars() {
    

    return (
        <div>
          <Sidebar style={{ height: "100vh", position: "fixed" }}>
            <Menu menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: "#f00",
                  color: "#b6c8d9",
                },
              },
            }}
            >
              <MenuItem
                icon={<MenuOutlinedIcon />}
                style={{ textAlign: "center" }}
              >
                {" "}
                <h2>NRM</h2>
              </MenuItem>
              
              <MenuItem component={<Link to="/" />} icon={<DashboardIcon />}>Dashboard</MenuItem>
              <MenuItem component={<Link to="/orders" />} icon={<ShoppingCartIcon />}>Orders</MenuItem>
              <MenuItem component={<Link to="/customers" />} icon={<PersonPinIcon />}>Customers</MenuItem>
              <MenuItem component={<Link to="/products" />} icon={<CategoryIcon />}>Products</MenuItem>
              <MenuItem icon={<InventoryIcon />}>Inventory</MenuItem>
              <MenuItem icon={<ShowChartIcon />}>Farmer's Stock</MenuItem>
              <MenuItem icon={<PeopleAltIcon />}>Farmers</MenuItem>
              <MenuItem component={<Link to="/users" />} icon={<PeopleIcon />}>Users</MenuItem>
              <MenuItem icon={<AccountCircleIcon />}>Profiles</MenuItem>
              <MenuItem component={<Link to="/employees" />} icon={<PeopleAltIcon />}>Employees</MenuItem>
              <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
            </Menu>
          </Sidebar>
        </div>
    );
}

export default Sidebars