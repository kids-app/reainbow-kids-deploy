import React from 'react';
// import '../css/main.css'

const HomeScreen = (props) => {
	const {categories, playGame} = props;


	return(
		<div className='home'>
			<h1 className='gush'>Welcome to Guess That Song Game</h1>
			<p className='gusp'> Let's listen to a song and test your knowlege of English songs.</p>
			<ul>{categories.map(item => <button className='btngus' key={item} onClick={playGame}>{item}</button>)}</ul>
		</div>
	)
}

export default HomeScreen;