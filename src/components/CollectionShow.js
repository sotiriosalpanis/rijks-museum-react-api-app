import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getAccessKey } from '../auth/key'
import CollectionCard from './CollectionCard'

const CollectionShow = () => {

  const key = getAccessKey()

  const [collection, setCollection] = useState([])  

  useEffect(() => {
    const getData = async() => {
      // const { data } = await axios.get('https://www.rijksmuseum.nl/api/en/collection?RP&key=CIMyuFiL&toppieces=True&ondisplay=true')
      const { data } = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/?key=${key}&imgonly=True&ps=20&s=chronologic`)
      setCollection(data.artObjects)
    }
    getData()
  }, [])

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


