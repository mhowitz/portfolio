import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function Home() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Front End & Shopify Developer"

  // Typing animation
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.section
          className="min-h-[60vh] flex flex-col justify-center items-center text-center mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl md:text-7xl text-pink-300 font-primary mb-6 drop-shadow-1x"
            variants={fadeInUp}
          >
            {displayedText}
            <span className="animate-pulse drop-shadow-1x"> |</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-4xl text-emerald-400 font-primary mb-4 drop-shadow-x"
            variants={fadeInUp}
          >
            Specializing in Shopify Plus & Custom E-commerce Solutions
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap justify-center pt-5"
            variants={fadeInUp}
          >
            <Link
              to="/projects"
              className="bg-emerald-400 text-black px-8 py-5 rounded-lg font-primary text-xl hover:bg-pink-300 transition-all hover:scale-105 drop-shadow-1x min-w-xs"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="bg-pink-300 text-black px-8 py-5 rounded-lg font-primary text-xl hover:bg-emerald-500 transition-all hover:scale-105 drop-shadow-1x min-w-xs"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              className="bg-gray-800/70 p-8 rounded-lg backdrop-blur-sm text-center hover:bg-gray-800/90 transition-all flex flex-col justify-between"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-5xl font-primary text-pink-300 mb-2 drop-shadow-x">3+</h3>
              <p className="text-3xl text-emerald-400 font-secondary">Years Experience</p>
            </motion.div>

            <motion.div
              className="bg-gray-800/70 p-8 rounded-lg backdrop-blur-sm hover:bg-gray-800/90 transition-all flex flex-col justify-between"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-primary text-center text-pink-300 mb-3 drop-shadow-x">Core Skills</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">React</span>
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">TypeScript</span>
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">JavaScript</span>
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">HTML/CSS</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800/70 p-8 rounded-lg backdrop-blur-sm hover:bg-gray-800/90 transition-all flex flex-col justify-between"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-primary text-center text-pink-300 mb-3 drop-shadow-x">Tools</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Shopify Plus</span>
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Git</span>
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Chrome DevTools</span>
                <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Celigo</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl text-pink-300 font-primary text-center mb-12 drop-shadow-1x">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link to="/pitviperb2b" className="block bg-gray-800/70 p-8 rounded-lg backdrop-blur-sm hover:bg-gray-800/90 transition-all group">
                <h3 className="text-3xl font-primary text-emerald-400 mb-4 group-hover:text-pink-300 transition-colors drop-shadow-x">
                  Pit Viper B2B
                </h3>
                <p className="text-gray-300 mb-4 font-secondary">
                  Custom wholesale platform with React checkout extensions, tiered pricing, and NetSuite integration
                </p>
                <div className="flex flex-wrap gap-2 font-secondary">
                  <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Shopify Plus</span>
                  <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">React</span>
                  <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">TypeScript</span>
                  <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Celigo</span>
                  <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Netsuite</span>
                </div>
                <p className="text-pink-300 mt-4 group-hover:translate-x-2 transition-transform font-secondary text-lg drop-shadow-x">View Project
                  →</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link to="/pitviper" className="block bg-gray-800/70 p-8 rounded-lg backdrop-blur-sm hover:bg-gray-800/90 transition-all group">
                <h3 className="text-3xl font-primary text-emerald-400 mb-4 group-hover:text-pink-300 transition-colors drop-shadow-x">
                  Pit Viper
                </h3>
                <p className="text-gray-300 mb-4 font-secondary">
                  In-house Shopify developer maintaining custom theme, integrating apps like Rebuy and Rivo, managing major redesigns
                </p>
                <div className="flex flex-wrap gap-2 font-secondary">
                  <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Shopify Plus</span>
                  <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Liquid</span>
                  <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">JavaScript</span>
                  <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">React</span>
                  <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Shopify API</span>
                </div>
                <p className="text-pink-300 mt-4 group-hover:translate-x-2 transition-transform font-secondary text-lg drop-shadow-x">View Project →</p>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/projects"
              className="inline-block text-emerald-400 font-primary text-3xl hover:text-pink-300 transition-colors drop-shadow-x"
            >
              View All Projects →
            </Link>
          </motion.div>
        </motion.section>
      </main>
    </>
  )
}

export default Home
