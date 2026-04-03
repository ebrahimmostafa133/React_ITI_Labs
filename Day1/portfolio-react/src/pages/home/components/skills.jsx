import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faHtml5, faCss, faNodeJs } from '@fortawesome/free-brands-svg-icons'

function Skills() {
  const skills = [
    { name: 'React', icon: faReact },
    { name: 'JavaScript', icon: faJsSquare },
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss },
    { name: 'Node.js', icon: faNodeJs },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container-max mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>

        <div className="flex flex-wrap gap-3 mt-4">
          {skills.map(s => (
            <div key={s.name} className="flex items-center gap-2 bg-white p-3 rounded shadow-sm transform transition hover:scale-105">
              <FontAwesomeIcon icon={s.icon} className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-medium">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
