import React from 'react';
import { useEffect, useState } from 'react';
import PostLoadingComponent from './postLoading';
import Footer from './footer';
import axios from 'axios';

// var WordPOS = require('wordpos'),


function Mais  ({match}){
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
    const PostLoading = PostLoadingComponent(Guess);

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
        }, );
        return(
            <div>
                   <PostLoading isLoading={appState.loading} post={appState.post} />
            </div>
)

}

function Guess(props){

    // var WordPOS = require('wordpos'),
    // wordpos = new WordPOS();

    // wordpos.getAdjectives('The angry bear chased the frightened little squirrel.', function(result){
    // console.log(result);
// });

    return(
       <>
        <div>
         
            <p>{props.post.content}</p>
          
        
        </div>
        <Footer />
        </>
    )

}



export default Mais;

