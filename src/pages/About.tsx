import Header from '../components/Header'

function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8 text-white">
        <h2 className="text-4xl mb-8 text-pink-200 font-primary">About Me</h2>
          <div className="max-w-4xl">
              <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                  <p className="text-lg text-gray-400 pb-3">
                      My name is Mikayla Howitz, and I’m a web developer based in Salt Lake City, Utah.
                      For the past three years, I’ve specialized in Shopify Plus e-commerce development, maintaining custom themes, building out new features, and creating smooth, scalable experiences for both customers and operations teams.
                  </p>
                  <p className="text-lg text-gray-400 pb-3">
                      I’ve worked across multiple Shopify stores, integrating apps like Rebuy, Rivo, SavedBy, Gorgios and much more.
                      I’ve also supported backend operations with tools like NetSuite, Celigo, and various custom integrations.
                  </p>
                  <p className="text-lg text-gray-400 pb-3">
                      Outside of work, I’m a skateboarder, snowboarder, and traveler.
                  </p>
              </div>
          </div>
      </main>
    </>
)
}

export default About
