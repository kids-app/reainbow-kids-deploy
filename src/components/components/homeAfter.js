import React from 'react';
import "../css/home.css";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';


class HomeAfter extends React.Component {
    state = {
        redirect: false
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
    render() {
        return (
            <>
                <main>
                    <section class="stage">

                        <Link to='/stories' >
                            <figure class="ball bubble"><img alt='img' class='img1' src={require('../pics/story3.png')}/></figure>
                        </Link>
                    </section>
                    <section class="stage2">
                        <Link to='/games' >
                            <figure class="ball2 bubble"><img alt='img' class='img2' src={require('../pics/games.png')}/></figure>
                        </Link>
                    </section>
                    <section class="stage3">
                        <Link to='/songs'>
                            <figure class="ball3 bubble"><img alt='img' class='img3' src={require('../pics/songs.png')}/></figure>
                        </Link>
                    </section>
                    <section class="stage4">
                        <Link>
                            <figure class="ball4 bubble"><img alt='img' class='img4' src={require('../pics/whoknows.png')}/></figure>
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




