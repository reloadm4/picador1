import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import {Divider} from '@material-ui/core';
import StorageIcon from '@material-ui/icons/Storage';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faRecycle, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

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

// console.log(themeObject)

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


export default function SaasMenu(props) {

//  const [theme, toggleDarkMode] = useDarkMode(themeObject)

//  // const toggleDarkMode = useDarkMode(themeObject)

//   const themeConfig = createTheme(theme)

  const classes = useStyles();
  //const theme = useTheme();
  const [open, setOpen] = useState(false);
  //const [subHeading, setSubHeading] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


   //Show all
   const [showall, setShowAll] = useState(false);
   const [usersMenu, setUsersMenu] = useState(false);
   const [datalifecycleMenu, setDataLifecycle] = useState(false);
   const [dataManagementMenu, setDataManagementMenu] = useState(false);
   const [dataqualityMenu, setDataQualityMenu] = useState(false);
   const [decisionsupportMenu, setDecisionSupportMenu] = useState(false);
   const [datamonitizationMenu, setDataMonitizationMenu] = useState(false)
 
 
   const handleShowAll = () => {
     setShowAll(!showall);
   };  
 
   const handleUsers = () => {
     setUsersMenu(!usersMenu);
   };  
 
 
   const handleDataLifecycle = () => {
     setDataLifecycle(!datalifecycleMenu);
   };  
 
   const handleDataQuality = () => {
     setDataQualityMenu(!dataqualityMenu);
   };  
 
   const  handleDecisionSupport = () => {
     setDecisionSupportMenu(!decisionsupportMenu)
   }
 
   const handleDataMonitization = () => {
     setDataMonitizationMenu(!datamonitizationMenu)
   }
 
   const handleDataManagementMenu = () => {
     setDataManagementMenu(!dataManagementMenu)
   }
 
 
const modeData = localStorage.getItem('obj')
const  mode = JSON.parse(modeData)
console.log("Local Storage mode",mode)

// console.log(themeConfig)
// const bg = themeConfig.palette.type 

const themeConfig = createTheme(mode)
console.log(themeConfig)
const bg = themeConfig.palette.type


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
            <Link to="/saas/home" style={{textDecoration: 'none', color: 'white'}}>SAAS</Link>
          </Typography>
        
          <IconButton color="inherit">
          <Link to="/saas/notifications" style={{textDecoration: 'none', color:'white'}}><NotificationsIcon /></Link>
          </IconButton>
          <IconButton color="inherit" >
          <Link to="/saas/customersupport" style={{textDecoration: 'none', color:'white'}}>  <HelpIcon /></Link>
          </IconButton>
          <IconButton color="inherit" >
          <Link to="/saas/feedback" style={{textDecoration: 'none', color:'white'}}><FeedbackIcon /></Link>
          </IconButton>
          <IconButton color="inherit" >
          <Link to="/saas/user" style={{textDecoration: 'none', color:'white'}}><AccountCircleIcon /></Link>
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
            {themeConfig.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        
        {/***********  Client Enterprise ****************/}
        <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      style={{display: 'flex', flexDirection: 'column'}}
     
      className={classes.root}
    >
  <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      style={{display: 'flex', flexDirection: 'column'}}
     
      className={classes.root}
    >
    {/***********  Home ****************/}
      <ListItem button>
        <ListItemIcon>
         <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    {/***********  Subscribe ****************/}
      <ListItem button>
        <ListItemIcon>
         <CardMembershipIcon />
        </ListItemIcon>
        <ListItemText primary="Subscribe" />
      </ListItem>


      
      <Collapse in={showall} timeout="auto" unmountOnExit>
      <ListItem button onClick={handleUsers}>
        <ListItemIcon>
          <GroupIcon/>
        </ListItemIcon>
        <ListItemText primary="Users" />
        {usersMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={usersMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Active" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Inactive" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Guests" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Deleted" />
          </ListItem>
        </List>
      </Collapse>

        {/*********** Data Lifecycle ****************/}
        <ListItem button onClick={handleDataLifecycle}>
        <ListItemIcon>
          <FontAwesomeIcon icon={faRecycle} size="2x"/>
        </ListItemIcon>
        <ListItemText primary="Data Lifecycle" />
        {datalifecycleMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={datalifecycleMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Data Marts" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Data Audit" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Data Warehouse" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Data Archives" />
          </ListItem>
        </List>
      </Collapse>
          {/*********** Data Quality ****************/}
          <ListItem button onClick={handleDataQuality}>
        <ListItemIcon>
        <FontAwesomeIcon icon={faTachometerAlt} size="2x" />
        </ListItemIcon>
        <ListItemText primary="Data Quality" />
        {dataqualityMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={dataqualityMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Validity" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Reliability" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Accurac" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Digitization" />
          </ListItem>
        </List>
      </Collapse>

        {/*********** Master Data Management ****************/}
        <ListItem button onClick={handleDataManagementMenu}>
        <ListItemIcon>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText primary="Masterdata Management" />
        {dataManagementMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={dataManagementMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Metadata" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Data Directory" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Master Data" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Data Change" />
          </ListItem>
        </List>
      </Collapse>

        {/*********** Decision Support System ****************/}
        <ListItem button onClick={handleDecisionSupport}>
        <ListItemIcon>
          <FontAwesomeIcon icon={faInfoCircle} size="2x"/>
        </ListItemIcon>
        <ListItemText primary="Decision Support System" />
        {decisionsupportMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={decisionsupportMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Consumer" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Product" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Revenue" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Cost" />
          </ListItem>
        </List>
      </Collapse>

        {/*********** Data Monitiation ****************/}
        <ListItem button onClick={handleDataMonitization}>
        <ListItemIcon>
          {/* <FontAwesomeIcon icon={faCoffee} /> */}
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary="Data Monitization" />
        {datamonitizationMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={datamonitizationMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Behaviours" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="- Trends" />
          </ListItem>
        </List>
      </Collapse>
   {/***********  Ecosystems ****************/}
   <ListItem button>
        <ListItemIcon>
         <SettingsSystemDaydreamIcon />
        </ListItemIcon>
        <ListItemText primary="Ecosystems" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
        <EmojiPeopleIcon/>
        </ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
         <ReceiptIcon />
        </ListItemIcon>
        <ListItemText primary="Billing" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
        <SettingsApplicationsIcon/>
        </ListItemIcon>
        <ListItemText primary="Service Support" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
        <HelpIcon/>
        </ListItemIcon>
        <ListItemText primary="Help" />
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