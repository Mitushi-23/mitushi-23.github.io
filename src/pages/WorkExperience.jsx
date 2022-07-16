import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import { Typography } from '@mui/material';
const WorkExperience = () => {
  return (
    <>
    <Typography textAlign="center" variant="h2"  fontFamily='var(--poppins)' letterSpacing="1.3px" fontWeight="bold" marginY="2%">
    <span style={{color:'var(--main-col)'}}>Work</span> Experience 
      </Typography>
      <br />
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--primary)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  var(--primary)' }}
    date="May 2022 - present"
    iconStyle={{ background: 'var(--primary)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <Typography variant='h6' className="vertical-timeline-element-title" style={{fontFamily:'var(--play)',fontWeight:'bold'}}>MERN Stack Developer <br /> CompactGyan</Typography>
    <Typography>
      Development of site using ReactJS and material UI as a framwork, integeration of REST APIs and implementation of backeng using NodeJS.
    </Typography>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Mar 2022 - May 2022"
    iconStyle={{ background: 'var(--main-colo)', color: '#fff' }}
    contentStyle={{ background: 'var(--main-colo)', color: '#fff' }}

    contentArrowStyle={{ borderRight: '7px solid  var(--main-colo)' }}
    icon={<WorkIcon />}
  >
    <Typography variant='h6' className="vertical-timeline-element-title" style={{fontFamily:'var(--play)',fontWeight:'bold'}}>Full Stack Developer <br /> Reeya Community </Typography>
    
    <Typography>
    Worked as a full stack developer for the development of official website of reeya community using ReactJS.
    </Typography>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Dec 2021 - present"
    iconStyle={{ background: 'var(--primary)', color: '#fff' }}
    contentStyle={{ background: 'var(--primary)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  var(--primary)' }}
    icon={<WorkIcon />}
  >
    <Typography variant='h6' className="vertical-timeline-element-title" style={{fontFamily:'var(--play)',fontWeight:'bold'}}>Web Development Team Member <br /> CODAME Club,IIIT Bhopal</Typography>
    <Typography>
    An active member of Web Development Team of CODAME, IIIT Bhopal. A contributor in hosting web development events and in the offical website building of the Codame Club.
    </Typography>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
    </>
  )
}

export default WorkExperience