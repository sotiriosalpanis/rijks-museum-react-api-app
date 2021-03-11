import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/">
            <img className="navbar-item image pt-5 pl-2" width="124" height="64" src="https://img2.pngio.com/rijksmuseum-amsterdam-time-machine-rijksmuseum-png-3401_421.png" alt="Rijksmuseum Logo" />
          </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
              More
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                About
                </a>
                <Link to="/collections" className="navbar-item">
                Collections
                </Link>
                <Link to="/collections/collection" className="navbar-item">
                Collection
                </Link>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                Report an issue
                </a>
              </div>
            </div>
            
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-info">
                  <strong>English</strong>
                </a>
                <a className="button is-light">
                Dutch
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
