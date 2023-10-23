import React, { useEffect, useRef } from 'react'

import { motion, useInView} from 'framer-motion'
import richard from "./Richard.pdf"


const AboutMe = ({HandleAbout, activeScroll}) => {
  const ref= useRef(null)
  const isInView = useInView(ref, {amount: 0.8})

  const header3 = {
    initial: {
      y: 80,
      transition: { duration: 0.05, }
    },
    animate: {
      y:0,
      transition: {
        duration: 0.8
      }
    },

  }
  const header2 = {
    initial: {
      y: 60,
      transition: { duration: 0.05, }
    },
    animate: {
      y:0,
      transition: {
        duration: 0.8
      }
    }
  }
  const header4 = {
    initial: {
      y: -60,
      opacity: 0,
      rotate: [ 0],
      transition: { duration: 0.05, }
    },
    animate: {
      y:0,
      opacity: 1,
      rotate: [120,0],
      transition: {
        duration: 7, delay: 0.25, type: "spring", bounce: 0.8,
      },
    },

  }

  useEffect(()=>{
    if (isInView && !activeScroll){
      HandleAbout()
    }
       
  }, [isInView])

  

  return (
    <motion.div ref={ref} initial="initial" whileInView="animate" transition={{ staggerChildren: 0.1 }} viewport={{once:false, amount: 0.6}} id='about' className='flex-[1] md:flex-[0.9] mid:flex-[0.65] w-full bg-gray-700 relative mt-8 flex flex-col items-center dark:bg-black transition-all duration-500 '>
      <motion.p variants={header3} className='text-[30px] small:text-[36px] break-words w-[80%] text-white text-center  mt-20 font-body text-transform capitalize'>every successful journey begins with </motion.p>
      <motion.p variants={header3} className=' text-[#009D66] text-center mt-4 font-body text-[30px] small:text-[36px] break-words w-[80%] '><span className='text-white'>A</span> Story<span className='text-white'>,</span></motion.p>
      <motion.div
        transition={{staggerChildren: 1}}
        className='text-sm w-[80%] md:text-sm lg:text-[1rem] text-gray-500 text-center mt-12 font-body leading-8'><motion.p className='leading-8' variants={header2}>I'm Richard Aboagye, a Frontend Engineer with a Bachelor’s Degree in Mechanical</motion.p>
        <motion.p variants={header2} className='leading-8'>Engineering. I am a Ghanaian developer with extensive knowledge in React.js and</motion.p> <motion.p variants={header2} className='leading-8'>current technologies.</motion.p>
        <br />
        <br />
        <br />
        <motion.p variants={header2} className='leading-8'>I have a passion for creating seamless user experiences and take pride in designing my</motion.p>  <motion.p variants={header2} className='leading-8'>own mockups using Figma. With a solid foundation in engineering and expertise in</motion.p>  <motion.p variants={header2}>frontend development, I am excited to bring my skills and enthusiasm to contribute as a </motion.p> <motion.p variants={header2} className='leading-8'>valuable member of your team.</motion.p>
      </motion.div>
      <motion.div
        variants={header4}
        className='w-full pt-28 mb-16'>
        <a href={richard} download="Resume"><button className='bg-[#009D66] py-2 px-4 text-white font-body rounded-md download-inner-shadow border-[#009D66] absolute border-t-[1px] left-[50%] transform translate-x-[-50%] text-sm md:text-sm lg:text-[1rem]'>Download Cv</button></a>

      </motion.div>


    </motion.div>
  )
}

export default AboutMe