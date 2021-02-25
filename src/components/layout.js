import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import RwhHeader from "./header";
import Content from './content';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

const RWHLayout = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <RwhHeader props={classes} />
                </Grid>
                <Hidden smUp>
                    <Grid item xs={12}>
                        <Paper elevation={0} className={classes.paper} square>
                        <Content />
                        </Paper>
                    </Grid>
                </Hidden>
                <Hidden smDown>
                    <Grid item xs={3}>
                        <Paper elevation={0} className={classes.paper} square>Left Navigation</Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper elevation={0} className={classes.paper} square>
                            <Content />
                        </Paper>
                    </Grid>
                </Hidden>
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.paper} square>Footer</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default RWHLayout;