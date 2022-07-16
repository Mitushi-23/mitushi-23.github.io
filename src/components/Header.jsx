import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Avatar } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

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

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 20, right: 20 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};


const Header = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box>
      <AppBar
        position="static"
        style={{
          backgroundColor: "var(--main-header-red)",
          color: "black",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ width: 64, height: 40, margin: "0px 10px" }}
          src={logo}
          alt=""
        />

        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{ width: "inherit" }}
        >
          <Tab
            style={{ fontSize: "22px" }}
            label="Home"
            {...a11yProps(0)}
            component={RouterLink}
            to="/"
            className="tab"
          />
          <Tab
            style={{ fontSize: "22px" }}
            label="About"
            {...a11yProps(1)}
            component={RouterLink}
            to="/about"
            className="tab"
          />
          <Tab
            style={{ fontSize: "22px" }}
            label="Projects"
            {...a11yProps(2)}
            component={RouterLink}
            to="/project"
            className="tab"
          />
          <Tab
            style={{ fontSize: "22px" }}
            label="Work Experience"
            {...a11yProps(3)}
            component={RouterLink}
            to="/workexperience"
            className="tab"
          />
        </Tabs>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </Box>
     <ScrollTop {...props}>
     <Fab size="small" aria-label="scroll back to top">
       <KeyboardArrowUpIcon />
     </Fab>
   </ScrollTop>
   </>
  );
};

export default Header;
