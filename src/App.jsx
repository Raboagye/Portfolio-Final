import './App.css'
import Navbar from './Components/Navbar'
import LeftSideBar from './Components/LeftSideBar'
import Body from './Components/Body'
import RightSideBar from './Components/RightSideBar'
import ToggleSideBar from './Components/ToggleSideBar'
import { useEffect, useState } from 'react'


function App() {

  const [openSideMenu, setOpenSideMenu] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  const [activeHome, setActiveHome] = useState(true)
  const [activeAbout, setActiveAbout] = useState(false)
  const [activeSkills, setActiveSkills] = useState(false)
  const [activeProjects, setActiveProjects] = useState(false)
  const [activeContact, setActiveContact] = useState(false)

  const [activeScroll, setActiveScroll] = useState(false)


  useEffect(()=>{
    if(activeScroll){
      const timer = setTimeout(() => {
        setActiveScroll(false)
      }, 1000)

      return()=> clearTimeout(timer)
    }
    
  }, [activeScroll])

  const HandleHome = () => {
      setActiveHome(true)
      setActiveAbout(false)
      setActiveContact(false)
      setActiveProjects(false)
      setActiveSkills(false)
  }
  const HandleAbout = () => {
      setActiveHome(false)
      setActiveAbout(true)
      setActiveContact(false)
      setActiveProjects(false)
      setActiveSkills(false)
  }
  const HandleSkills = () => {
      setActiveHome(false)
      setActiveAbout(false)
      setActiveContact(false)
      setActiveProjects(false)
      setActiveSkills(true)
  }
  const HandleContact = () => {
      setActiveHome(false)
      setActiveAbout(false)
      setActiveContact(true)
      setActiveProjects(false)
      setActiveSkills(false)
  }
  const HandleProject = () => {
      setActiveHome(false)
      setActiveAbout(false)
      setActiveContact(false)
      setActiveProjects(true)
      setActiveSkills(false)
  }
  const HandleHome2 = () => {
      setActiveHome(true)
      setActiveAbout(false)
      setActiveContact(false)
      setActiveProjects(false)
      setActiveSkills(false)
      setActiveScroll(true)
  }
  const HandleAbout2 = () => {
      setActiveHome(false)
      setActiveAbout(true)
      setActiveContact(false)
      setActiveProjects(false)
      setActiveSkills(false)
      setActiveScroll(true)
  }
  const HandleSkills2 = () => {
      setActiveHome(false)
      setActiveAbout(false)
      setActiveContact(false)
      setActiveProjects(false)
      setActiveSkills(true)
      setActiveScroll(true)
  }
  const HandleContact2 = () => {
      setActiveHome(false)
      setActiveAbout(false)
      setActiveContact(true)
      setActiveProjects(false)
      setActiveSkills(false)
      setActiveScroll(true)
  }
  const HandleProject2 = () => {
      setActiveHome(false)
      setActiveAbout(false)
      setActiveContact(false)
      setActiveProjects(true)
      setActiveSkills(false)
      setActiveScroll(true)
  }

  return (
    <div className={darkMode?'dark': ""}>
      <div className='bg-gray-700 dark:bg-black transition-all duration-500 w-full m-auto'>
        <div className='w-[94%] m-auto'>
          <Navbar
            sideMenu={() => setOpenSideMenu(!openSideMenu)}
            changeTheme={() => setDarkMode(!darkMode)}
            HandleAbout={HandleAbout2}
            HandleHome={HandleHome2}
            HandleProject={HandleProject2}
            HandleContact={HandleContact2}
            HandleSkills={HandleSkills2}
            activeHome={activeHome}
            activeAbout={activeAbout}
            activeContact={activeContact}
            activeSkills={activeSkills}
            activeProjects={activeProjects}
          />
          <div className=''>
            <ToggleSideBar closeProfile={() => setOpenSideMenu(false)} openProfile={openSideMenu} />
          </div>
          <div className='flex'>
            <LeftSideBar />
            <Body
              HandleAbout={HandleAbout}
              HandleHome={HandleHome}
              HandleProject={HandleProject}
              HandleContact={HandleContact}
              HandleSkills={HandleSkills}
              activeScroll={activeScroll}
            />
            <RightSideBar
              activeHome={activeHome}
              activeAbout={activeAbout}
              activeContact={activeContact}
              activeSkills={activeSkills}
              activeProjects={activeProjects}
            />
          </div>
        </div>
      </div>
      {console.log(darkMode)}
    </div>

  )
}

export default App
