import React, { useEffect, useRef } from 'react'
import frame24 from "../../assets/skills/Frame 24.png"
import frame11 from "../../assets/skills/Frame 11.png"
import frame23 from "../../assets/skills/Frame 23.png"
import frame14 from "../../assets/skills/Frame 14.png"
import frame15 from "../../assets/skills/Frame 15.png"
import frame16 from "../../assets/skills/Frame 16.png"
import frame17 from "../../assets/skills/Frame 17.png"
import frame18 from "../../assets/skills/Frame 18.png"
import frame20 from "../../assets/skills/Frame 20.png"
import frame21 from "../../assets/skills/Frame 21.png"
import frame22 from "../../assets/skills/Frame 22.png"
import frame25 from "../../assets/skills/Frame 25.png"
import frame26 from "../../assets/skills/Frame 26.png"
import frame27 from "../../assets/skills/Frame 27.png"
import frame28 from "../../assets/skills/Frame 28.png"
import group15 from "../../assets/skills/Group 15.png"
import { motion, useInView } from 'framer-motion'




const Skills = ({HandleSkills, activeScroll}) => {

      const ref= useRef(null)
      const isInView = useInView(ref, {amount: 0.5})

      useEffect(()=>{
        if (isInView && !activeScroll){
          HandleSkills()
        }
           
      }, [isInView])

  const header3 = {
    initial: {
      y: [0,-120,0],
      transition: { duration: 0.05, },
      opacity:0,
    },
    animate: {
      y:[0,-120,0],
      transition: {
        duration: 1.3, 
      },
      opacity:1,
    }
  }

  const skills = {
    initial: {
        x: -100,
        y: -100,
        scale: 0,
        opacity: 0,
        transition: { duration: 0.5}
    },
    animate: {
        x: 0,
        y:0,
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            
        }

    }
}



  return (
    <motion.div ref={ref} initial="initial" whileInView="animate" transition={{staggerChildren: 0.1}} viewport={{once:false, amount: 0.4}} id='skills' className='flex-[1] md:flex-[0.9] mid:flex-[0.65] flex flex-col  items-center w-full pt-4 bg-gray-700 my-32 dark:bg-black transition-all duration-500'>
         <motion.p  className='text-[30px] small:text-[36px] w-[80%] text-white text-center pt-16 font-body text-transform capitalize'>Tech & <span className='text-[#009D66]'>Tools</span> </motion.p>
         <motion.p  className='text-[20px] text-gray-400 dark:text-gray-500 transition-all duration-500 w-[80%] text-center pt-6 pb-24 font-body leading-8 text-transform capitalize'>i have been working with recently</motion.p>
         <motion.div initial="initial" whileInView="animate" viewport={{once: false, amount: 0.5}} transition={{staggerChildren: 0.15}} className='w-[60%] m-auto pt-24 relative h-[70vh]'>
            <motion.img variants={skills} src={frame24} alt="" className='w-[10%] top-[-5vh] absolute left-[-14%] object-contain' />
            <motion.img variants={skills} src={frame18} alt="" className='w-[10%] top-[51vh] absolute left-[-20%] object-contain' />
            <motion.img variants={skills} src={frame23} alt="" className='w-[10%] top-[0vh] absolute left-[25%] object-contain' />
            <motion.img variants={skills} src={frame20} alt="" className='w-[10%] top-[55vh] absolute left-[25%] object-contain' />
            <motion.img variants={skills} src={frame11} alt="" className='w-[10%] top-[-3vh] absolute left-[65%] object-contain' />
            <motion.img variants={skills} src={frame14} alt="" className='w-[10%] top-[-5vh] absolute left-[104%] object-contain' />
            <motion.img variants={skills} src={frame15} alt="" className='w-[10%] absolute top-[17vh] left-[-15%] object-contain' />
            <motion.img variants={skills} src={frame16} alt="" className='w-[10%] absolute top-[17vh] left-[27%] object-contain' />
            <motion.img variants={skills} src={frame17} alt="" className='w-[10%] absolute top-[17vh] left-[67%] object-contain' />
            <motion.img variants={skills} src={frame25} alt="" className='w-[10%] absolute top-[17vh] left-[100%] object-contain' />
            <motion.img variants={skills} src={frame21} alt="" className='w-[10%] absolute top-[54vh] left-[63%] object-contain' />
            <motion.img variants={skills} src={frame22} alt="" className='w-[10%] absolute top-[38vh] left-[104%] object-contain' />
            <motion.img variants={skills} src={frame26} alt="" className='w-[10%] absolute top-[34vh] left-[-25%]object-contain' />
            <motion.img variants={skills} src={frame27} alt="" className='w-[10%] absolute top-[34vh] left-[35%] object-contain' />
            <motion.img variants={skills} src={frame28} alt="" className='w-[10%] absolute top-[34vh] left-[70%] object-contain' />
            <motion.img variants={skills} src={group15} alt="" className='w-[10%] absolute top-[54vh] left-[103%] object-contain' />
         </motion.div>
    </motion.div>
  )
}

export default Skills