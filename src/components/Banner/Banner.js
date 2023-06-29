import React from 'react'
import './Banner.css'
import { useEffect, useState } from 'react'
import axios from '../constants/Axios'
import { API_KEY } from '../constants/Constants'
import { imageUrl } from '../constants/Constants'

const Banner = () => {

 const [movie, setMovie]=useState() 
 useEffect(()=>{
  axios.get(`discover/movie?api_key=${API_KEY}&with_genres=28`).then((response)=>{

    setMovie(response.data.results[1])
    console.log(response.data.results[0])
  })

 },[])

  return (
    <div style={{backgroundImage:` linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${movie ? imageUrl+ movie.backdrop_path : ""})`}}
    
    className='banner'>
      <div >
        
        <br />
        <h2 className='banner-des'>{movie ? movie.title :""}</h2>
        <br />
        <h6 className='banner-des'>{movie ? movie.overview :""}</h6>
        <br />
        <button className='button-2' ><h6 className='play'>Play</h6></button>


        </div>

    </div>
    
    
  )
}

export default Banner