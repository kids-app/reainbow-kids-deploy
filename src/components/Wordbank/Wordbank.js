import React from 'react';

const Wordbank = (props) => {
	let {words} = props
	return(
		<div style={{display: 'inline-block', marginBottom:'5px'}} className='center'>
			<h2>Wordbank</h2>
			<p>{words}</p>
		</div>
	)
}

export default Wordbank;