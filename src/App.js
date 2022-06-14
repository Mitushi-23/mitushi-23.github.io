import './App.css'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link
} from 'react-router-dom'

import Projects from './pages/Projects/Projects'
import Home from './pages/Home'
import ProjectDesc from './pages/Projects/ProjectDesc'
import About from './pages/About'
import WorkExperience from './pages/WorkExperience'
// import SwipeableRoutes from 'react-swipeable-routes'

function App() {
  const about = ()=>(
    <About/>
  )
  const home = ()=>(
    <Home/>
  )
  const projects = ()=>(
    <Projects/>
  )
  const workexperience = ()=>(
    <WorkExperience/>
  )
  return (
    <Router>
      <Header />
      {/* <div>
            <Link to="/">Red</Link> |<Link to="/workexperience">Blue</Link> |
            <Link to="/about">Green</Link> |<Link to="/projects">Yellow</Link> 
          </div> */}
      <Routes>
        <Route exact  path="/" element={<Home/>} />
        <Route exact  path="/about" element={<About/>} />
        <Route exact  path="/project" element={<Projects/>} />
        <Route exact  path="/workexperience" element={<WorkExperience/>} />
        <Route exact path="/project/:id" element={<ProjectDesc/>}/>
      </Routes>
    </Router>
  )
}

export default App

