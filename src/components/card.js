import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    minWidth:210,

  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 100,
  },
  subCat:{
      display:'flex',
      flexDirection:'column',
  },
  subCatText:{
      paddingRight: "0.5rem",
  }
  
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const {type, today, total} = props.props
    console.log(props.props);
  return (
    <Card className={classes.root} elevation={0} variant="outlined">
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {type}
          </Typography>
          <div className={classes.subCat}>
          <Typography variant="subtitle1" color="textSecondary" className={classes.subCatText}>
            {"Today: "}{today}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.subCatText}>
            {"Total: "}{total}
          </Typography>
          </div>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
  );
}
