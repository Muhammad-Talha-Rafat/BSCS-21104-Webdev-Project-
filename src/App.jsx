import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Favourite from './Favourite.jsx'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MovieList from './MovieList.jsx'

function Header() {
  return (
    <header>
      <nav>
        <Link to={'/'} className={'headerLink'}>Home</Link>
        <Link to={'/favourite'} className={'headerLink'}>Favourite</Link>
      </nav>
      <Routes>
        <Route path='/' element={''} />
        <Route path='/favourite' element={<Favourite />} />
      </Routes>
    </header>
  )

}

function Footer() {
  return(
    <footer>
      <p>Copyright reserved by Information Technology University of Punjab &copy;</p>
    </footer>
  )
}

export default function App(){

  return(
      <Router>
        <Header />
        <MovieList />
        <Footer />
      </Router>
  )

}

