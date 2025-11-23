import Header from '../components/Header'

function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8 text-white">
        <h2 className="text-4xl mb-8 text-pink-200 font-primary">About Me</h2>
        <div className="max-w-4xl">
          <p className="text-xl text-gray-300 mb-4">
            Welcome to my portfolio! This is the About Me page.
          </p>
          <p className="text-lg text-gray-400">
            Add your bio, skills, and experience here.
          </p>
        </div>
      </main>
    </>
  )
}

export default About
