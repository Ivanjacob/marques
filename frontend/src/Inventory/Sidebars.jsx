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
              
              <MenuItem component={<Link to="/inventory" />} icon={<DashboardIcon />}>Dashboard</MenuItem>
              <MenuItem component={<Link to="/inventory/add" />} icon={<ShoppingCartIcon />}>Rice Stock</MenuItem>
              <MenuItem component={<Link to="/inventory" />} icon={<PersonPinIcon />}>Inventory Reports</MenuItem>
              <MenuItem component={<Link to="/inventory/products" />} icon={<CategoryIcon />}>Products</MenuItem>
              <MenuItem icon={<InventoryIcon />}>Imprt Data</MenuItem>
              <MenuItem icon={<ShowChartIcon />}>Farmer's Stock</MenuItem>
              <MenuItem icon={<PeopleAltIcon />}>Export Data</MenuItem>
              <MenuItem component={<Link to="/inventory" />} icon={<PeopleIcon />}>Users</MenuItem>
              <MenuItem icon={<AccountCircleIcon />}>Notifications</MenuItem>
              <MenuItem component={<Link to="/inventory" />} icon={<PeopleAltIcon />}>Search</MenuItem>
              <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
            </Menu>
          </Sidebar>
        </div>
    );
}

export default Sidebars