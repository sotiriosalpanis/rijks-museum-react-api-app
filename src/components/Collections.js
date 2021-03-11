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
    <div className="show">
      {collection[0].facets.map((facet) => {
        return <Link to={`/collections/${facet.key}`} key={facet.key}>{facet.key}</Link>
      })}
    </div>
  )
}

export default Collections
