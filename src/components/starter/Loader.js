import React from 'react';
import Image from 'react-image-resizer'
import athena from '../../assets/athena.png';
import {Grid} from '@material-ui/core';
import risingAhead from '../../assets/risingahead.png';
import logo from '../../assets/logo.png'

const Loader = () => {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
    <Image
          img src={athena} 
          height={150}
          width={150}
    />

   <Grid style={{display: 'flex' , flexDirection: 'row'}}>
   <Image
          img src={logo} 
          height={30}
          width={30}
          style={{marginTop: '80px', padding: '5px'}}
    />
   <Image
          img src={risingAhead} 
          height={200}
          width={150}
    />
   </Grid>
    </Grid>

  );
}

export default Loader;
