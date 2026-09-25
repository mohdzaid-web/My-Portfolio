import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Footer from "./components/footer/Footer"
import Herader from "./components/header/Header"
import Nav from "./components/nav/nav"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"
import Testimonial from "./components/testimonial/Testimonial"


function App() {
  

  return (
    <>
    <Herader/>
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Services />
    <Testimonial />
    <Contact />
    <Footer/>

    </>
  )
}

export default App
