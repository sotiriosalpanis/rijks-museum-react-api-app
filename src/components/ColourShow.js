import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getAccessKey } from '../auth/key'
import CollectionCard from './CollectionCard'


const ColourShow = () => {

  const accessKey = getAccessKey()

  const params = useParams()
  
  const [collection, setCollection] = useState(null)

  const searchURL = `https://www.rijksmuseum.nl/api/en/collection/?key=${accessKey}&imgonly=True&${params.collectionColour}`

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(searchURL)
      setCollection(data.artObjects)
    }
    getData()
  }, [])

  if (!collection) return null
  return (
    <div className="columns is-multiline">
      {collection.map(art => {
        return <CollectionCard 
          key={art.id} 
          {...art}
        />
      })}
    </div>
  )
}

export default ColourShow