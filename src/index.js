import React from 'react';
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Youtube from './Youtubek';
import Videoid from './Videoid';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import Game from './components/Game/index';

import  Stories  from './components/stories';
import Joudi from './components/story';
import Aboutus from './components/aboutus';
import "./App.css";
import Mais from './components/guessingGame';


import Home from './components/home';
import HomeAfter from './components/homeAfter';
import AllGames from './components/allgames';
import Piano from './Piano'

// 

const routing = (
    <Router>
        <React.StrictMode>
            <Switch>
           
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={HomeAfter} />

                {/* <Route exact path="/songs" component={App} /> */}
                <Route path="/aboutus" component={Aboutus} />

                <Route exact path="/songs" component={Youtube} />
                <Route  path="/songs/:id" component={Videoid} />

               


                <Route path="/gamexo" component={Game} />
                <Route className="app-container" path="/piano" component={Piano} />
                <Route path="/games" component={AllGames} />
                <Route path="/register" component={Register} />
                <Route path="/guessing/:id" component={Mais} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route  path="/stories" component={Stories}/>    
                <Route path="/:id" component={Joudi}/> 

                    
            </Switch>
            
            
        </React.StrictMode>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


