import React from 'react'
import { NavLink } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {  Tooltip } from "@mui/material";


const ProjectsNav = () => {
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", marginBottom:'5%' }}>
          <Tooltip title="Python" arrow placement="top">
            <NavLink to="/project/python"><FiberManualRecordIcon style={{ color: "var(--colour-blue)" }} /></NavLink>
          </Tooltip>
          <Tooltip title="Vanilla JS" arrow placement="top">
          <NavLink to="/project/vanilla_js"> <FiberManualRecordIcon style={{ color: "var(--title-colo)" }} /></NavLink>
          </Tooltip>
          <Tooltip title="MERN Stack" arrow placement="top">
          <NavLink to="/project/mern_stack"> <FiberManualRecordIcon style={{ color: "deeppink" }} /></NavLink>
          </Tooltip>
          <Tooltip title="React JS" arrow placement="top">
          <NavLink to="/project/react_js"> <FiberManualRecordIcon style={{ color: "darkviolet" }} /></NavLink>
          </Tooltip>
          <Tooltip title="CANVAS" arrow placement="top">
          <NavLink to="/project/canvas"> <FiberManualRecordIcon style={{ color: "coral" }} /></NavLink>
          </Tooltip>
        </div>
    </>
  )
}

export default ProjectsNav