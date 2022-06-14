import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Home from "../pages/Home";
import Projects from "../pages/Projects/Projects";
import { Link as RouterLink, MemoryRouter } from "react-router-dom";
import logo from '../assets/logo.png'
import { Avatar } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const Header = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box>
      <AppBar
        position="static"
        style={{ backgroundColor: "var(--main-col)", color: "black", display:'flex',flexDirection:'row',alignItems:'center' }}
      >
      <Avatar sx={{ width: 64, height:40 ,margin:'0px 10px'}} src={logo} alt="" />
        
        
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{width:'inherit'}}
        >
          <Tab
            style={{ fontSize: "22px" }}
            label="Home"
            {...a11yProps(0)}
            component={RouterLink}
            to="/"
          />
          <Tab style={{ fontSize: "22px" }} label="About" {...a11yProps(1)}  component={RouterLink}
            to="/about" />
          <Tab
            style={{ fontSize: "22px" }}
            label="Projects"
            {...a11yProps(2)}
            component={RouterLink}
            to="/project"
          />
          <Tab
            style={{ fontSize: "22px" }}
            label="Work Experience"
            {...a11yProps(3)}
            component={RouterLink}
            to="/workexperience"
          />
        </Tabs>
      </AppBar>
    
        
     
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{ backgroundColor: "black" }}
      >
       
          
        <TabPanel value={value} index={0} dir={theme.direction}>
         
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}></TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
         
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}></TabPanel>
        
      </SwipeableViews>
  
    </Box>
  );
};

export default Header;
