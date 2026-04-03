import About from "./components/about"
import Hero from "./components/hero"
import Nav from "./components/nav"
import Project from "./components/project"
import Skills from "./components/skills"
import Contact from "./components/contact"
import Footer from "./components/footer"

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
