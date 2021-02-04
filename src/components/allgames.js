import React from 'react';
import { Link } from 'react-router-dom';
import "../css/footer.css";
import "../css/nav.css";
import Footer2 from './footer2';

export default function AllGames(){
    return(
        <>
        <Link to='/gamexo' >
         <h1 class='xogame'>XO game</h1>
         </Link>

    <Link to='/piano' >
    <h1 class='xogame'>Play the Piano</h1>
    </Link>
<Footer2/>
{/* <Nav/> */}
         </>

    )
}