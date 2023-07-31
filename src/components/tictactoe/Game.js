import React, { useReducer, useState } from 'react';
import Board from './Board';
import "./GameStyle.css";
import { calculateWinner } from '../../helper';

// innitialState = {}

const initialState = {
    board: Array(9).fill(null),
    xIsNext: true
};

// immutable

// deep copy JSON.parse(JSON.stringify(obj))

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK' : {
            const {board, xIsNext} = state;
            const {index, winner} = action.payload;
            if (winner || board[index]) return state;
            const nextState = JSON.parse(JSON.stringify(state));
            nextState.board[index] = xIsNext ? 'X' : 'O';
            nextState.xIsNext = !xIsNext;

            return nextState;
        }

        case 'RESET' : {
            const nextState = JSON.parse(JSON.stringify(state));
            nextState.board = Array(9).fill(null);
            nextState.xIsNext = true;
            return nextState;
        }
        default :
            break;
    }

    return state;
}

const Game = () => {
    // const [board, setBoard] = useState(Array(9).fill(null));

    // const [xIsNext, setxIsNext] = useState(true);

    // useReducer

    const [state, dispatch] = useReducer(gameReducer, initialState);

    // const action = {type: 'CLICK', payload:{}};

    // const [state, setState] = useState({
    //     board: Array(9).fill(null),
    //     xIsNext: true
    // });

    const winner = calculateWinner(state.board);

    const handleClick = (index) => {
        // const boardCoppy = [...state.board];
        // if (winner || boardCoppy[index]) {
        //     return;
        // }

        // boardCoppy[index] = state.xIsNext ? 'X' : 'O';
        // setBoard(boardCoppy);
        // setxIsNext(!xIsNext);

        // setState({
        //     ...state,
        //     board: boardCoppy,
        //     xIsNext: !state.xIsNext,
        // });

        dispatch({
            type: 'CLICK',
            payload: {
                index,
                winner
            }
        })
    };

    const handleRestGame = () => {
        // setBoard(Array(9).fill(null));
        // setxIsNext(true);
        // setState({
        //     ...state,
        //     board: Array(9).fill(null),
        //     xIsNext: true,
        // });

        dispatch({
            type: 'RESET'
        })
    }

    return (
        <div className="game">
            <Board 
                cells={state.board} 
                onClick={handleClick}></Board>
            <a href="#" className="button" onClick={handleRestGame}>Reset game</a><br/>
            {`Winner is ${winner ? winner : ''}`}
        </div>
    );
};

export default Game;