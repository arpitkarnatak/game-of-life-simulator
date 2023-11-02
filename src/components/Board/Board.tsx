import { useState, useCallback } from "react";
import "./styles.css";
import useGame, { CellState } from "../../hooks/useGame";
import ShapeSelector from "./ShapeSelector";
import {
  faForwardStep,
  faPause,
  faPlay,
  faSquare,
  faDownload,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Board() {
  const [intervalPeriod, setIntervalPeriod] = useState(100);

  const {
    simulationRunning,
    board,
    forwardStep,
    modifyIndex,
    startSimulation,
    generation,
    stopSimulation,
    resetSimulation,
  } = useGame(intervalPeriod);

  const getFileFromBoard = useCallback(() => {
    const data = board
      .map((row) =>
        row.reduce(
          (rowString, cell) =>
            rowString + (cell === CellState.ALIVE ? "O" : "."),
          ""
        )
      )
      .join("\n");
    return new Blob([data], { type: "text/plain" });
  }, [board]);

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
    <div className="board-main">
      <h2>Generation: {generation}</h2>

      <label>Time for next generation</label>
      <input
        type="range"
        min={100}
        max={1000}
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

      <div className="animation-control-bar">
        <button onClick={resetSimulation}>
          <FontAwesomeIcon icon={faSquare} color="red" />
        </button>
        <button onClick={simulationRunning ? stopSimulation : startSimulation}>
          <FontAwesomeIcon
            icon={simulationRunning ? faPause : faPlay}
            color={simulationRunning ? "white" : "rgb(0,255,0)"}
          />
        </button>
        <button onClick={forwardStep}>
          <FontAwesomeIcon icon={faForwardStep} color="skyblue" />
        </button>
        <button>
          <a
            download="configuration.txt"
            target="_blank"
            rel="noreferrer"
            href={URL.createObjectURL(getFileFromBoard())}
          >
            <FontAwesomeIcon icon={faDownload} color="white" />
          </a>
        </button>
        <button>
          <FontAwesomeIcon icon={faInfo} color="white" />
        </button>
        <ShapeSelector />
      </div>
    </div>
  );
}
