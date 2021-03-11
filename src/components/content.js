import React, { Component } from "react";
import MediaCard from "./card";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'red'
    },
    control: {
      padding: theme.spacing(2),
    },
    banner:{
        backgroundColor: '#ddd'
    }
  }));

class Content extends Component {
    state = {
        categorycards:[
            {
                type:"Remote Jobs",
                today: 24,
                total: 200
            },
            {
                type:"Posts",
                today: 3,
                total: 64
            },
            {
                type:"Tips & Trick(s)",
                today: 3,
                total: 3
            },          
        ]
    }

    render() {
        const classes = this.props;
        return (
            <Grid container className={classes.root} spacing={2} >
                {this.state.categorycards.map((value, index) => (
                    <Grid key={index} item >
                        <MediaCard props={value} />
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default withStyles(useStyles)(Content);