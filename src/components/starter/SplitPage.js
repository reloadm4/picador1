import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import saas from '../../assets/saas.png'
import marketplace from '../../assets/marketplace.png'
import '../../css/screensplit.css'
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  btns:{
    '& > *': {
    margin: theme.spacing(1),
    width: '200px',
    background: '#000000',
    color: '#ffffff',
  },
    marginTop: "40px"
}
  
}));

const SplitPage = () => {
  const classes = useStyles();

  const checked = true

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grow in={checked}>
          <div className="split left">
          <div className="centered">
          <img src={marketplace} alt="Avatar man"/>
          <div>
       <Link to="/marketplace/home" style={{textDecoration: 'none'}} className={classes.btns}>
          <Button variant="contained" style={{ borderRadius: 25 }}>Marketplace</Button>
      </Link>  
      </div>
      </div>
    </div>
        </Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
            <div className="split right">
              <div className="centered">
                <img src={saas} alt="Avatar man" />
                <div>
                   <Link to="/saas/home" style={{textDecoration: 'none'}} className={classes.btns}>
                      <Button variant="contained" style={{ borderRadius: 25 }}>SaaS</Button>
                  </Link>  
                </div>
              </div>
            </div>
        </Grow>
      </div>
    </div>
  );
}

export default SplitPage;