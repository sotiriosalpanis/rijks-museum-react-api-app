import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getAccessKey } from '../auth/key'
import { Link } from 'react-router-dom'


const Collections = () => {

  const key = getAccessKey()

  const [collection, setCollection] = useState(null)  

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/?key=${key}&imgonly=True&ondisplay=True&ps=20&s=chronologic`)
      setCollection(data.facets)
    }
    getData()
  }, [])

  if (!collection) return null


  return (
    <div className="hero is-fullheight"
      style= {{
        backgroundImage: 'url(https://lh3.googleusercontent.com/J-mxAE7CPu-DXIOx4QKBtb0GC4ud37da1QK7CzbTIDswmvZHXhLm4Tv2-1H3iBXJWAW_bHm7dMl3j5wv_XiWAg55VOM=s0)',
      }}>
      <div>
        <div className="columns">
          <div className="column is-one-quarter-desktop is-one-third-tablet p-6 show">
            <p className="title is-3 pb-5">Visit one of our rooms</p>
            {collection[0].facets.map((facet) => {
              return <div key={facet.key} className="subtitle is-5">
                <Link to={`/collections/${facet.key}`}>
                  <p>{facet.key}</p>
                </Link>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections


