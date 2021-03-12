import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getAccessKey } from '../auth/key'
import CollectionCard from './CollectionCard'


const ColourShow = () => {

  const accessKey = getAccessKey()

  const { collectionColour } = useParams()
  
  const [collection, setCollection] = useState(null)  

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/?key=${accessKey}&imgonly=True&f.normalized32Colors.hex=%23${collectionColour}`)
      setCollection(data.artObjects)
    }
    getData()
  }, [])
  
  if (!collection) return null
  console.log('COLOUR AGAIN', collectionColour)
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