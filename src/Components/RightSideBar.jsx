import React from 'react'
import {AiFillFacebook, AiFillGithub, AiFillHome, AiFillLinkedin,} from "react-icons/Ai"
import {SiSkillshare} from "react-icons/si"
import {MdWorkOutline} from "react-icons/md"
import {MdOutlineContactMail} from "react-icons/md"
import { BsInstagram, BsInfo} from 'react-icons/Bs'
import { motion } from 'framer-motion'

const RightSideBar = ({activeHome, activeAbout, activeContact, activeProjects, activeSkills}) => {

    const header2 = {
        initial: {
            y: -60,
            opacity: 0,
            transition: {duration: 0.05,}
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
                staggerChildren: 0.2,
                staggerDirection: 1
            }
        }
    }

  return (
    <motion.div animate="animate" initial="initial" className='fixed hidden md:block bg-green-400 md:flex-[0.1] w-[10%] md:w-full right-4 md:bg-gray-700 h-[calc(100vh-58px)] transition-all duration-500 md:sticky top-[58px] lg:flex-[0.15] dark:bg-black'>
          <motion.div variants={stagger2} className='flex flex-col absolute right-4 gap-4  py-5 rounded-full mt-39'>
              <motion.div variants={header2} className={`p-2 border ${activeHome? "bg-[#009D66]": "bg-gray-500"} transition-all duration-[1.2]  border-[#1F2023] rounded-full button-inner-shadow relative `}>
                  <AiFillHome className={`${activeHome? "text-white": "text-gray-400 dark:text-gray-500 transition-all duration-500"} fontSize2 lg:text-sm`} />
                  {activeHome &&<motion.div layoutId='underline3' transition={{type:'spring', duration:1, bounce:0.4 }}  className={'border-t-[2px] border-[#009D66] bg-[#009D66] absolute top-0 left-0 inset-0 z-[-1] rounded-full button-inner-shadow '}></motion.div>}
              </motion.div>
              <motion.div variants={header2} className={`p-2 border ${activeAbout? "bg-[#009D66]": "bg-gray-500"} transition-all duration-[1.2] border-[#1F2023] rounded-full button-inner-shadow relative`}>
                  <BsInfo className={`${activeAbout? "text-white": "text-gray-400 dark:text-gray-500 transition-all duration-500"}  fontSize2 lg:text-sm`} />
                  {activeAbout &&<motion.div layoutId='underline3' transition={{type:'spring', duration:1, bounce:0.4 }}  className={'border-t-[2px] border-[#009D66] bg-[#009D66] absolute top-0 left-0 inset-0 z-[-1] rounded-full button-inner-shadow '}></motion.div>}
              </motion.div>
              <motion.div variants={header2} className={`p-2 border ${activeSkills? "bg-[#009D66]": "bg-gray-500"} transition-all duration-[1.2] border-[#1F2023] rounded-full button-inner-shadow relative`}>
                  <SiSkillshare className={`${activeSkills? "text-white": "text-gray-400 dark:text-gray-500 transition-all duration-500"} fontSize2 lg:text-sm`} />
                  {activeSkills &&<motion.div layoutId='underline3' transition={{type:'spring', duration:1, bounce:0.4 }}  className={'border-t-[2px] border-[#009D66] bg-[#009D66] absolute top-0 left-0 inset-0 z-[-1] rounded-full button-inner-shadow '}></motion.div>}
              </motion.div>
              <motion.div variants={header2} className={`p-2 ${activeProjects? "bg-[#009D66]": "bg-gray-500"} border transition-all duration-[1.2] border-[#1F2023] rounded-full button-inner-shadow relative`}>
                  <MdWorkOutline className={`${activeProjects? "text-white": "text-gray-400 dark:text-gray-500 transition-all duration-500"} fontSize2 lg:text-sm`} />
                  {activeProjects &&<motion.div layoutId='underline3' transition={{type:'spring', duration:1, bounce:0.4 }}  className={'border-t-[2px] border-[#009D66] bg-[#009D66] absolute top-0 left-0 inset-0 z-[-1] rounded-full button-inner-shadow '}></motion.div>}
              </motion.div>
              <motion.div variants={header2} className={`p-2 border ${activeContact? "bg-[#009D66]": "bg-gray-500"} transition-all duration-[1.2] border-[#1F2023] rounded-full button-inner-shadow relative`}>
                  <MdOutlineContactMail className={`${activeContact? "text-white": "text-gray-400 dark:text-gray-500 transition-all duration-500"} fontSize2 lg:text-sm`} />
                  {activeContact &&<motion.div layoutId='underline3' transition={{type:'spring', duration:1, bounce:0.4 }}  className={'border-t-[2px] border-[#009D66] bg-[#009D66] absolute top-0 left-0 inset-0 z-[-1] rounded-full button-inner-shadow '}></motion.div>}
              </motion.div>
          </motion.div>
          <div className='hidden flex-col items-center absolute bottom-4 left-[50%] transform translate-x-[-50%] w-full lg:flex'>
            <p className='font-body text-gray-400 dark:text-gray-500 transition-all duration-500 fontSize'>Crafting Frontend Excellence</p>
            <div className='flex items-center justify-center gap-4 w-full'>
                <div className='w-[25%] border h-0 border-t-gray-500'></div>
                <p className='font-body text-[#009D66] fontSize'>where</p>
                <div className='w-[25%] border h-0 border-t-gray-500'></div>
            </div>
            <p className='font-body text-gray-400 dark:text-gray-500 transition-all duration-500 fontSize'>Quality Takes Lead</p>
          </div>
      </motion.div>
  )
}

export default RightSideBar