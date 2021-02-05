import React from 'react';
import Square from '../Square'

function Board({ squares, onClick }) {
    const style = {
        border: '4px solid #ff4d94',
        borderRadius: '10px',
        width: '450px',
        height: '450px',
        margin: '0 auto',
        marginTop:'150px',
        display: 'grid',
        
        
        gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
    }
    return (
        <div style={style}>
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    )
}

export default Board