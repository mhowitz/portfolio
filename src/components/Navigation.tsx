import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="w-full flex flex-row justify-center gap-8 p-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-primary text-2xl transition-all ${
            isActive
              ? 'text-pink-200 border-b-4 border-pink-200'
              : 'text-emerald-400 hover:text-pink-200'
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `font-primary text-2xl transition-all ${
            isActive
              ? 'text-pink-200 border-b-4 border-pink-200'
              : 'text-emerald-400 hover:text-pink-200'
          }`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `font-primary text-2xl transition-all ${
            isActive
              ? 'text-pink-200 border-b-4 border-pink-200'
              : 'text-emerald-400 hover:text-pink-200'
          }`
        }
      >
        Projects
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `font-primary text-2xl transition-all ${
            isActive
              ? 'text-pink-200 border-b-4 border-pink-200'
              : 'text-emerald-400 hover:text-pink-200'
          }`
        }
      >
        Contact
      </NavLink>

      <a
        href="https://github.com/mhowitz"
        target="_blank"
        rel="noopener noreferrer"
        className="font-primary text-2xl text-emerald-400 hover:text-pink-200 transition-all"
      >
        Github
      </a>
    </nav>
  )
}

export default Navigation
