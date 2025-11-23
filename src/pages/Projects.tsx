import Header from '../components/Header'

function Projects() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8 text-white">
        <h2 className="text-4xl mb-8 text-pink-200 font-primary">Projects</h2>
        <div className="max-w-4xl">
          <p className="text-xl text-gray-300 mb-4">
            Check out my work below!
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Add your projects here */}
            <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2 text-emerald-400">Project 1</h3>
              <p className="text-gray-400">Description of your project</p>
            </div>
            <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2 text-emerald-400">Project 2</h3>
              <p className="text-gray-400">Description of your project</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Projects
