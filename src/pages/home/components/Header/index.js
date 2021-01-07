import React from 'react';
import Account from './Account';
import Notifications from './Notifications';
import WritePost from './WritePost';
// Imports Material Ui
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

// Styles
const useStyles = makeStyles(theme => ({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center',
    }
}))

function Header () {
    const classes = useStyles();


    return (
        <AppBar className={classes.appBar} position="fixed" color="inherit">
            <Toolbar>
               <img src="/images/logo.png" alt="logo" className={classes.img} />
                <div className={classes.grow} ></div>
                <div className={classes.userSection}>
                    <Box>
                      <WritePost />
                    </Box>
                    <Box ml={2}>
                      <Notifications />
                    </Box>
                    <Box ml={2}>
                      <Account />
                    </Box>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;