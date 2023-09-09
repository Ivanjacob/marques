import React from 'react';

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
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

function Sidebars() {
    const { collapseSidebar } = useProSidebar();

    return (
        <div>
          <Sidebar style={{ height: "100vh", position: "fixed" }}>
            <Menu>
              <MenuItem
                icon={<MenuOutlinedIcon />}
                onClick={() => {
                  collapseSidebar();
                }}
                style={{ textAlign: "center" }}
              >
                {" "}
                <h2>NRM</h2>
              </MenuItem>
              
              <MenuItem icon={<DashboardIcon />}>Dashboard</MenuItem>
              <MenuItem icon={<ShoppingCartIcon />}>Orders</MenuItem>
              <MenuItem icon={<PersonPinIcon />}>Customers</MenuItem>
              <MenuItem icon={<CategoryIcon />}>Products</MenuItem>
              <MenuItem icon={<InventoryIcon />}>Inventory</MenuItem>
              <MenuItem icon={<ShowChartIcon />}>Farmer's Stock</MenuItem>
              <MenuItem icon={<PeopleAltIcon />}>Farmers</MenuItem>
              <MenuItem icon={<PeopleIcon />}>Users</MenuItem>
              <MenuItem icon={<AccountCircleIcon />}>Profiles</MenuItem>
              <MenuItem icon={<PeopleAltIcon />}>Employees</MenuItem>
              <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
            </Menu>
          </Sidebar>
        </div>
    );
}

export default Sidebars