import Header from '../components/Header'
import {NavLink} from "react-router-dom";

function Projects() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8 text-white">
        <h2 className="text-4xl mb-8 text-pink-200 font-primary">Projects</h2>
        <div className="max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <NavLink to="/pitviperb2b" className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-secondary mb-2 text-emerald-400">Pit Viper B2B</h3>
              <p className="text-gray-400">Custom Shopify theme for Wholesale.</p>
              <div className="flex flex-row gap-2 py-2 flex-wrap">
                <div className="bg-emerald-400 rounded-full">
                  <p className="px-2 py-1 drop-shadow-1x font-secondary">Shopify Plus</p>
                </div>
                <div className="bg-emerald-400 rounded-full">
                  <p className="px-2 py-1 drop-shadow-1x font-secondary">Netsuite</p>
                </div>
                <div className="bg-emerald-400 rounded-full">
                  <p className="px-2 py-1 drop-shadow-1x font-secondary">Celigo</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/pitviper" className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-secondary mb-2 text-emerald-400">Pit Viper</h3>
              <p className="text-gray-400">Assisted in development a custom Shopify theme for <a href="https://pitviper.com">Pit Viper</a>.</p>
              <div className="flex flex-row gap-2 py-2 flex-wrap">
                <div className="bg-emerald-400 rounded-full">
                  <p className="px-2 py-1 drop-shadow-1x font-secondary">Shopify Plus</p>
                </div>
                <div className="bg-emerald-400 rounded-full">
                  <p className="px-2 py-1 drop-shadow-1x font-secondary">Netsuite</p>
                </div>
                <div className="bg-emerald-400 rounded-full">
                  <p className="px-2 py-1 drop-shadow-1x font-secondary">Celigo</p>
                </div>
                <div className="bg-emerald-400 rounded-full">
                  <p className="px-2 py-1 drop-shadow-1x font-secondary">Rebuy</p>
                </div>
              </div>
            </NavLink>
            <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-secondary mb-2 text-emerald-400">Align Spa</h3>
              <p className="text-gray-400">Built a SquareSpace website for the best Park City Day Spa.</p>
              <div className="flex flex-row gap-2 py-2 flex-wrap">
                <div className="bg-emerald-400 rounded-full">
                  <p className="px-2 py-1 drop-shadow-1x font-secondary">Squarespace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Projects
