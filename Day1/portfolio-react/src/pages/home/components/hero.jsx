import heroImg from '../../../assets/hero.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container-max mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hi, I'm <span className="text-indigo-600">Ebrahim Mostafa</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-lg">I build responsive, accessible web interfaces with React and Tailwind.</p>

          <div className="mt-6 flex gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              <FontAwesomeIcon icon={faEnvelope} />
              Contact me
            </a>
            <a href="/Ebrahim_Mostafa_CV.pdf" className="inline-flex items-center gap-2 border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img src={heroImg} alt="Hero" className="w-64 h-64 object-cover rounded-2xl shadow-xl ring-1 ring-indigo-50" />
        </div>
      </div>
    </section>
  )
}

export default Hero
