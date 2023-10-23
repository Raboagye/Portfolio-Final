import React, { useEffect, useRef } from 'react'
import Home from './Body Components/Home'
import AboutMe from './Body Components/AboutMe'
import Skills from './Body Components/Skills'
import Contact from './Body Components/Contact'
import Works from './Body Components/Works'
import { motion, useInView, useAnimation } from 'framer-motion'


const Body = ({HandleAbout, HandleContact, HandleHome, HandleProject, HandleSkills, activeScroll}) => {

  return (
    <div
    className='rounded-2xl flex-[1] md:flex-[0.9] mid:flex-[0.65]'>
      <Home HandleHome={HandleHome} activeScroll={activeScroll}/>
      <AboutMe HandleAbout={HandleAbout} activeScroll={activeScroll}/>
      <Skills HandleSkills={HandleSkills} activeScroll={activeScroll}/>
      <Works HandleProject={HandleProject} activeScroll={activeScroll}/>
      <Contact HandleContact={HandleContact} activeScroll={activeScroll}/>
    </div>

  )
}

export default Body