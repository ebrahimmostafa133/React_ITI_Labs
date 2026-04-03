function About() {
  return (
    <section id="about" className="py-20">
      <div className="container-max mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-4">About me</h2>
        <p className="text-gray-600">I'm a front-end developer focused on building clean, accessible user experiences using React and Tailwind CSS. I enjoy turning designs into interactive interfaces and learning new tools.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Experience</h3>
            <p className="text-sm text-gray-500">2+ years building responsive interfaces and small apps.</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Focus</h3>
            <p className="text-sm text-gray-500">React, Tailwind CSS, Vite, accessibility and performance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
