import React from 'react';
import '../../css/feedbackform.css'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import { inputFormElements } from './formElements'
import SaasMenu from '../saasMenu/saasMenu';
import InfoIcon from '@material-ui/icons/Info';
import { TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btns: {
        margin: '0px 5px'
    },
    colors: {
        color: '#984807'
    },
    textArea: {
        width: '100%'
    },
    
}))

export default function FeedbackFormMarket() {

//  console.log("bg", bg)

    const classes = useStyles();

  return (
    
    <SaasMenu>
      <h1>Send Feedback</h1>
        <Grid style={{display: 'flex'}}>
  
    <Grid style={{ padding: "20px 5px 0 5px" }}>
        <Card style={{ maxWidth: 1000, margin: "0 auto" , display: 'flex' , flexDirection: 'row'}}>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" >
              <InfoIcon/> If you need help, please contact support.
          </Typography>
          <br/>
            <form>
              <Typography variant="body2" align="left" gutterBottom>User Details : </Typography>
              <Grid container spacing={1}>
                {
                  inputFormElements.slice(0, 4).map(input => <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} className={classes.textField} />
                  </Grid>)
                }
              </Grid>
              <Typography variant="body2" align="left" gutterBottom>Experience : </Typography>
              <Grid container spacing={1}>
                {
                  inputFormElements.slice(4, 5).map(input => <Grid xs={input.xs} sm={input.sm} item>
                   <TextareaAutosize {...input} className={classes.textArea} style={{height: '200px', background: 'grey', color: 'white'}}/>
                  </Grid>)
                }
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} align="right">
                  <Button className={classes.btns} type="reset" variant="outlined" style={{color: '#984807'}}>Reset</Button>
                  <Button type="submit" variant="outlined" style={{color: '#984807'}} >Submit</Button>
                </Grid>
              </Grid>
            </form>

          </CardContent>
         
        </Card>
        
      </Grid>
     
        </Grid>
        </SaasMenu>

  );
}