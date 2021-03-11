import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'left',
        color: theme.palette.text.secondary,
        position: 'relative',
        width: '12rem',
        position: 'absolute',
        zIndex: 999999999,
        backgroundColor: '#ffffff',
        top:'0px'
    },
    title:{
        padding: theme.spacing(2),
    }
}));


const HamberguerMenu = () => {
    const classes = useStyle();
    return (
        <div flex layout="row">
            <Box className={classes.paper} height="100%" zIndex="999999999">
                <Paper  elevation={0} className={classes.title} square >
                    Remote Work House
                </Paper>
            </Box>
        </div>
    );
}

export default HamberguerMenu;