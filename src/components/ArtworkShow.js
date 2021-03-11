import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getAccessKey } from '../auth/key'

const ArtworkShow = () => {

  const [art, setArt] = useState(null)
  const [show, setShow] = useState('hidden')
  const accessKey = getAccessKey()

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

  if (!art) return null
  
  return (
    <div className="image-container">
      <div className='artwork columns'
        style= {{
          backgroundImage: `url(${art.webImage.url})`,
        }}
      >
        <button onClick={handleDetailShow} className="button is-black m-5">i</button>
        <div className={`column is-one-third-desktop is-one-third-tablet p-6 ${show}`}>
          <div>
            <p className="title is-3">{art.title}</p>
            <p className="subtitle is-4 is-italic">{art.label.makerLine}</p>
            <p className="subtitle is-5">{art.label.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtworkShow
