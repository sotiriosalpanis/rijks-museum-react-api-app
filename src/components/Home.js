import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="hero is-fullheight-with-navbar" 
      style= {{
        backgroundImage: 'url()',
      }}>      
      <div className="home-content">
        <div className="hero-body">
          <p className="title is-1">
          Welcome to the RijksMuseum
          </p>
          <button className="button m-4 p-5">
            <Link to="/collections" className="subtitle is-3">
            Explore the collections
            </Link>
          </button>
          <button className="button p-5">
            <Link to="/make-your-own-collection" className="subtitle is-3">
            Create your own collection
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home