import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getAccessKey } from '../auth/key'
import CollectionCard from './CollectionCard'

const CollectionShow = () => {

  const accessKey = getAccessKey()

  let { collectionId } = useParams()

  collectionId = collectionId.split(' ').join('%20')

  const [collection, setCollection] = useState(null)  

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/?key=${accessKey}&imgonly=True&ps=20&s=chronologic&f.hnrCode.section.sort=${collectionId}`)
      setCollection(data.artObjects)
      console.log(collectionId)
      console.log(data)
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

export default CollectionShow


