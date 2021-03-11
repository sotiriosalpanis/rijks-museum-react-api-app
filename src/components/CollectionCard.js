import React from 'react'
import { Link } from 'react-router-dom'

const CollectionCard = ({ title, webImage, principalOrFirstMaker, objectNumber }) => {

  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/gallery/${objectNumber}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{title}</div>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={webImage.url} alt={title} />
            </figure>
          </div>
          <div className="card-content">
            <h5>{principalOrFirstMaker}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CollectionCard
