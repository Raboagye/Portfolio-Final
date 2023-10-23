import React from 'react'
import rich from "../assets/edf.png"
import {AiFillGithub, AiFillLinkedin, AiFillFacebook} from "react-icons/Ai"
import {BsInstagram} from "react-icons/Bs"
import {IoMdArrowDropleft} from "react-icons/Io"



const ToggleSideBar = ({openProfile, closeProfile}) => {
  const openLink = (url) => {
    window.open(url, "_blank").focus
  }

  return (
    <div className={openProfile ? ' profileMenu translate-x-[0%]' : "profileMenu translate-x-[-150%]"}>
      <div className=' bg-gray-700 dark:bg-black transition-colors duration-500'>
        <IoMdArrowDropleft className='absolute text-[30px] cursor-pointer text-gray-400 top-0 right-4' onClick={closeProfile} />
        <h1 className='text-white text-justify tracking-widest text-[19.5px] font-body pt-8 px-4'>RICHARD ABOAGYE</h1>
        <div className='flex-[0.2] w-full h-[calc(100vh-58px)] bg-transparent sticky top-[58px] px-4'>
          <img src={rich} className='w-full object-contain mx-auto my-10' alt="" />
          <p className='text-gray-400 dark:text-gray-500 transition-all duration-500 font-body text-center'>Front-end Engineer</p>
          <p className='text-gray-400 dark:text-gray-500 transition-all duration-500 font-body text-center mt-4'>www.reactbyrichard@gmail.com</p>
          <p className='text-gray-400 dark:text-gray-500 transition-all duration-500 font-body text-center mt-10'>© 2023 Richard, All Rights Reserved</p>
          <div className='flex gap-8 w-full justify-center my-10'>
            <AiFillGithub className='text-white text-xl hover:scale-150 cursor-pointer transition-all duration-500' onClick={()=>openLink("https://www.github.com/raboagye")}/>
            <AiFillLinkedin className='text-white text-xl hover:scale-150 cursor-pointer transition-all duration-500' onClick={()=>openLink("https://gh.linkedin.com/in/aboagye-richard-5aa339138")}/>
            {/* <AiFillFacebook className='text-white text-xl' />
            <BsInstagram className='text-white text-xl' /> */}
          </div>
          <a href='#contact'><button className='text-white font-body tracking-widest text-center w-full bg-black py-4 contact-inner-shadow'>CONTACT ME</button></a>
        </div>

      </div>

    </div>
    
    
  )
}

export default ToggleSideBar