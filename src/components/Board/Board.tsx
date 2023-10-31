import { useState } from "react";
import "./styles.css";
import useGame, { CellState } from "../../hooks/useGame";
import ShapeSelector from "./ShapeSelector";

export default function Board() {
  const [intervalPeriod, setIntervalPeriod] = useState(100);

  const {
    simulationRunning,
    board,
    modifyIndex,
    startSimulation,
    generation,
    stopSimulation,
    resetSimulation,
  } = useGame(100, intervalPeriod);

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
      <button onClick={startSimulation} disabled={simulationRunning}>
        Start
      </button>
      <button onClick={stopSimulation} disabled={!simulationRunning}>
        Pause
      </button>
      <button onClick={resetSimulation}>Reset</button>
      <h2>Generation: {generation}</h2>

      <label>Time for next generation</label>
      <input
        type="range"
        min={100}
        max={1000}
        onChange={(e) => setIntervalPeriod(e.target.valueAsNumber)}
      />
      <ShapeSelector />
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
