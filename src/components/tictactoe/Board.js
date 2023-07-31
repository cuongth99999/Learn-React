import React from 'react';
import Cell from './Cell';

const Board = (props) => {

    // const array = Array(9).fill(0); // Tao mang voi 9 phan tu 0

    return (
        <div className="game-board">
            {props.cells.map((item, index) => (
                <Cell 
                    key={index} 
                    value={item} 
                    onClick={() => props.onClick(index)}></Cell>
            ))}
        </div>
    );
};

export default Board;