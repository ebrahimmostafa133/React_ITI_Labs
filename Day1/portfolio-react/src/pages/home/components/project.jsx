import bookstoreImg from '../../../assets/projects/bookstore.png'
import socialImg from '../../../assets/projects/social.png'
import ecommerceImg from '../../../assets/projects/ecommerce.png'

function Project() {
  const projects = [
    {
      id: 1,
      title: 'Bookstore (Latest)',
      desc: 'Full-stack bookstore — working on both front-end and back-end.',
      img: bookstoreImg,
      link: 'https://book-store-front-end-angular.vercel.app/login'
    },
    {
      id: 2,
      title: 'Social Media App',
      desc: 'Social networking platform with real-time updates and user interactions.',
      img: socialImg,
      link: 'https://social-g7h6qmykg-ebrahim-mostafas-projects.vercel.app'
    },
    {
      id: 3,
      title: 'E-commerce Project',
      desc: 'Online store with browsing, cart management and checkout.',
      img: ecommerceImg,
      link: 'https://heroic-semifreddo-f8b898.netlify.app/'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container-max mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold">Selected Projects</h2>
          <p className="text-sm text-gray-500">Featured work — first three projects from my labs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map(p => (
            <article key={p.id} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 group">
              <div className="relative h-44 bg-gray-100 dark:bg-gray-800">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{p.desc}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs font-medium bg-indigo-50 text-indigo-700 rounded">Angular</span>
                    <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-700 rounded">Full‑Stack</span>
                  </div>

                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800">
                    Live Demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
