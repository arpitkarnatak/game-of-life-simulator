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
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createPortal } from "react-dom";
import HelpModal from "./HelpModal";
import useBoardCanvas from "../../hooks/useBoardCanvas";

export default function Board() {
  const [intervalPeriod, setIntervalPeriod] = useState(100);
  const [showHelpModal, setshowHelpModal] = useState(false);

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

  const canvasRef = useBoardCanvas(board);

  return (
    <div className="board-main">
      {showHelpModal &&
        createPortal(
          <HelpModal onClose={() => setshowHelpModal(false)} />,
          document.getElementById("modal-root") ?? document.body
        )}
      <h2>Generation: {generation}</h2>
      <label>Time for next generation</label>
      <input
        type="range"
        min={100}
        max={1000}
        onChange={(e) => setIntervalPeriod(e.target.valueAsNumber)}
      />
      <div>
        <canvas
          ref={canvasRef}
          onClick={(e) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cellSize = 12;
            const rowIndex = Math.floor(y / cellSize);
            const colIndex = Math.floor(x / cellSize);
            modifyIndex(rowIndex, colIndex);
          }}
        ></canvas>
      </div>

      <div className="animation-control-bar">
        <ShapeSelector />
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
        <a
          className="download-btn"
          download={`configuration-${new Date().getTime()}.txt`}
          target="_blank"
          rel="noreferrer"
          href={URL.createObjectURL(getFileFromBoard())}
        >
          <FontAwesomeIcon icon={faDownload} color="white" />
        </a>
        <button onClick={() => setshowHelpModal(true)}>
          <FontAwesomeIcon icon={faCircleInfo} color="white" />
        </button>
      </div>
    </div>
  );
}
