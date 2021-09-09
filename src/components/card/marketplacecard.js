import React from 'react';
import CardComponent from './cardcomponent';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container} from '@material-ui/core'
import folder from '../../assets/folder.svg'
import server from '../../assets/server.svg'
import security from '../../assets/security.svg'

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(2, 4),
    },
}))

const WrappedApp = () => {

    const classes = useStyles();

  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
    <Grid container spacing={2} alignItems="stretch">
    <Grid item xs={12} sm={4}>
    <CardComponent description={"Description here"} title={"Title 1"} svg={folder}/>
    </Grid>
    <Grid item xs={12} sm={4}>
    <CardComponent description={"Description here"} title={"Title 2"} svg={server}/>
    </Grid>
    <Grid item xs={12} sm={4}>
    <CardComponent description={"Description here"} title={"Title 3"} svg={security}/>
    </Grid>
    </Grid>
    </Container>
  
  );
};

export default WrappedApp;