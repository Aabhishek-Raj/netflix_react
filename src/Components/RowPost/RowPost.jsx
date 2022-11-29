import { useEffect, useState } from 'react';
import './RowPost.css'
import axios from '../../Axios';
import { API_KEY, imageUrl } from '../../Constants/Constants'
import YouTube from 'react-youtube';

const RowPost = (props) => {

    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        }).catch(err => {
            alert('Network Error')
        })
    }, [])



    
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  const handleVideo = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response => {
        if(response.data.results.length !==0){
            setUrlId(response.data.results[0])

        }else{
            console.log('Arraaay is Empty');
        }
    }))
}
    

    return ( 
        <div className="row">
            <h2>{ props.title }</h2>
            <div className="posters">
                { movies.map((obj) => {
                    return <img onClick={() => {handleVideo(obj.id)}} className={props.isSmall ? "smallPoster" : "poster"} 
                    src={props.isSmall ? `${imageUrl+obj.poster_path}` : `${imageUrl+obj.backdrop_path}` }alt="poster" />
                })}
            </div>
         { urlId &&  <YouTube videoId={ urlId.key } opts={opts} />}
        </div>
     );
}
 
export default RowPost; 