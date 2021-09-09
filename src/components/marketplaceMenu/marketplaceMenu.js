import React, {useState} from 'react';
import clsx from 'clsx';
//import {Switch , FormControlLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FeedbackIcon from '@material-ui/icons/Feedback';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpIcon from '@material-ui/icons/Help';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { createTheme, ThemeProvider} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import GroupIcon from '@material-ui/icons/Group';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import {Divider} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

  },
  // appBarDark: {
  //   zIndex: theme.zIndex.drawer + 1,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   background: '#fdeada'
  // },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    color: '#ffffff'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

// const themeObject = {
//   palette: {
//     type: 'light',
//   }
// }

//console.log(themeObject)

// const useDarkMode = () => {
//   const [theme, setTheme] = useState(themeObject)

//   const {palette: { type } } = theme

//   const toggleDarkMode = () => {
//     const updatedTheme = {
//       ...theme,
//       palette: {
//         ...theme.palette,
//         type: type === 'light' ? 'dark' : 'light',
//       }
//     }
//     setTheme(updatedTheme)
//   }
//   return [theme, toggleDarkMode]
// }


export default function MarketPlace(props) {

  //console.log(props.themeConfig.palette.type)

//const [theme, toggleDarkMode] = useDarkMode(themeObject)

 // const toggleDarkMode = useDarkMode(themeObject)

//const themeConfig = createTheme(theme)

  const classes = useStyles();
  //const theme = useTheme();
  const [open, setOpen] = useState(false);
  //const [subHeading, setSubHeading] = useState(false);

  //Show all
  const [showall, setShowAll] = useState(false);
  const [usersMenu, setUsersMenu] = useState(false);
  const [dataservicesMenu, setDataServicesMenu] = useState(false);
  const [marketMenu, setMarketMenu] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleShowAll = () => {
    setShowAll(!showall);
  };  

  const handleUsers = () => {
    setUsersMenu(!usersMenu);
  };  

  const handledataservices = () => {
    setDataServicesMenu(!dataservicesMenu)
  }

  const handlemarketmenu = () => {
    setMarketMenu(!marketMenu)
  }

  

// console.log(props.themeConfig)

const modeData = localStorage.getItem('obj')
const  mode = JSON.parse(modeData)
console.log("Local Storage mode",mode)

// console.log(mode)

// if(mode === props.themeConfig){
//   console.log(true)
// }else{
//   console.log(false)
// }

//console.log("Props",props.theme)

const themeConfig = createTheme(mode)
console.log(themeConfig)
const bg = themeConfig.palette.type

const styles = {
  textDecoration: 'none',
  color: `${bg === 'light' ? 'black' : 'white'}`
}

  return (
    <ThemeProvider theme={themeConfig}>
  <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color="default"
       style={{background: `${bg === 'light' ? '#984807' : '#CC6600'}`}}
      >

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
          <Link to="/marketplace/home" style={{textDecoration: 'none', color: 'white'}}>MARKETPLACE</Link>
          </Typography>
          {/* <FormControlLabel control={<Switch onClick={toggleDarkMode} color="default"/> } /> */}
          <IconButton color="inherit">
          <Link to="/marketplace/notifications" style={{textDecoration: 'none', color:'white'}}><NotificationsIcon /></Link>
          </IconButton>
          <IconButton color="inherit" >
          <Link to="/marketplace/customersupport" style={{textDecoration: 'none', color:'white'}}>  <HelpIcon /></Link>
          </IconButton>
          <IconButton color="inherit" >
          <Link to="/marketplace/feedback" style={{textDecoration: 'none', color:'white'}}><FeedbackIcon /></Link>
          </IconButton>
          <IconButton color="inherit" >
          <Link to="/marketplace/user" style={{textDecoration: 'none', color:'white'}}><AccountCircleIcon /></Link>
          </IconButton>
        
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>Athena
            {/* {this.props.themeConfig.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
          </IconButton>
        </div>
        
        {/***********  Client Enterprise ****************/}
        <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      style={{display: 'flex', flexDirection: 'column'}}
     
      className={classes.root}
    >
    {/***********  Home ****************/}
     
     <Link to="/marketplace/home" style={styles}>
        <ListItem button>
        <ListItemIcon>
         <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      </Link>
    {/***********  Subscribe ****************/}
      <Link to="/marketplace/subscribe" style={styles}>
      <ListItem button>
        <ListItemIcon>
         <CardMembershipIcon />
        </ListItemIcon>
        <ListItemText primary="Subscribe" />
      </ListItem>
      </Link>
      <Collapse in={showall} timeout="auto" unmountOnExit>
    {/***********  Users ****************/}
     
      <ListItem button onClick={handleUsers}>
        <ListItemIcon>
          <GroupIcon/>
        </ListItemIcon>
        <Link to="/marketplace/users" style={styles}> <ListItemText primary="Users" /></Link>
        {usersMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
     
      <Collapse in={usersMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
          <Link to="/marketplace/users/active" style={styles}> <ListItemText primary="Active" /></Link>
          </ListItem>
          <ListItem button className={classes.nested}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
          <Link to="/marketplace/users/inactive" style={styles}> <ListItemText primary="Inactive" /></Link>
          </ListItem>
          <ListItem button className={classes.nested}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
          <Link to="/marketplace/users/guests" style={styles}> <ListItemText primary="Guests" /></Link>
          </ListItem>
          <ListItem button className={classes.nested}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
          <Link to="/marketplace/users/deleted" style={styles}> <ListItemText primary="Deleted" /></Link>
          </ListItem>
        </List>
      </Collapse>
    {/*********** Data Services ****************/}
      <ListItem button onClick={handledataservices}>
        <ListItemIcon>
          <DataUsageIcon/>
        </ListItemIcon>
        <Link to="/marketplace/dataservices" style={styles}><ListItemText primary="Data Services" /></Link>
        {dataservicesMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={dataservicesMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
          <Link to="/marketplace/dataservices/nations" style={styles}> <ListItemText primary="Nations" /></Link>
          </ListItem>
          <ListItem button className={classes.nested}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
          <Link to="/marketplace/dataservices/industries" style={styles}> <ListItemText primary="Industries" /></Link>
          </ListItem>
          <ListItem button className={classes.nested}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
          <Link to="/marketplace/dataservices/behaviours" style={styles}> <ListItemText primary="Behaviours" /></Link>
          </ListItem>
          <ListItem button className={classes.nested}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
          <Link to="/marketplace/dataservices/trends" style={styles}> <ListItemText primary="Trends" /></Link>
          </ListItem>
        </List>
      </Collapse>
          {/*********** Markets ****************/}
          <ListItem button onClick={handlemarketmenu}>
        <ListItemIcon>
          <EqualizerIcon/>
        </ListItemIcon>
        <Link to="/marketplace/markets" style={styles}><ListItemText primary="Markets" /></Link>
        {marketMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={marketMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
          <Link to="/marketplace/markets/nations" style={styles}> <ListItemText primary="Nations" /></Link>
          </ListItem>
          <ListItem button className={classes.nested}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
          <Link to="/marketplace/markets/industries" style={styles}> <ListItemText primary="Industries" /></Link>
          </ListItem>
          <ListItem button className={classes.nested}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
          <Link to="/marketplace/markets/behaviours" style={styles}> <ListItemText primary="Behaviours" /></Link>
          </ListItem>
          <ListItem button className={classes.nested}>
          <ListItemIcon>
          <ArrowRightIcon/>
        </ListItemIcon>
          <Link to="/marketplace/markets/trends" style={styles}> <ListItemText primary="Trends" /></Link>
          </ListItem>
        </List>
      </Collapse>
    {/***********  Ecosystems ****************/}
      <ListItem button>
        <ListItemIcon>
         <SettingsSystemDaydreamIcon />
        </ListItemIcon>
        <Link to="/marketplace/ecosystems" style={styles}><ListItemText primary="Ecosystems" /></Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
        <EmojiPeopleIcon/>
        </ListItemIcon>
        <Link to="/marketplace/admin" style={styles}><ListItemText primary="Admin" /></Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
         <ReceiptIcon />
        </ListItemIcon>
        <Link to="/marketplace/billing" style={styles}><ListItemText primary="Billing" /></Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
        <SettingsApplicationsIcon/>
        </ListItemIcon>
        <Link to="/marketplace/servicesupport" style={styles}><ListItemText primary="Service Support" /></Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
        <HelpIcon/>
        </ListItemIcon>
        <Link to="/marketplace/help" style={styles}><ListItemText primary="Help" /></Link>
      </ListItem>

      </Collapse> 
   <Divider />
<ListItem button onClick={handleShowAll}>
<ListItemIcon>
  {showall ?  <ExpandLess /> :  <ExpandMore />}
  </ListItemIcon>
  <ListItemText primary={showall ? 'Show Pinned' : 'Show All' } />
</ListItem> 
    </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Typography paragraph>
         MARKETPLACE
        </Typography> */}
        {props.children}
       
      </main>
    </div>
    </ThemeProvider>
  
  );
}