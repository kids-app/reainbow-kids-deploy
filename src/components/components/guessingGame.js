import React from 'react';
import { useEffect, useState } from 'react';
import PostLoadingComponent from './postLoading';
import Footer from './footer';
import axios from 'axios';




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
var app_id = "3859e772";
var app_key = "6e2dc25c99c2a336e94e86a9fffc8cb3";
const onSearch = async word => {
const url='https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v2/entries/en-us/'+
word

const result = await fetch(
    url,
    {
      headers: {
        app_id,
        app_key,
     
      }
    }
  );
  const data = await result.json();
  console.log(data)
  return data
}
function Guess(props){
    var adjectives=[]
    var words=props.post.content.split(" ");
    for(var i=0;i<words.length;i++){
        var data=onSearch(words[i])
        if (data.lexical=='adj'){
            adjectives.push(words[i])
        }
    }
    console.log(words)
    return(
        <>
        <p>{props.post.content}</p>
        <h1>Hiiiiiiiii</h1>
        </>
    )
}


export default Mais;

