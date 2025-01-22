import React from 'react'
import Navbar from './components/Navbar'
import SlideShowAnimation from './components/SlideShowAnimation'
import SearchBar from './components/SearchBar'
import ShareMessage from './components/ShareMessage'
import AnimeCard from './components/AnimeCard'

const App = () => {
  return (
    <div>
      <Navbar />
      <SlideShowAnimation />
      <SearchBar />
      <ShareMessage />
      <AnimeCard url="https://i.pinimg.com/736x/a4/d1/58/a4d15849e80640fbabd848ef13e3a9eb.jpg" title="Death Note" />
    </div>
  )
}

export default App
