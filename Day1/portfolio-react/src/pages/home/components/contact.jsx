import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-max mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Get in touch</h3>
            <p className="text-gray-600 mt-2">Feel free to reach out for collaborations or just a friendly hello.</p>

            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-indigo-600" />
                <a href="mailto:you@example.com" className="text-gray-700">you@example.com</a>
              </li>

              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-indigo-600" />
                <a href="tel:+1234567890" className="text-gray-700">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>

          <form className="bg-white p-6 rounded shadow">
            <label className="block">
              <span className="text-sm text-gray-700">Name</span>
              <input className="mt-1 block w-full border border-gray-200 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 transition" placeholder="Your name" />
            </label>

            <label className="block mt-4">
              <span className="text-sm text-gray-700">Email</span>
              <input className="mt-1 block w-full border border-gray-200 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 transition" placeholder="you@example.com" />
            </label>

            <label className="block mt-4">
              <span className="text-sm text-gray-700">Message</span>
              <textarea className="mt-1 block w-full border border-gray-200 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 transition" rows="4" placeholder="Say hello"></textarea>
            </label>

            <button type="submit" className="mt-4 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-white px-4 py-2 rounded">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
