import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(theme => ({
  
  card: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    borderTop: "4px solid #CC6600" ,
    textAlign: 'center',
  },
    media: {
    paddingTop: "56.25%"
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
  },
  featureList: {
    padding: theme.spacing(2),
  },
}));

const CardComponent = (props) => {
  const classes = useStyles();

  return (
          <div className={classes.card}>
          <CardMedia
       className={classes.media}
       image={props.svg}
       />
            <Typography variant="h5" component="h3" className={classes.title}>
             {props.title}
            </Typography>
            <Typography className={classes.featureList}>
             {props.description}
            </Typography>
            <Button style={{background: '#CC6600', marginBottom: '10px'}}>Start</Button>
          </div>
        );
};

export default CardComponent;