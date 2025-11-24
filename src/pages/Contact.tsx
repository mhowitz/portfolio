import Header from '../components/Header'

function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8 text-white">
        <h2 className="text-4xl mb-8 text-pink-300 font-primary drop-shadow-x">Contact Me</h2>
        <div className="max-w-4xl">
          <div className="space-y-4 font-secondary">
            <div>
              <h3 className="text-3xl font-bold text-emerald-400 mb-2 font-secondary">Email</h3>
              <a href="mailto:mikaylahowitz@gmail.com" className="text-lg text-gray-200 hover:text-pink-300 font-secondary">
                mikaylahowitz@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-400 mb-2 font-secondary">GitHub</h3>
              <a
                href="https://github.com/mhowitz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-200 hover:text-pink-300 font-secondary"
              >
                github.com/mhowitz
              </a>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-400 mb-2 font-secondary">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/mikayla-howitz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-200 hover:text-pink-300 font-secondary"
              >
                mikayla-howitz
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact
