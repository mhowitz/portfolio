import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-primary text-2xl transition-all drop-shadow-x ${
      isActive
        ? 'text-pink-300 border-b-4 border-pink-200'
        : 'text-emerald-400 hover:text-pink-300'
    }`

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex w-full flex-row justify-center gap-8 p-6">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
        <NavLink to="/my-skills" className={linkClass}>
          My Skills
        </NavLink>
        <a
          href="https://github.com/mhowitz"
          target="_blank"
          rel="noopener noreferrer"
          className="font-primary text-2xl text-emerald-400 hover:text-pink-300 transition-all drop-shadow-x"
        >
          Github
        </a>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden absolute top-0 right-0 p-6">
        <button
          onClick={toggleMenu}
          className="text-pink-300 focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <NavLink to="/" className={linkClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass} onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
            Contact
          </NavLink>
          <NavLink to="/my-skills" className={linkClass} onClick={closeMenu}>
            My Skills
          </NavLink>
          <a
            href="https://github.com/mhowitz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-primary text-2xl text-emerald-400 hover:text-pink-300 transition-all drop-shadow-x"
            onClick={closeMenu}
          >
            Github
          </a>
        </nav>
      </div>
    </>
  )
}

export default Navigation
