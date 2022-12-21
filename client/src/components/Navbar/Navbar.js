import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Typography, Toolbar, Avatar, Button} from '@material-ui/core';

import useStyles from './sytles';
import say from '../../images/say.jpg';

const Navbar = () => {
  const classes = useStyles();

  const user = null;

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h2" align="center">Say</Typography>
        <img className={classes.image} src={say} alt="icon" height="60" />
      </div>      
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
              <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
            </div>
          ) : (
            <Button variant="contained" color="primary">Sign In</Button>
          )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar