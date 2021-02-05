import React from 'react';
import "../css/footer.css";
import "../css/nav.css";
// import { Link } from 'react-router-dom';




function Footer() {

    
	return (
		<>
        <div class='menucontainer'>
  <nav class="menu">
   <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
   <label class="menu-open-button" for="menu-open">
    <span class="lines line-1"></span>
    <span class="lines line-2"></span>
    <span class="lines line-3"></span>
  </label>


   <a href="/aboutus" class="menu-item red"> ABOUT<i class="fa fa-heart"></i> </a>
   <a href="/register" class="menu-item purple">SIGN UP <i class="fa fa-microphone"></i> </a>
  
 
</nav>
</div>
		</>
		
	);
}

export default Footer;
