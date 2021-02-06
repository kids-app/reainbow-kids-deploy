import React, { useState,useEffect } from "react";
import axios from 'axios';
import PostLoadingComponent from './components/postLoading';
import {  Link } from 'react-router-dom';
import NavSongs from '../src/components/navSongs';

import "./css/youtube.css";


function Youtube(props){
  const PostLoading = PostLoadingComponent(video);
  
  let dd="unset"
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
    if(props.show_title === 'none'){
          dd=props.show_title
    }
  return(
    <>
    <body class='songsbody'>
    <div class='h1divv'>
    <h1 id='Aghyad' style ={{display:`${dd}`}} className='songsTitle'>Songs</h1>
    </div>
      <div class='allSongsDiv'>
             <PostLoading isLoading={appState.loading} songs={appState.songs} />
      </div>
    
       <NavSongs />
       </body>
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