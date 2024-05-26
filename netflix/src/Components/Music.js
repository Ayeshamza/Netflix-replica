import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Music.scss'
import { Link } from 'react-router-dom'





const Card = ({img})=>(
  
    <img  className='cardMusic' src={img} alt='cover'/>
 
  
  )

  
  const Row =({
    
    title,
    arr=[],
  
  })=>(
  
    <div className='music'>
      <h2>{title}</h2>
  
  
  
      <div>
                  
                  {
                    arr.map((item, i)=>(
                      <Link to={`/movie/${item.id} `} style={{textDecoration:"none", color:"white"}}>
                      <  Card key={i} img={`https://image.tmdb.org/t/p/original/${item?item.poster_path:""}`} />
                      </Link>                       
                    ))
                  }
      
      </div>
  
  
    </div>
  )
  




const Music = () => {

    const [musicNetflix, setMusicNetflix] =useState([])

    
  useEffect(()=>{

    const fetchMusic = async()=>{
    const {data : {results}} = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=2577422d36ce438c2bbdf9b891664459&with_genres=10402")
    setMusicNetflix(results)

    };


    fetchMusic();

}, [])


  return (


    
  
    <div className='return'>
      
      <Row title={"NetFlix Music"} arr={musicNetflix}/>
   

    </div>
  )
}

export default Music
