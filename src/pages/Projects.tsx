import Header from '../components/Header'
import {NavLink} from "react-router-dom";

function Projects() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8 text-white">
        <h2 className="text-4xl mb-8 text-pink-300 font-primary drop-shadow-x">Projects</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <NavLink to="/pitviperb2b"
                     className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm font-secondary flex flex-col justify-between items-stretch">
              <div>
                <h3 className="text-4xl font-primary mb-2 text-emerald-400 drop-shadow-x">Pit Viper B2B</h3>
                <p className="text-gray-400">Custom Shopify theme for Wholesale.</p>
              </div>
              <div className="flex flex-row gap-2 py-2 flex-wrap">
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Shopify Plus</span>
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Netuite</span>
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Celigo</span>
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Shopify API</span>
              </div>
            </NavLink>
            <NavLink to="/pitviper"
                     className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm font-secondary flex flex-col justify-between items-stretch">
              <div>
                <h3 className="text-4xl font-primary mb-2 text-emerald-400 drop-shadow-x">Pit Viper</h3>
                <p className="text-gray-400">Assisted and maintained development of a custom Shopify theme for <a href="https://pitviper.com">Pit
                  Viper</a>.</p>
              </div>
              <div className="flex flex-row gap-2 py-2 flex-wrap">
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Shopify Plus</span>
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Liquid</span>
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Typescript</span>
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Tailwind CSS</span>
              </div>
            </NavLink>
            <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm font-secondary flex flex-col justify-between items-stretch">
              <div>
                <h3 className="text-4xl font-primary mb-2 text-emerald-400 drop-shadow-x">Align Spa</h3>
                <p className="text-gray-400">Built a SquareSpace website for the best Park City Day Spa.</p>
              </div>
              <div className="flex flex-row gap-2 py-2 flex-wrap">
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Squarespace</span>
              </div>
            </div>
            <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm font-secondary flex flex-col justify-between items-stretch">
              <div>
                <h3 className="text-4xl font-primary mb-2 text-emerald-400 drop-shadow-x">More Coming Soon..</h3>
                <p className="text-gray-400"></p>
              </div>
              <div className="flex flex-row gap-2 py-2 flex-wrap">
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Projects
