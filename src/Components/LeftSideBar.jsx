import React from 'react'
import rich from "../assets/edf.png"
import {AiFillGithub, AiFillLinkedin, AiFillFacebook} from "react-icons/Ai"
import {BsInstagram} from "react-icons/Bs"
import { motion, stagger } from 'framer-motion'



const LeftSideBar = () => {

  const header2 = {
    initial: {
      y: -60,
      opacity: 0,
      transition: { duration: 0.05, }
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    }
  }
  const stagger2 = {
    animate: {
      transition: {
        delayChildren: 0.01,
        staggerChildren: 0.1,
        staggerDirection: 1
      }
    }
  }

  const openLink = (url) => {
      window.open(url, "_blank").focus
  }


  return (
    <motion.div initial="initial" animate="animate" variants={stagger2} className='hidden mid:block flex-[0.25] w-full h-[calc(100vh-58px)] bg-gray-700 sticky top-[58px] box-border lg:flex-[0.2] max-h-[690px] transition-all duration-500 dark:bg-black'>
      <motion.h1 initial={{y:-20, opacity:0}} animate={{y:0, opacity: 1}} transition={{type: "spring", duration: 2}} className='text-white text-justify tracking-widest md:text-[18px] lg:text-[20px] sm:text-[20px] font-body pt-8 pl-4'>RICHARD ABOAGYE</motion.h1>
      <motion.div className='flex-[0.2] w-full h-[calc(100vh-58px)] bg-transparent sticky top-[58px] px-4'>
        <motion.img initial={{ scale:0.7}} animate={{ scale: 1}} transition={{ duration:1}} src={rich} className='w-full object-contain mx-auto my-10'  alt="" />
        <motion.p variants={header2} className='text-gray-400 dark:text-gray-500 transition-all duration-500 font-body text-center'>Front-end Engineer</motion.p>
        <motion.p variants={header2} className='text-gray-400 dark:text-gray-500 transition-all duration-500 font-body text-center mt-4'>www.reactbyrichard@gmail.com</motion.p>
        <motion.p variants={header2} className='text-gray-400 dark:text-gray-500 transition-all duration-500 font-body text-center mt-10'>© 2023 Richard, All Rights Reserved</motion.p>
        <motion.div variants={stagger2} className='flex gap-8 w-full justify-center my-10'>
          <motion.div variants={header2} className='' onClick={()=>openLink("https://www.github.com/raboagye")}>
            <AiFillGithub className='text-white text-xl cursor-pointer hover:scale-150 transition-all duration-200' />
          </motion.div>
          <motion.div variants={header2} >
            <AiFillLinkedin className='text-white text-xl cursor-pointer hover:scale-150 transition-all duration-20onClick={()=>openLink("https://gh.linkedin.com/in/aboagye-richard-5aa339138")}0' />
          </motion.div>
          {/* <motion.div variants={header2} onClick={()=>openLink("https://www.github.com/raboagye")}>
            <AiFillFacebook className='text-white text-xl cursor-pointer hover:scale-150 transition-all duration-200' />
          </motion.div>
          <motion.div variants={header2} onClick={()=>openLink("https://www.github.com/raboagye")}>
            <BsInstagram className='text-white text-xl cursor-pointer hover:scale-150 transition-all duration-200' />
          </motion.div> */}
        </motion.div>
        <a href='#contact'><motion.button initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 1, delay: 0.25}} className='text-white font-body tracking-widest text-center w-full bg-black py-4 contact-inner-shadow'>CONTACT ME</motion.button></a>
    </motion.div>

    </motion.div>
    
  )
}

export default LeftSideBar