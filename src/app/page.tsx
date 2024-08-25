"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useRouter} from "next/navigation";



export default function ButtonAppBar() {
    const router = useRouter();

    const handleLoginClick = () => {
        setTimeout(() => {
            router.push('/login');  // Assuming '/' is your sign-in page route
        }, 100);
    }
    const handleRegisterClick = () => {
        setTimeout(() => {
            router.push('/register');  // Assuming '/' is your sign-in page route
        }, 100);
    }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Features
            </Typography>
              <Button onClick={handleLoginClick} color="inherit">Login</Button>
              <Button onClick={handleRegisterClick} color="inherit">Register</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
