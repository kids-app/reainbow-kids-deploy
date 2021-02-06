
import React from 'react';
import "../css/footer.css";
import "../css/nav.css";





function Navstories(){
	return (
		<>

<section class="navstoriessect">
  <div id="home" class="navdivsto"><p id="homep" class="p">  <a class="myanqsto" href="/home">Home</a></p></div>
  <div class="navdivsto" id="about"><p class="p"><a class="myanqsto" href="/stories">Stories</a></p>
  </div>
  <div class="navdivsto" id="contact"><p class="p"><a class="myanqsto" href="/games">Games</a></p>
  </div>
  <div class="navdivsto" id="gallery"><p class="p"><a class="myanqsto" href="/songs">Songs</a></p>
  </div>

</section>
 
      </>
		
		
	);
}

export default Navstories;