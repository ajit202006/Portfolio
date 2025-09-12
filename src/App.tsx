import About from "./sections/About"
import Contact from "./sections/Contact"
import Education from "./sections/Education"
import Navbar from "./sections/Navbar"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

function App() {

  return (
    <>
      <div className='relative w-screen h-screen scroll-smooth bg-[#050816] text-white overflow-x-none overflow-y-auto snap-y snap-mandatory *:snap-center [&::-webkit-scrollbar]:hidden'>
        <Navbar />
        <section id="about" className="w-screen h-screen flex flex-col items-center justify-center">
          <About />
        </section>
        <section id="skills" className="w-screen h-screen flex items-center justify-center">
          <Skills />
        </section>
        <section id="projects" className="w-screen h-screen flex items-center justify-center">
          <Projects />
        </section>
        <section id="education" className="w-screen h-screen flex items-center justify-center">
          <Education />
        </section>
        <section id="contact" className="w-screen h-screen flex items-center justify-center">
          <Contact />
        </section>
      </div>
    </>
  )
}

export default App
