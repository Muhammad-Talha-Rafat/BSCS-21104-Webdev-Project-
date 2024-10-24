import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function MovieList() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await axios.get('https://www.omdbapi.com/?apikey=96692446&')
          setMovies([response.data])
          console.log([response.data])
        }
        catch(error){
          setError(error.message)
        }
        finally {
          setLoading(false)
        }
  
  
      }
      fetchMovies()
    }, [])
  
    if (loading) return (<p>Loading...</p>)
    if (error) return (<p>Error: {error}</p>)

    return (
        <ul>
        {movies.map(movie => {
            return (<li key={movie.imdbID}>{movie.Title}</li>)
        })}
        </ul>
    )

}