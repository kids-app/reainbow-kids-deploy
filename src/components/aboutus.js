import React  from 'react';
import '../stories.css'
function Aboutus(){

   return(
       <> 

        <div class="infocardContainer">
  <div id="main">
  <img  src={require('../pics/mais.jpg')} alt='img'/>
  </div>
  <div id="textbois">
    <h2>Mais Abbdalrazeq</h2>
    <h4>Web Developer</h4>
    <a href="mailto:maisabdalrazq@gmail.com">maisabdalrazq@gmail.com</a>
  </div>
</div>



<div class="infocardContainer2">
  <div id="main">
  <img  src={require('../pics/sondos.jpg')} alt='img'/>
  </div>
  <div id="textbois">
    <h2>Sondos Al-Braim</h2>
    <h4>Web Developer</h4>
    <a href="mailto:sondosalbraim@gmail.com">sondosalbraim@gmail.com</a>
  </div>
</div>



<div class="infocardContainer3">
  <div id="main">
  <img  src={require('../pics/joudi.jpg')} alt='img'/>
  </div>
  <div id="textbois">
    <h2>Joudi Awwameh</h2>
    <h4>Web Developer</h4>
    <a href="mailto:joudiawwameh@gmail.com">joudiawwameh@gmail.com</a>
  </div>
</div>


<div class="infocardContainer4">
  <div id="main">
  <img  src={require('../pics/rand.jpg')} alt='img'/>
  </div>
  <div id="textbois">
    <h2>Rand Al-Sallaq</h2>
    <h4>Web Developer</h4>
    <a href="mailto:RandAl-Sallaq@gmail.com">RandAl-Sallaq@gmail.com</a>
  </div>
</div>


<div class="infocardContainer5">
  <div id="main">
  <img  src={require('../pics/diala.jpg')} alt='img'/>
  </div>
  <div id="textbois">
    <h2>Diala Abdalqader</h2>
    <h4>Web Developer</h4>
    <a href="mailto:dialaabdalqader@gmail.com">dialaabdalqader@gmail.com</a>
  </div>
</div>
     </>

   )


}


export default Aboutus;