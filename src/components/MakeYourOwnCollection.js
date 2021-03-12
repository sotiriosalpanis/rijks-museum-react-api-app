import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getAccessKey } from '../auth/key'
import { Link } from 'react-router-dom'

const MakeYourOwnCollections = () => {

  const key = getAccessKey()

  const [collection, setCollection] = useState(null) 
  const [backgroundImage, setBackgroundImage] = useState(null) 
  const [options, setOptions] = useState({
    hex: 'All',
    type: 'All',
    place: 'All',
    material: 'All',
    technique: 'All',
  })
  const [search, setSearch] = useState('toppieces=true')

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

  useEffect(() => {
    const searchString = Object.values(options).filter(value => value !== 'All').join('&')
    setSearch(searchString)
  })

  const handleOptionChoice = (event) => {
    const newOptionChoices = { ...options, [event.target.name]: event.target.value }
    setOptions(newOptionChoices)
  }

  if (!collection) return null

  return (
    <div className="hero is-fullheight">
      <img src={backgroundImage} alt="image" 
        style= {{
          position: 'relative',
          top: 0,
        }}
      />       
      <section className="form-collection"
        style= {{
          position: 'absolute',
          top: '10%',
          left: '35%',
          right: '35%',
          backgroundColor: 'rgba(255,255,255, 0.7)',
          opacity: 0.7,
          padding: '15px',
          color: 'white',
        }}
      >
        <p className="title is-2 is-info">Create your own collection</p>
        <p className="subtitle is-4">Select a colour</p> 
        <div className="tile is-ancestor search-box mt-4 pl-2">
          {collection[7].facets.map((facet) => {
            const hex = facet.key.trim().split('#').join('')
            return <div key={facet.key} className="tile is-child">
              <button onClick={handleOptionChoice} className="colour-button" name='hex' value={`f.normalized32Colors.hex=%23${hex}`} style={{
                backgroundColor: `#${hex}`,
              }}></button>
            </div>
          })}
        </div>
        <div >
          <label className='label'>Type</label>
          <select onChange={handleOptionChoice} 
            className="select search-box m-4 control"
            name='type'>
            <option>All</option>
            {collection[2].facets.map((facet) => {
              const type = facet.key.trim()
              return <option key={facet.key} className="subtitle is-3" value={`type=${type}`}>{type}</option>
            })}
          </select>
          <label className='label'>Place</label>
          <select onChange={handleOptionChoice} 
            className="select search-box m-4 control"
            name='place'>
            <option>All</option>
            {collection[4].facets.map((facet) => {
              const place = facet.key.trim()
              return <option key={facet.key} value={`place=${place}`}>{place}</option>
            })}
          </select>
          <label className='label'>Material</label>
          <select onChange={handleOptionChoice} 
            className="select search-box m-4 control"
            name='material'>
            <option>All</option>
            {collection[5].facets.map((facet) => {
              const material = facet.key.trim()
              return <option key={facet.key} value={`material=${material}`}>{material}</option>
            })}
          </select>
          <label className='label'>Technique</label>
          <select onChange={handleOptionChoice} 
            className="select search-box m-4 control"
            name='technique'>
            <option>All</option>
            {collection[6].facets.map((facet) => {
              const technique = facet.key.trim()
              return <option key={facet.key} value={`technique=${technique}`}>{technique}</option>
            })}
          </select>
          <div className="control">
            <button className="button is-dark m-4">
              {(!search) ? <Link to='/collections/colour/all' className="button is-dark">Submit</Link> : <Link to={`/collections/colour/${search}`}>Submit</Link>}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MakeYourOwnCollections