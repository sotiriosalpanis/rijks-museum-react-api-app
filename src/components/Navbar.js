import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [language, setLanguage] = useState('English')

  const handleLanguage = (event) => {
    if (event.target.innerHTML === 'English') setLanguage('English')
    if (event.target.innerHTML === 'Dutch') setLanguage('Dutch')
  }

  window.localStorage.setItem('language', language)

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/">
            <img className="navbar-item image pt-5 pl-2" width="124" height="64" src="https://img2.pngio.com/rijksmuseum-amsterdam-time-machine-rijksmuseum-png-3401_421.png" alt="Rijksmuseum Logo" />
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
              Explore
              </a>
              <div className="navbar-dropdown">
                <Link to="/" className="navbar-item">
                Home
                </Link>
                <Link to="/collections" className="navbar-item">
                Collections
                </Link>
                <Link to="/make-your-own-collection/" className="navbar-item">
                Make your own collection
                </Link>
              </div>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <a onClick={handleLanguage} className={language === 'English' ? 'button is-black' : 'button is-light'}>
                  English
                </a>
                <a onClick={handleLanguage} className={language === 'Dutch' ? 'button is-black' : 'button is-light'}>
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

{/* <input className={`input ${errors.password ? 'is-danger' : ''}`} */}
