import React from 'react'
import { NavLink } from "react-router-dom";
import {  Tooltip } from "@mui/material";
import canvas from '../../assets/canvas_logo.png'
import 'font-awesome/css/font-awesome.min.css';
 

const ProjectsNav = () => {
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", marginBottom:'5%' }}>
          <Tooltip title="Python" arrow placement="top">
            <NavLink to="/project/python"><i className="fab fa-python" style={{fontSize:'40px',color:'blue',margin:'0px 10px'}}></i></NavLink>
          </Tooltip>
          <Tooltip title="Vanilla JS" arrow placement="top">
          <NavLink to="/project/vanilla_js"> <i className="fab fa-js" style={{fontSize:'40px',color:'var(--title-colo)',margin:'0px 10px'}}></i></NavLink>
          </Tooltip>
          <Tooltip title="MERN Stack" arrow placement="top">
          <NavLink to="/project/mern_stack"> <img src="https://www.careernath.com/wp-content/uploads/2023/01/becomeamernstackdeveloper-mobile.png" alt="" style={{width:'40px',color:'var(--main-colo)',margin:'0px 10px'}}/></NavLink>
          </Tooltip>
          <Tooltip  title="All Projects" arrow placement="top">
          <NavLink className='all_project' to="/project" style={{textDecoration:'none',color:'var(--main-colo)',fontSize:'25px'}}> All Projects</NavLink>
          </Tooltip>
          <Tooltip title="React JS" arrow placement="top">
          <NavLink to="/project/react_js"><i className="fab fa-react"style={{fontSize:'40px',color:'blue',margin:'0px 10px'}}></i></NavLink>
          </Tooltip>
          <Tooltip title="CANVAS" arrow placement="top">
          <NavLink to="/project/canvas"> <img src={canvas} alt="" style={{width:'40px',color:'var(--main-colo)',margin:'0px 10px'}}/></NavLink>
          </Tooltip>
        </div>
    </>
  )
}

export default ProjectsNav