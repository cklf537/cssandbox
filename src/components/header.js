import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontSize: "2rem",
        fontWeight: 400,
        color: "#264653",
        textAlign: "center",
        [theme.breakpoints.down('sm')]:{
            fontSize: "1rem"
        }
    },
    headerBg:{
        backgroundColor: "#EED38E",
        borderBottom: "solid 1px #DCA721"
    }
    
}));

const RwhHeader = ({ props }) => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.headerBg} elevation={0}> 
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Remote Work House.
          </Typography>
            <Avatar>H</Avatar>
            </Toolbar>
        </AppBar>
    );
}

export default RwhHeader;