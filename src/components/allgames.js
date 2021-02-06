import React from 'react';
import { Link } from 'react-router-dom';

// import Footer2 from './footer2';
import "../css/games.css";
import Nav3 from './nav3.js';


export default function AllGames(){
    return(
        <>
{/*       
        <Link to='/gamexo' >
         <h1 class='xogame'></h1>
         </Link>

    <Link to='/piano' >
    <h1 class='xogame'></h1>
    </Link> */}

<div class='game1div'>
<Link to='/piano' >
<section class="stagegames">
  <figure class="ball"><span class="shadow"></span><img  alt='img' class='imgpiano' src={require('../pics/pianopic.png')}/></figure>
  
</section>
</Link>
 

</div>
<Link to='/gamexo' >
<section class="stagegames2">
  <figure class="ballgames"><span class="shadow"></span><img alt='img' class='imgxo' src={require('../pics/xo.png')}/></figure>
</section>
</Link>
<Nav3 />

         </>

    )
}



