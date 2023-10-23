import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const ProjectOption3 = ({HandleProject, activeScroll}) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const mainControls = useAnimation()
  

  useEffect(()=> {
    isInView? mainControls.start("visible") : mainControls.start("hidden")
    
  }, [isInView])

  useEffect(()=>{
    if (isInView && !activeScroll){
      HandleProject()
    }
       
  }, [isInView])


  
  const [explode, setExplode] = useState(false)

  const openLink = (url) => {

    setExplode(true)
    const openLinkTimer = setTimeout(()=>{
      window.open(url, "_blank").focus
    }, 700)

    return()=>clearTimeout( openLinkTimer)
   
  }

  useEffect(()=>{
    if (explode){
      const closBoxTimer = setTimeout(()=>{
        setExplode(false)
      }, 2000)
  
      return()=>clearTimeout( closBoxTimer)
    }
  },[explode] )



  return (
    <div 
     className=' flex-[1] md:flex-[0.9] mid:flex-[0.65] w-full pb-60 md:pb-80 mdium:h-[100vh] mdium:pb-0 relative perspective-1000 mt-28 flex flex-col items-center mdium:items-start mdium:pl-16 lg:pl-0'>
          <div className='hidden group w-[350px] h-[350px] md:w-[400px] md:h-[400px] small:flex justify-center mdium:justify-start mdium:absolute mdium:right-[-60px]'>
              <div className='w-[125px] h-[125px] md:w-[250px]  md:h-[250px] transform-style-3d moveAnimate group mt-20 cursor-pointer' onClick={()=>openLink("https://www.richmail.richaboagye.com")}>
                  <div className={`w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center  py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute translate-z-[62.5px]  md:translate-z-[125px] opacity-90 ${explode && "translate-z-[150px] md:translate-z-[250px]"}  duration-200 ease-in text-lg`}>view project</div>
                  <div className={`w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute translate-z-[-62.5px]  md:translate-z-[-125px] opacity-90  ${explode && "translate-z-[-150px] md:translate-z-[-250px]"}  duration-200 ease-in text-lg`}>view project</div>
                  <div className={`w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute right-[62.5px] md:right-[125px] opacity-90 ${explode && "right-[150px] md:right-[250px]"}   rotate-y-[90deg]  duration-200 ease-in text-lg`}>view project</div>
                  <div className={`w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute left-[62.5px] md:left-[125px] opacity-90 ${explode && "left-[150px] md:left-[250px]"}  rotate-y-[-90deg]  duration-200 ease-in text-lg`}>view project</div>
                  <div className={`w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute bottom-[62.5px] md:bottom-[125px] opacity-90 ${explode && "bottom-[150px] md:bottom-[250px]"}  rotate-x-[90deg] duration-200 ease-in text-lg`}>view project</div>
                  <div className={`w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute top-[62.5px] md:top-[125px] opacity-90 ${explode && "top-[150px] md:top-[250px]"}  rotate-x-[-90deg] duration-200 ease-in text-lg`}>view project</div>
              </div>

          </div>
          <div className='small:hidden group w-[350px] h-[350px] md:w-[400px] md:h-[400px] flex justify-center mdium:justify-start mdium:absolute mdium:right-[-60px]'>
              <div className='w-[125px] h-[125px] md:w-[250px]  md:h-[250px] transform-style-3d moveAnimate group mt-20 cursor-pointer' onClick={()=>openLink("https://www.richmail.richaboagye.com")}>
                  <div className={`w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center  py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute translate-z-[62.5px]  md:translate-z-[125px] opacity-90 ${explode && "translate-z-[150px] md:translate-z-[250px]"}  duration-200 ease-in text-sm`}>click to view</div>
                  <div className={`w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute translate-z-[-62.5px]  md:translate-z-[-125px] opacity-90  ${explode && "translate-z-[-150px] md:translate-z-[-250px]"}  duration-200 ease-in text-sm`}>click to view</div>
                  <div className={`w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute right-[62.5px] md:right-[125px] opacity-90 ${explode && "right-[150px] md:right-[250px]"}   rotate-y-[90deg]  duration-200 ease-in text-sm`}>click to view</div>
                  <div className={`w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute left-[62.5px] md:left-[125px] opacity-90 ${explode && "left-[150px] md:left-[250px]"}  rotate-y-[-90deg]  duration-200 ease-in text-sm`}>click to view</div>
                  <div className={`w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute bottom-[62.5px] md:bottom-[125px] opacity-90 ${explode && "bottom-[150px] md:bottom-[250px]"}  rotate-x-[90deg] duration-200 ease-in text-sm`}>click to view</div>
                  <div className={`w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute top-[62.5px] md:top-[125px] opacity-90 ${explode && "top-[150px] md:top-[250px]"}  rotate-x-[-90deg] duration-200 ease-in text-sm`}>click to view</div>
              </div>

          </div>
          <motion.div 
          ref={ref} 
          variants={{
            hidden: {opacity: 0, y: [0, -50, 0]},
            visible: {opacity: 1, y: [0,-50, 0], transition:{duration: 1.1, delay: 0.25}},
            
          }}
          initial="hidden"
          animate={mainControls}
          transition={{type:"spring", bounce: 0.4}}
         
          
          className='w-[90%] mdium:w-[43%] top-80 flex flex-col items-center absolute md:top-96  mdium:left-8 pt-4 md:mt-16'>
              <p className='text-[20px] hover:text-white text-center pt-8 font-body text-sm md:text-sm lg:text-[1rem] cursor-pointer text-[#099D66]' onClick={()=>openLink("https://www.richmail.richaboagye.com")}>RichMail: A Gmail Clone </p>
              <div>
                  <p className='text-gray-400 dark:text-gray-500 transition-all duration-500 pt-8 font-body text-sm md:text-sm lg:text-[1rem]'>• A fully responsive email client web application powered by:</p>
                  <p className='text-gray-400 dark:text-gray-500 transition-all duration-500 pt-4 font-body text-sm md:text-sm lg:text-[1rem]'>• React | Redux | React Router DOM | Axios | React Hook Form | Material-UI | Firebase</p>
                  <details className='details6 border-0 outline-none' ><summary className='text-[#009D66] mt-2 cursor-pointer border-0 outline-none'>more</summary><p className='pt-4 font-body text-gray-400 dark:text-gray-500 transition-all duration-500 text-sm md:text-sm lg:text-[1rem]'>Expertly employed React, JSX, React Router DOM, and Redux for state management in creating dynamic interfaces with smooth navigation, leveraging Axios, Material-UI, Firebase, and Bootstrap CSS for enhanced functionality, accessibility, and responsive design.</p></details>
              </div>

              {/* <div className='w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute translate-z-[62.5px]  md:translate-z-[125px]  hover:bg-[#009D66] opacity-90 group-hover:translate-z-[125px] md:group-hover:translate-z-[250px]  duration-200 ease-in'>Front</div>
                  <div className='w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute translate-z-[-62.5px]  md:translate-z-[-125px]  hover:bg-[#009D66] opacity-90  group-hover:translate-z-[-125px] md:group-hover:translate-z-[-250px]  duration-200 ease-in'>Back</div>
                  <div className='w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute right-[62.5px] md:right-[125px]  hover:bg-[#009D66] opacity-90 group-hover:right-[125px] md:group-hover:right-[250px]   rotate-y-[90deg]  duration-200 ease-in'>Left</div>
                  <div className='w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute left-[62.5px] md:left-[125px]  hover:bg-[#009D66] opacity-90 group-hover:left-[125px] md:group-hover:left-[250px]  rotate-y-[-90deg]  duration-200 ease-in'>Right</div>
                  <div className='w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute bottom-[62.5px] md:bottom-[125px]  hover:bg-[#009D66] opacity-90 group-hover:bottom-[125px] md:group-hover:bottom-[250px]  rotate-x-[90deg] duration-200 ease-in'>Top</div>
                  <div className='w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute top-[62.5px] md:top-[125px]  hover:bg-[#009D66] opacity-90 group-hover:top-[125px] md:group-hover:top-[250px]  rotate-x-[-90deg] duration-200 ease-in'>Bottom</div> */}


          </motion.div>

    </div>
  )
}

export default ProjectOption3