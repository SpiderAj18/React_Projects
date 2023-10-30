import { useState } from 'react';
import Square from './component/Square';
import './App.css'
export default function Board() {
  const [xIsNext, setXisNext] = useState(true);
  const [square,setSquare] = useState(Array(9).fill(null))

  function handleClick(i){
    if (square[i] || calculateWinner(square)){
      return;
    }
    const nextSquares = square.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquare(nextSquares);
    setXisNext(!xIsNext);  
  }
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
       <div className="status">{status}</div>
      <div className="board-row">
        <Square value={square[0]} onSqureClick={()=>handleClick(0)}/>
        <Square value={square[1]} onSqureClick={()=>handleClick(1)}/>
        <Square value={square[2]} onSqureClick={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={square[3]} onSqureClick={()=>handleClick(3)}/>
        <Square value={square[4]} onSqureClick={()=>handleClick(4)}/>
        <Square value={square[5]} onSqureClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={square[6]} onSqureClick={()=>handleClick(6)}/>
        <Square value={square[7]} onSqureClick={()=>handleClick(7)}/>
        <Square value={square[8]} onSqureClick={()=>handleClick(8)}/>
      </div>
    </>
  );
}


 function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}
