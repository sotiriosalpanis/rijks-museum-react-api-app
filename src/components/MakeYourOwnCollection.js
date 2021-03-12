import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getAccessKey } from '../auth/key'
import { Link } from 'react-router-dom'

const MakeYourOwnCollections = () => {

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
      <section>
        <div>
          <div className="tile is-ancestor search-box m-4">
            {collection[7].facets.map((facet) => {
              const hex = facet.key.trim().split('#').join('')
              return <div key={facet.key} className="tile is-child">
                <Link to={`/collections/colour/${hex}`}>
                  <div className="colour-button" style={{
                    backgroundColor: `#${hex}`,
                  }}></div>
                </Link>
              </div>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MakeYourOwnCollections

// 
