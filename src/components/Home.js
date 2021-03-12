import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'

const Home = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className="hero is-fullheight-with-navbar is-info">
      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
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