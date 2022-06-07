import React from 'react'
import {AppBar, Tab, Tabs} from '@mui/material'
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects/Projects';
import WorkExperience from '../pages/WorkExperience';

const Navbar = props => {
    const {match,history} = props;
    const {params} = match;
    const {page} = params;
    console.log(page);

    const tabNameToIndex = {
        0: "about",
        1: "contact"
      };
    
      const indexToTabName = {
        about: 0,
        contact: 1
      };

    const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
    <AppBar position='static'>
    <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Home"  />
          <Tab label="About"    />
          <Tab label="Projects"  />
          <Tab label="Work Experience"  />
        </Tabs>
        </AppBar>
        {selectedTab===0 && <Home/>}
        {selectedTab===1 && <About/>}
        {selectedTab===2 && <Projects/>}
        {selectedTab===3 && <WorkExperience/>}
    </>
  )
}

export default Navbar