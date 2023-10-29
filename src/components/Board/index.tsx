import React, { useState } from "react";
import "./styles.css";
import useGame, { CellState } from "./useGame";

export default function GameBoard() {
  const [intervalPeriod, setIntervalPeriod] = useState(100);
  const { board, modifyIndex, startSimulation, generation } = useGame(
    50,
    intervalPeriod
  );

  function getCellState(state: CellState) {
    switch (state) {
      case CellState.ALIVE:
        return "alive-cell";
      case CellState.JUST_DIED:
        return "just-died-cell";
      default:
        return "dead-cell";
    }
  }

  return (
    <div>
      <button onClick={startSimulation}>Start</button>
      <h2>Generation: {generation}</h2>

      <input
        type="range"
        min={100}
        max={5000}
        onChange={(e) => setIntervalPeriod(e.target.valueAsNumber)}
      />
      <div className="grid">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((col, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`grid-cell ${getCellState(col)}`}
                onClick={() => modifyIndex(rowIndex, colIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
