import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getAccessKey } from '../auth/key'

const Collections = () => {

  const key = getAccessKey()

  const [collection, setCollection] = useState([])  

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/?key=${key}&imgonly=True&ondisplay=True&ps=20&s=chronologic`)
      setCollection(data.facets)
    }
    getData()
  }, [])

  console.log(collection[0].facets)


  return (
    <div className="show">
      {collection[0].facets.map(facet => {
        return <p key={facet.key}>{facet.key}</p>
      })}
    </div>
  )
}

export default Collections
