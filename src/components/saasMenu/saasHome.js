import React, {useState} from 'react';
import SaasMenu from './saasMenu';
import { Grid , InputLabel} from '@material-ui/core'
import {Switch , FormControlLabel} from '@material-ui/core';

let modeData = null
let  mode = null
//console.log("Local Storage mode",mode)
let themeObject = null

if(localStorage.getItem('obj') === null){
    themeObject = {
        palette: {
          type: 'light',
        }
      }
}else {
    //console.log("Home",mode)
    modeData = localStorage.getItem('obj')
    mode = JSON.parse(modeData)
    themeObject = {
        palette: {
          type: mode.palette.type,
        }
      }
}

// const themeObject = {
//     palette: {
//       type: mode.palette.type,
//     }
//   }
  
//console.log("themeObj", themeObject)
  
  const useDarkMode = () => {
    const [theme, setTheme] = useState(themeObject)
  
    const {palette: { type } } = theme
  
    const toggleDarkMode = () => {
      const updatedTheme = {
        ...theme,
        palette: {
          ...theme.palette,
          type: type === 'light' ? 'dark' : 'light',
        }
      }
      setTheme(updatedTheme)
    }
    return [theme, toggleDarkMode]
  }

const SaasHome = () => {
      
    const [theme, toggleDarkMode] = useDarkMode(themeObject)

    // const toggleDarkMode = useDarkMode(themeObject)
    console.log("theme var",theme)
   
//    const themeConfig = createTheme(theme)

//    console.log(themeConfig)

   const obj = theme
   localStorage.setItem('obj', JSON.stringify(obj))

//    const modeData = localStorage.getItem('obj')
//    const  mode = JSON.parse(modeData)
//   // console.log(mode.mode.palette.type)

    return (
        <SaasMenu>
            <Grid item xs={12} align="right">
            <InputLabel children="Light / Dark Mode"/>
            <FormControlLabel control={<Switch onClick={toggleDarkMode} color="default"/> } />
            </Grid>
            <h1>Saas HomePage</h1>
        </SaasMenu>
    )
}

export default SaasHome;