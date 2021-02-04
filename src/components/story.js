import React  from 'react';
import { useEffect, useState } from 'react';
// import '../stories.css'
import axios from 'axios';
import PostLoadingComponent from './postLoading';

import {  BrowserRouter as  Link } from 'react-router-dom';
import Footer2 from './footer2';

import Nav from './nav';

function Joudi  ({match}){
        var baseURL=`https://stories-api-for-kids.herokuapp.com/api/${match.params.id}/`
        const axiosInstance = axios.create({
            baseURL: baseURL,
            timeout: 5000,
            headers: {
                Authorization: localStorage.getItem('access_token')
                    ? 'JWT ' + localStorage.getItem('access_token')
                    : null,
                'Content-Type': 'application/json',
                accept: 'application/json',
            }, 
        });
        const PostLoading = PostLoadingComponent(Sondos);

            const [appState, setAppState] = useState({
                loading: true,
                post: null,
            });
            useEffect(() => {
                axiosInstance.get().then((res) => {
                    const detailPost = res.data;
                    setAppState({ loading: false, post: detailPost });
                    console.log(res);
                });
            });
            return(
                <div>
                       <PostLoading isLoading={appState.loading} post={appState.post} />
                </div>
    )

}
    function Sondos(props){
        return(
           <>
           
            <div>
                <div className='part1'>
                <h1 className='first'>{props.post.title}</h1>
                <div className='imgand'>
                <img className='second' src={props.post.img} alt='stories-img'/>
                <audio className='third' src={props.post.audio} controls> <embed src={props.post.audio} width="300" height="90" loop="false" autostart="false"></embed> </audio>
                </div>
                <div className='five' > <button className='but'><Link to={`/guessing/${props.post.id}`} >Guessing Game</Link></button></div>
                </div>
                <div className='par'><p className='fourth'>{props.post.content}</p></div> 
                
            
            </div>
            <Footer2 />
            <Nav />
            </>
        )

    }
export default Joudi;  