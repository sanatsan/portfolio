import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Projects from './components/project/project'
import Education from './components/education/education'
// import Portfolio from './components/portfolio/portfolio'
// import Testimonial from './components/testimonial/testimonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>    
    <Header/>
    <Nav/>
    <About/>
    <Education/>
    <Projects/>
    <Experience/>
    {/* <Portfolio/> */}
   
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
