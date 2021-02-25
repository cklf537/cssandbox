import React, { Component } from "react";
import MediaCard from "./card";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

class Content extends Component {
    

    render() {
        const classes = this.props;
        return (
            <Grid container className={classes.root} spacing={2}>
                {[0, 1, 2].map((value) => (
                    <Grid key={value} item>
                        <MediaCard />
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default withStyles(useStyles)(Content);