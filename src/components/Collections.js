import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getAccessKey } from '../auth/key'
import { Link } from 'react-router-dom'


const Collections = () => {

  const key = getAccessKey()

  const [collection, setCollection] = useState(null)  
  const [backgroundImage, setBackgroundImage] = useState(null) 

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/?key=${key}&imgonly=True&ondisplay=True&ps=20&s=chronologic`)
      setCollection(data.facets)
    }
    getData()
  }, [])

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/?key=${key}&toppieces=true`)
      setBackgroundImage(data.artObjects[Math.floor(Math.random() * data.artObjects.length)].webImage.url)
    }
    getData()
  }, [])

  if (!collection) return null


  return (
    <div className="hero is-fullheight">
      <img src={backgroundImage} alt="image" 
        style= {{
          position: 'relative',
          top: 0,
        }}
      />       
      <section
        style= {{
          position: 'absolute',
        }}
      >
        <div className="columns">
          <div className="column p-6 show">
            <p className="title is-2 pb-5">Visit one of our rooms</p>
            {collection[0].facets.map((facet) => {
              return <div key={facet.key} className="subtitle is-4">
                <Link to={`/collections/${facet.key}`}>
                  <p>{facet.key}</p>
                </Link>
              </div>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Collections