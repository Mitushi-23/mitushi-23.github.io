import './App.css'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import Projects from './pages/Projects/Projects'
import Home from './pages/Home'
import ProjectDesc from './pages/Projects/ProjectDesc'
import About from './pages/About'
import WorkExperience from './pages/WorkExperience'
import ReactProjects from './pages/Projects/ProjectsCategory'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import SwipeableRoutes from 'react-swipeable-routes'

function App() {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1100px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 1100px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
  return (
    <Router>
      {matches && 
      // (<h1>Big Screen</h1>)
      <Navbar/>
      }
      {!matches &&
      <Header />
      }
      {/* <div>
            <Link to="/">Red</Link> |<Link to="/workexperience">Blue</Link> |
            <Link to="/about">Green</Link> |<Link to="/projects">Yellow</Link> 
          </div> */}
          {/* <div className='bg'></div> */}
          <div >
            {/* <img className='bg'src="https://media.discordapp.net/attachments/901765071796072559/990167844476059668/unknown.png" alt="" width="200px" /> */}
            {/* <img className='bg'src="https://media.discordapp.net/attachments/901765071796072559/990169061767913542/unknown.png" alt="" width="200px" /> */}
          </div>
      <Routes>
        <Route exact  path="/" element={<Home/>} />
        <Route exact  path="/about" element={<About/>} />
        <Route exact  path="/project" element={<Projects/>} />
        <Route exact  path="/workexperience" element={<WorkExperience/>} />
        <Route exact path="/project/:id" element={<ProjectDesc/>}/>
        <Route exact path="/project/react_js"  element={<ReactProjects category="React JS"/>}/>
        <Route exact path="/project/vanilla_js"  element={<ReactProjects category="Vanilla JS"/>}/>
        <Route exact path="/project/mern_stack"  element={<ReactProjects category="MERN Stack"/>}/>
        <Route exact path="/project/python"  element={<ReactProjects category="Python"/>}/>
        <Route exact path="/project/canvas"  element={<ReactProjects category="CANVAS"/>}/>
      </Routes>
    </Router>
  )
}

export default App

