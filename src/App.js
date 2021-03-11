import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Collections from './components/Collections'
import CollectionShow from './components/CollectionShow'
import ArtworkShow from './components/ArtworkShow'

function App() {
  return ( 
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/collections">
          <Collections />
        </Route>
        <Route exact path="/collections/:collectionId">
          <CollectionShow />
        </Route>
        <Route path="/collections/gallery/:id">
          <ArtworkShow />
        </Route>
      </Switch>
    </BrowserRouter> 
  )
}

export default App
