import React, { useState,useEffect } from "react";
import axios from 'axios';
import PostLoadingComponent from './components/postLoading';
import { BrowserRouter as Link } from 'react-router-dom';
import Nav from '../src/components/nav';

import "./css/youtube.css";


function Youtube(){
  const PostLoading = PostLoadingComponent(video);

  const [appState, setAppState] = useState({
      loading: true,
      songs: null,
  });
  useEffect(() => {
      axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=PL028565C616627F50&key=AIzaSyD4ymzgWkxRKeh_o-2JkLU7cZWCGxm0AoM').then((res) => {
          const songs = res.data;
          setAppState({ loading: false, songs: songs });
      });
  }, [setAppState]);
  return(
    <>
    <h1 className='songs'>Songs List</h1>
      <div>
             <PostLoading isLoading={appState.loading} songs={appState.songs} />
      </div>
     
       <Nav />
       </>
  )
  
}

function video(props){
  return(
    <>
 <div class='youtubecontainer'>
    {props.songs.items.map(item=>{
      return(
        
        <>


      <div className='vee'>
  <Link  to={`/songs/${item.snippet.resourceId.videoId}`} ><img alt='img' className='youtubeLink' src={item.snippet.thumbnails.default.url} /> </Link>
  </div>
      </>
        )
    })}
    </div>
    </>
  )
}

export default Youtube;