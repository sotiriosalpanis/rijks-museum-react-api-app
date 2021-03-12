import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getAccessKey, languageSelected } from '../auth/key'

const ArtworkShow = () => {

  const [art, setArt] = useState(null)
  const [show, setShow] = useState('hidden')

  const language = languageSelected()
  console.log(language)

  const accessKey = getAccessKey()

  const history = useHistory()

  const { id } = useParams()

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`https://www.rijksmuseum.nl/api/${language}/collection/${id}?key=${accessKey}`)
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

  const handleAudioPlay = event => {
    const audioMessage = new SpeechSynthesisUtterance(event.target.value)
    window.speechSynthesis.speaking ? window.speechSynthesis.cancel() : window.speechSynthesis.speak(audioMessage)
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
          <button onClick={handleAudioPlay} value={art.title + art.label.makerLine + art.label.description} className="mt-5">Audio on/off</button>
        </div>
      </div>
    </div>
  )
}

export default ArtworkShow
