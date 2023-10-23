import React from 'react'
import Project from './Projects/Project'
import ProjectOption2 from './Projects/ProjectOption2'
import { motion } from 'framer-motion'
import ProjectOption3 from './Projects/ProjectOption3'
import ProjectOption4 from './Projects/ProjectOption4'
import ProjectOption5 from './Projects/ProjectOptions5'

const Works = ({HandleProject, activeScroll }) => {

  return (
    <>
    <div id='projects' className='container transition-all duration-500 flex-[1] md:flex-[0.9] mid:flex-[0.65] w-full bg-gray-700 flex flex-col my-16 items-center pt-12 dark:bg-black'>
        <p className='text-[30px] small:text-[36px] text-white text-center pt-8 font-body w-[80%] '>Recent Projects</p>
    </div>
        <Project HandleProject={HandleProject} activeScroll={activeScroll}/>
        {/* <ProjectOption2/> */}
        <ProjectOption3 HandleProject={HandleProject} activeScroll={activeScroll}/>
        <ProjectOption2 HandleProject={HandleProject} activeScroll={activeScroll}/>
        {/* <ProjectOption2/> */}
        <ProjectOption4 HandleProject={HandleProject} activeScroll={activeScroll}/>
        <ProjectOption5 HandleProject={HandleProject} activeScroll={activeScroll}/>
        
    </>
  )
}

export default Works