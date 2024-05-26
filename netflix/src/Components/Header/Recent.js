import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Card = ({ img }) => (
  <img className='cardMusic' src={img} alt='cover' />

)

const Row = ({

  title,
  arr = [],

}) => (

  <div className='music'>
    <h2>{title}</h2>

    <div>

      {
        arr.map((item, i) => (
          <Link to={`/movie/${item.id}`} style={{textDecoration:"none", color:"white"}}>
          <  Card key={i} img={`https://image.tmdb.org/t/p/original/${item?item.poster_path:""}`} />
          </Link>       
        ))
      }

    </div>
  </div>
)

const Recent = () => {

  const [recentMovie, setRecentMovie] = useState([])
  useEffect(() => {

    const fetchRecent = async () => {
      const { data: { results } } = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=2577422d36ce438c2bbdf9b891664459&with_genres=27")
      setRecentMovie(results)

    };

    fetchRecent();

  }, [])
  return (

<div className='return'>
      <Row title={"Trending"} arr={recentMovie} />
    </div>
  )
}

export default Recent
