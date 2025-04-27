'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Hamburger button, only visible on mobile */}
        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className={`hamburger ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger ${menuOpen ? 'open' : ''}`} />
        </button>

        {/* Nav links */}
        <ul className={`nav-list${menuOpen ? ' open' : ''}`}>
          <li>
            <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="nav-link" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
