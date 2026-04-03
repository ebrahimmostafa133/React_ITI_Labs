import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Nav() {
  return (
    <nav className="fixed w-full bg-white/70 backdrop-blur py-3 z-50">
      <div className="container-max mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-indigo-600">Ebrahim Mostafa</a>

        <ul className="hidden md:flex gap-6 text-gray-700">
          <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-600">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
          <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>

        <div className="flex items-center gap-3">
          <a href="https://github.com/ebrahimmostafa133" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-gray-900">
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/ebrahim-mostafa-315756243/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800">
            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
