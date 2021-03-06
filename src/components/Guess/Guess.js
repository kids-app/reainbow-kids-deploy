import React from 'react';



const Guess = (props) => {

	function onKeyPress (e) {
	    if(e.which === 13) {
	      props.checkGuess()
	    }
	}

	let box = {
		fontSize: '24px',
	}

	let grid = {
		display: 'grid',
		gridTemplateRows: '1fr 1fr'
	}

	let {checkGuess,myGuess} = props
	return(
		<div className='gusbox' style={grid}>
			<input  className='gusin'
			onKeyPress={(event) => onKeyPress(event)}
			onChange={myGuess}
			type="text" 
			placeholder="Enter Full Song or Letter" 
			style={box}/>
			<input className='guss'
			onClick={() => {
				checkGuess()
			}}
			type= "submit" 
			value='SUBMIT'
			/>
		</div>
	)
}

export default Guess;