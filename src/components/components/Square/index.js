import React from 'react'

function Square({ value, onClick }) {
    const style = {
        fontSize: '30px',
        backgroundColor: '#ff3385',
        opacity:'60%',
        border: '2px solid #e6ecff',
        fontWeight: '800',
        cursor: 'pointer',
        outline: 'none'
    }

    //se value for 'X' a cor da fonte será vermelha. Senão será azul
    style.color = value === 'X' ? '#4d001f' : 'darkblue'
    

    return (
        <button style={style} onClick={onClick}>{value}</button>
    )

}

export default Square