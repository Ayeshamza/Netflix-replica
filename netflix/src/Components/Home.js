import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from "axios"
//import { GrPlayFill } from 'react-icons/gr'
//import { RiPlayList2Line } from 'react-icons/ri'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
//import Cards from './Cards';

const apiKey = "2577422d36ce438c2bbdf9b891664459";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original"
const upcoming = "upcoming";
const popular = "popular";
const topRated = "top_rated";
const nowPlaying = "now_playing";



const Card = ({ img }) => (
 
  <img className='card' src={img} alt='cover' />

)


const Row = ({

  title,
  arr = [],

}) => (

  <div className='row'>
    <h2>{title}</h2>



    <div>

      {
        arr.map((item, i) => (
         

          <Link to={`/movie/${item.id}`} style={{textDecoration:"none", color:"white"}}>
          <  Card key={i} img={`${imgUrl}/${item?item.poster_path:""}`} />
          </Link>
        ))

        
      }
      

    </div>


  </div>
)


const Home = () => {

  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [populatMovies, setPopularMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [comedyMovies, setComedyMovies] = useState([])
  const [fictionMovies, setFictionMovies] = useState([])
  const [warMovies, setWarMovies] = useState([])
  const [horrorMovies, setHorrorMovies] = useState([])



  useEffect(() => {

    const fetchUpcoming = async () => {
         const { data: { results } } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
      setUpcomingMovies(results)

    };

    const fetchPopular = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
      setPopularMovies(results)

    };

    const fetchTopRated = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)
      setTopRatedMovies(results)

    };

    const fetchNowPlaying = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
      setNowPlayingMovies(results)

    };

    const fetchComedy = async () => {
      const { data: { results } } = await axios.get(`${url}/discover/movie?api_key=${apiKey}&with_genres=10749`)
      setComedyMovies(results)

    };

    const fetchFiction = async () => {
      const { data: { results } } = await axios.get(`${url}/discover/movie?api_key=${apiKey}&with_genres=878`)
      setFictionMovies(results)

    };

    const fetchWar = async () => {
      const { data: { results } } = await axios.get(`${url}/discover/movie?api_key=${apiKey}&with_genres=10752`)
      setWarMovies(results)

    };

    const fetchHorror = async () => {
      const { data: { results } } = await axios.get(`${url}/discover/movie?api_key=${apiKey}&with_genres=27`)
      setHorrorMovies(results)

    };

    fetchFiction();
    fetchComedy();
    fetchUpcoming();
    fetchNowPlaying();
    fetchTopRated();
    fetchPopular();
    fetchWar();
    fetchHorror();

  }, [])

  return (


    <section className='home'>


      <Carousel
        showThumbs={false}
        autoPlay={false}
        transitionTime={6}
        infiniteLoop={true}
        showStatus={false}
      >
        {
          populatMovies.map(movie => (
            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
              <div className="banner">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
               
          
                <div className="posterImage__description">{movie ? movie.overview : ""}</div>
              </div>
            </Link>
          ))
        }
      </Carousel>

      




      <Row title={"Popular on Netflix"} arr={populatMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />
      <Row title={"Upcoming"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Comedy"} arr={comedyMovies} />
      <Row title={"Science Fiction"} arr={fictionMovies} />
      <Row title={"Action"} arr={warMovies} />
      <Row title={"Horror"} arr={horrorMovies} />







    </section>
  )
}

export default Home

