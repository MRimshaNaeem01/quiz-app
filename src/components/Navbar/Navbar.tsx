'use client'
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CustomButton from '../CustomButton/CustomButton';
import Logo from '../../public/images/techniTestLogo.png';
import Image from 'next/image';


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Categories', href: '/category' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <div>
      <AppBar position="static" className={`p-5 bg-primary-blue `}>
        <Toolbar className="flex justify-between">
          <div>
            <Image
              src={Logo}
              alt="Welcome Banner"
            />
          </div>
          <div className={`hidden md:flex space-x-20`}>
            {menuItems.map((item) => (
              <Link key={item.text} href={item.href}>
                {item.text}
              </Link>
            ))}
          </div>
          <div className={`items-center	hidden md:flex space-x-4`}>
            <CustomButton text="Verify Certificate" />
            <CustomButton text="Verify Badge" />
          <Link href="/login"><span>Login</span></Link> 
            <NotificationsIcon />
          </div>
          <div className="md:hidden">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List className="w-48">
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={toggleDrawer}>
              <ListItemText>
                <Link href={item.href}>
                  {item.text}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
