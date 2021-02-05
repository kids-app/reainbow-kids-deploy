import React from 'react';
import { Link } from 'react-router-dom';
import "../css/footer.css";
import "../css/nav.css";
import Nav2 from './nav2.js';
import Footer2 from './footer2';
import "../css/games.css";
import "../css/nav.css";

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
  <figure class="ball"><span class="shadow"></span><img class='imgpiano' src={require('../pics/pianopic.png')}/></figure>
  
</section>
</Link>
 

</div>
<Link to='/gamexo' >
<section class="stagegames2">
  <figure class="ballgames"><span class="shadow"></span><img class='imgxo' src={require('../pics/xo.png')}/></figure>
</section>
</Link>
<Nav2 />

         </>

    )
}



