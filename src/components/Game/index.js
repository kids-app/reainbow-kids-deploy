import React, { useState } from 'react'
import Board from '../Board'
import { calculateWinner } from '../../winner'
import './style.css'
import Nav3 from '../../components/nav3';

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0) 
    const [isXNext, setIsXNext] = useState(true) 
    const winner = calculateWinner(history[stepNumber]) 

    function handleClick(i) {
        const timeInHistory = history.slice(0, stepNumber + 1) 
        const current = timeInHistory[stepNumber] 
        const squares = [...current] 
        if (winner || squares[i]) return; 
        squares[i] = isXNext ? 'X' : 'O'; 
        setHistory([...timeInHistory, squares])
        setStepNumber(timeInHistory.length)
        setIsXNext(!isXNext)
    }

    const jumpTo = step => {
       
        setStepNumber(step)
        setIsXNext(step % 2 === 0)
    }

    const renderMoves = () => (
       
        history.map((_step, move) => {
            if (move){
               return ""

               }
            else{
                const destination = "Restart"
                return (
                    <>
                    <div class='divnavgame'>
                     <Nav3 />
                    <li className='listButtons' key={move}>
                        
                        <button className='buttons' onClick={() => jumpTo(move)}>{destination}</button>
                        
                    </li>
                    </div>
                    </>
                )
            }
        
         
            }
           
        )  
    )


    return (
        <>
            <div className="player">
                <p class='winnerpar'>{winner ? 'Winner: ' + winner : 'Turn: ' + (isXNext ? 'X' : 'O')}</p>
            </div>
            <Board className = 'board'squares={history[stepNumber]} onClick={handleClick} />
            <div className="moves">
                {renderMoves()}
            </div>
        </>
    )

}

export default Game