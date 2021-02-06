import React from 'react';

const Textbox = (props) => {
	let font = {
		fontSize: '36px'
	}
	let {encrypt} = props
	return(
		<div className='textBox'>
			<h2 style={font}>{encrypt}</h2>
		</div>
	)
}

export default Textbox;