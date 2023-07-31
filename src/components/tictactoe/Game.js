import React, { useState } from 'react';
import Board from './Board';
import "./GameStyle.css";
import { calculateWinner } from '../../helper';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));

    const [xIsNext, setxIsNext] = useState(true);

    const winner = calculateWinner(board);

    const handleClick = (index) => {
        const boardCoppy = [...board];
        if (winner || boardCoppy[index]) {
            return;
        }
        boardCoppy[index] = xIsNext ? 'X' : 'O';
        setBoard(boardCoppy);
        setxIsNext(!xIsNext);
    };

    const handleRestGame = () => {
        setBoard(Array(9).fill(null));
        setxIsNext(true);
    }

    return (
        <div className="game">
            <Board 
                cells={board} 
                onClick={handleClick}></Board>
            <a href="#" className="button" onClick={handleRestGame}>Reset game</a><br/>
            {winner ? `Winner is ${winner ? 'X' : 'O'}` : ''}
        </div>
    );
};

export default Game;