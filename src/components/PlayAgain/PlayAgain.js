import React from 'react';

const PlayAgain = (props) => {
	return(
		<>
		<div className = 'home'>
			<h1>{props.gameWon}</h1>
			<button className='btngus' onClick={props.restartGame}>Play again?</button>
		</div>
		</>
	)
}

export default PlayAgain;