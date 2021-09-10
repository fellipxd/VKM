import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';

const usestyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '2.3rem',
  },
}));

const NavBar = ({ getGlobalData }) => {
  const classes = usestyles();

  return (
    <AppBar position='static'>
      <Toolbar>
       
        <Typography variant='h6' className={classes.title}>
          Covid Tracker Application
        </Typography>

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;