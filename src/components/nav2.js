
import React from 'react';
import "../css/footer.css";
import "../css/nav2.css";
import { Link } from 'react-router-dom';





function Nav2(){
	return (
		<>
     <section class="navsect">
  <div id="home" class="navdiv"><p id="homep" class="p">  <a class="myanq" href="/home">Home</a></p></div>
  <div class="navdiv" id="about"><p class="p"><a class="myanq" href="/stories">Stories</a></p>
  </div>
  <div class="navdiv" id="contact"><p class="p"><a class="myanq" href="/games">Games</a></p>
  </div>
  <div class="navdiv" id="gallery"><p class="p"><a class="myanq" href="/songs">Songs</a></p>
  </div>

</section>
      </>
		
		
	);
}

export default Nav2;