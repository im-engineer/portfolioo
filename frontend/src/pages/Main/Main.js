import React from 'react'
import About from '../../component/About/About'
import Landing from '../../component/LandingPage/Landing'
import Projects from '../../component/Projects/Project'
import Skills from '../../component/Skills/Skills'
import Experience from '../../component/Experience/Experience'
import Contact from '../../component/Contact/Contact'

export default function Main() {
  return (
    <div>
        <title>SSR_Portfolio</title>
        <Landing/>
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Contact/>
    </div>
  )
}
 
