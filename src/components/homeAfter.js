import React from 'react';
import "../css/home.css";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import Footer from './footer';
import stories from '../assets/Audio/stories.mp3';
import songs from '../assets/Audio/songs.mp3';
import games from '../assets/Audio/games.mp3';
import guessthesong from '../assets/Audio/guessthesong.mp3';

class HomeAfter extends React.Component {
    state = {
        redirect: false,
        audio : new Audio(stories),
        audio2 : new Audio(songs),
        audio3 : new Audio(games),
        audio4 : new Audio(guessthesong),
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderlogin = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }
    changeBackground =(e) => {

        this.state.audio.play()
      }
    changeBackground2 =(e) => {

        this.state.audio2.play()
      }  
    changeBackground3 =(e) => {

        this.state.audio3.play()
      }  
    changeBackground4 =(e) => {

        this.state.audio4.play()
      }
    render() {
        return (
            <>
            <Footer />
                <main>
                <h1 class='welcome'> Welcome To Rainbow-KID</h1>
              <div class='paraDiv'>
              <p class='homaPara'>Where you can safely leave your kid to have fun and learn navigating through ranibow-kid's features.</p>
              </div>
                    <section class="stage">

                        <Link to='/stories' >
                            <figure onMouseOver={this.changeBackground}

                            class="ballmain bubble"><img alt='img' class='img1' src={require('../pics/story3.png')}/></figure>
                        </Link>
                    </section>
                    <section class="stage2">
                        <Link to='/games' >
                            <figure onMouseOver={this.changeBackground3}
                                
                             class="ball2 bubble"><img alt='img' class='img2' src={require('../pics/games.png')}/>
                             </figure>
                        </Link>
                    </section>
                    <section class="stage3">
                        <Link to='/songs'>
                            <figure onMouseOver={this.changeBackground2}

                            class="ball3 bubble"><img alt='img' class='img3' src={require('../pics/songs.png')}/></figure>
                        </Link>
                    </section>
                    <section class="stage4">
                        <Link to='/guess'>
                            <figure onMouseOver={this.changeBackground4}

                            class="ball4 bubble"><img alt='img' class='img4' src={require('../pics/guess2.png')}/></figure>
                        </Link>
                    </section>
                    {this.renderlogin()}
                    <button class="signin" type="button" onClick={this.setRedirect}>Sign Out</button>
                </main>
                <script src="app.js"></script>
            </>
        )
    }
}

export default HomeAfter;




