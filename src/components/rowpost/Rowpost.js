import React,{useEffect,useState} from 'react'
import axios from '../constants/Axios'
import { API_KEY, imageUrl} from '../constants/Constants'
import './Rowpost.css'
import Youtube from 'react-youtube'
const Rowpost = (props) => { 
    const [series, setSeries]= useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(()=>{
     axios.get(props.url).then(response=>{
       
        setSeries(response.data.results)
        console.log(response.data.results)
     })
    },[] )


    const opts: YouTubeProps['opts'] = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    }

    const handleMovie =(id)=>{
        
        axios.get(`/movie/${id}/videos?language=en-US'&api_key=${API_KEY}`).then(response=>{
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        
        }else{console.log('array empty')}
        })
    }


    
  return (
    <div className='content-item'>
        <h4 className='titles'>{props.title}</h4>
        <div className='posters'>
          
          {series.map((obj)=>{
            return(
             (<img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.poster_path
            }`} alt="" />)
           
          
         ) })} 
      </div>
       {urlId && <  Youtube opts={opts} videoId={urlId.key} /> }
       
    </div>
  )
}

export default Rowpost