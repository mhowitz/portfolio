import Header from '../components/Header'
import { motion } from 'framer-motion'

function About() {
    const fadeInFromLeft = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 1.2, ease: "easeOut" }
    }
    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.4
            }
        }
    }

    return (
    <>
      <Header />
      <main className="container mx-auto p-8 text-white">
          <motion.section initial="initial"
                          animate="animate"
                          variants={staggerContainer}>
              <motion.h2
                className="text-4xl mb-8 text-pink-300 font-primary drop-shadow-x"
                variants={fadeInFromLeft}
              >
                About Me
              </motion.h2>
              <motion.div className="max-w-4xl mx-auto">
                  <motion.div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm"
                              variants={fadeInFromLeft}>
                      <p className="text-lg text-gray-400 pb-3">
                          My name is Mikayla Howitz, and I’m a web developer based in Salt Lake City, Utah.
                          For the past three years, I’ve specialized in Shopify Plus e-commerce development, maintaining custom themes, building out
                          new features, and creating smooth, scalable experiences for both customers and operations teams.
                      </p>
                      <p className="text-lg text-gray-400 pb-3">
                          I’ve worked across multiple Shopify stores, integrating apps like Rebuy, Rivo, SavedBy, Gorgios and much more.
                          I’ve also supported backend operations with tools like NetSuite, Celigo, and various custom integrations.
                      </p>
                      <p className="text-lg text-gray-400 pb-3">
                          Outside of work, I’m a skateboarder, snowboarder, and traveler.
                      </p>
                  </motion.div>
              </motion.div>
          </motion.section>

      </main>
    </>
    )
}

export default About
