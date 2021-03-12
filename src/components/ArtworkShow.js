import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getAccessKey } from '../auth/key'

const ArtworkShow = () => {

  const [art, setArt] = useState(null)
  const [show, setShow] = useState('hidden')
  const accessKey = getAccessKey()

  const history = useHistory()
  // console.log(history)

  const { id } = useParams()

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/${id}?key=${accessKey}`)
      setArt(data.artObject)
    }
    getData()
  })

  const handleDetailShow = () => {
    if (show === 'hidden') setShow('show')
    if (show === 'show') setShow('hidden')
  }

  const handleReturn = () => {
    console.log('Back')
    history.goBack()
  }

  if (!art) return null
  
  return (
    <div className="image-container">
      <img src={art.webImage.url} className='artwork columns'/>
      <button onClick={handleDetailShow} className="button is-black m-5 artwork-info-button">i</button>
      <button onClick={handleReturn} className="button is-black m-7 return-button">Back to search results</button>
      <div className={`column is-one-third-desktop is-one-third-tablet p-6 ${show} artwork-info`}>
        <div>
          <p className="title is-3">{art.title}</p>
          <p className="subtitle is-4 is-italic">{art.label.makerLine}</p>
          <p className="subtitle is-5">{art.label.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ArtworkShow
