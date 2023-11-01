import { useCallback, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export enum CellState {
  ALIVE,
  JUST_DIED,
  DEAD,
}

export default function useGame(intervalPeriod: number) {
  let intervalId: number;
  const { currentShape, boardSize } = useContext(GlobalContext);
  const [board, setBoard] = useState<CellState[][]>(
    Array.from({ length: boardSize }, () =>
      Array(boardSize).fill(CellState.DEAD)
    )
  );

  const [simulationStarted, setSimulationStarted] = useState(false);
  const [generation, setGeneration] = useState(0);

  function modifyIndex(rowIndex: number, colIndex: number) {
    if (
      rowIndex + currentShape.height <= boardSize &&
      colIndex + currentShape.width <= boardSize
    ) {
      console.log(rowIndex, colIndex);
      setBoard((prev) =>
        prev.map((row, rowIdx) =>
          row.map((cell, colIdx) => {
            for (const [dx, dy] of currentShape.coordinates) {
              const x = rowIndex + dx;
              const y = colIndex + dy;
              if (
                x < boardSize &&
                y < boardSize &&
                rowIdx === x &&
                colIdx === y
              ) {
                return CellState.ALIVE;
              }
            }
            return cell;
          })
        )
      );
    }
  }

  const simulate = useCallback(
    function () {
      setBoard((prev) => {
        const next = prev.map((row) => [...row]);
        for (let i = 0; i < boardSize; i++) {
          for (let j = 0; j < boardSize; j++) {
            const aliveNeighbors = [
              [-1, -1],
              [-1, 0],
              [-1, 1],
              [0, -1],
              [0, 1],
              [1, -1],
              [1, 0],
              [1, 1],
            ].reduce((acc, [dx, dy]) => {
              const x = i + dx;
              const y = j + dy;
              if (
                x >= 0 &&
                x < boardSize &&
                y >= 0 &&
                y < boardSize &&
                prev[x][y] === CellState.ALIVE
              ) {
                acc += 1;
              }
              return acc;
            }, 0);

            if (prev[i][j] === CellState.ALIVE) {
              next[i][j] =
                aliveNeighbors === 2 || aliveNeighbors === 3
                  ? CellState.ALIVE
                  : CellState.JUST_DIED;
            } else {
              next[i][j] =
                aliveNeighbors === 3 ? CellState.ALIVE : CellState.DEAD;
            }
          }
        }
        return next;
      });
      setGeneration((prev) => prev + 1);
    },
    [boardSize]
  );

  useEffect(() => {
    if (simulationStarted) {
      intervalId = setInterval(simulate, intervalPeriod - 20);
    }
    return () => clearInterval(intervalId);
  }, [simulationStarted, intervalPeriod]);

  return {
    board,
    modifyIndex,
    simulationRunning: simulationStarted,
    startSimulation: () => setSimulationStarted(true),
    stopSimulation: () => setSimulationStarted(false),
    resetSimulation: () => {
      setSimulationStarted(false),
        clearInterval(intervalId),
        setGeneration(0),
        setBoard(
          Array.from({ length: boardSize }, () =>
            Array(boardSize).fill(CellState.DEAD)
          )
        );
    },
    forwardStep: simulate,
    generation,
  };
}
